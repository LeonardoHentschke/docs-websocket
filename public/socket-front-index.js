import { insertLinkDocument, deleteLinkDocument } from "./index.js";

const socket = io();

socket.emit('get-documents', (documents) => {
    documents.forEach(( document ) => {
        insertLinkDocument(document.name)
    });
});

socket.on('add-document-interface', (name) => {
    insertLinkDocument(name)
});

socket.on('document-exist', (name) => {
    alert(`O documento ${name} já existe!`);
})

socket.on('delete-document-success', (name) => {
    deleteLinkDocument(name)
})

function emitAddDocument(name) {
    socket.emit('add-document', name)
}

export { emitAddDocument }