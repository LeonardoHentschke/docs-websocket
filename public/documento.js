import { emitDeleteDocument, emitTextAreaEditor, selectDocument } from "./socket-front-documento.js";

const param = new URLSearchParams(window.location.search);
const nameDocument = param.get('nome');

const textEditor = document.getElementById('text-editor');
const titleDocument = document.getElementById('title-document');
const buttonDelete = document.getElementById('delete-document');

titleDocument.textContent = nameDocument || 'Documento sem título'

selectDocument(nameDocument)

textEditor.addEventListener("keyup", () => {
    emitTextAreaEditor({
        textEditor: textEditor.value, 
        nameDocument
    })
});

buttonDelete.addEventListener('click', () => {
    emitDeleteDocument(nameDocument);
})

function updateTextAreaEditor(text) {
    textEditor.value = text
}

function alertAndRedirect(nameDocumentParam) {
    if (nameDocumentParam === nameDocument) {
        alert(`Documento ${nameDocumentParam} excluído!`);
        window.location.href = '/';
    }
}

export { updateTextAreaEditor, alertAndRedirect }