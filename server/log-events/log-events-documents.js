import {
    deleteDocument,
    findDocument,
    updateDocument
} from "../db/documentsDb.js";

function logEventsDocuments(socket, io) {
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
}

export default logEventsDocuments;