import { alertAndRedirect, updateTextAreaEditor } from "./documento.js";

const socket = io();

socket.on("update-text-area-editor", (textEditorEmit) => {
    updateTextAreaEditor(textEditorEmit)
});

socket.on('delete-document-success', (name) => {
    alertAndRedirect(name);
});

function selectDocument(nameDocument){
    socket.emit("select-document", nameDocument, (text) => {
        updateTextAreaEditor(text);
    });
}

function emitTextAreaEditor(data) {
    socket.emit("text-editor", data);
}

function emitDeleteDocument(name) {
    socket.emit('delete-document', name);
}

export {
    emitTextAreaEditor,
    selectDocument,
    emitDeleteDocument
};