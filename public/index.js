import { emitAddDocument } from "./socket-front-index.js";

const listDocuments = document.getElementById('list-documents');
const form = document.getElementById('form-add-document');
const inputDocument = document.getElementById('input-document');

form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    emitAddDocument(inputDocument.value);
    inputDocument.value = "";
})

function insertLinkDocument(nameDocument) {
    listDocuments.innerHTML += `
        <a 
            href="documento.html?nome=${nameDocument}" 
            class="list-group-item list-group-item-action"
            id="document-${nameDocument}"
        >
            ${nameDocument}
        </a>
    `;
}

function deleteLinkDocument(nameDocument) {
    const child = document.getElementById(`document-${nameDocument}`);
    listDocuments.removeChild(child);
}

export { insertLinkDocument, deleteLinkDocument };