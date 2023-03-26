import {
    addDocument,
    findDocument,
    getAllDocuments
} from "../db/documentsDb.js";

function logStartEvents(socket, io) {
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
}

export default logStartEvents;