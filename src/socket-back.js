import io from "./server.js";
import {findDocument, updateDocument, getAllDocuments, addDocument, deleteDocument} from "./documentsDb.js";

io.on("connection", (socket) => {

    socket.on("get-documents", async (returnDocuments) => {
        const documents = await getAllDocuments();

        returnDocuments(documents);
    });

    socket.on('add-document', async (name) => {
        const checkDocument = (await findDocument(name)) !== null;

        if (checkDocument) {
            socket.emit('document-exist', name);
        } else {
            const resultAdd = await addDocument(name);

            if (resultAdd.acknowledged) {
                io.emit('add-document-interface', name);
            }
        }
    });

    socket.on("select-document", async (nameDocument, textToTextArea) => {
        socket.join(nameDocument)

        const document = await findDocument(nameDocument);
        if(document) {
            textToTextArea(document.text);
        }
    });

    socket.on("text-editor", async({textEditor, nameDocument}) => {
        const update = await updateDocument(nameDocument, textEditor);

        if(update.modifiedCount) {
            socket.to(nameDocument).emit("update-text-area-editor", textEditor);
        }
    });

    socket.on('delete-document', async (name) => {
        const resultDelete = await deleteDocument(name);

        if (resultDelete.deletedCount) {
            io.emit("delete-document-success", name);
        }
    })

});