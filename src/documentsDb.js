import { documentsCollection } from "./dbConnect.js";

function getAllDocuments() {
    return documentsCollection.find().toArray();
}

function addDocument(nameDocument) {
    return documentsCollection.insertOne({
        name: nameDocument,
        text: ''
    });
}

function findDocument(nameDocument) {
    return documentsCollection.findOne({
        name: nameDocument
    });
}

function updateDocument(name, text) {
    return documentsCollection.updateOne({
        name
    }, {
        $set: {
            text
        }
    });
}

function deleteDocument(name) {
    return documentsCollection.deleteOne({
        name: name
    });
}

export {
    findDocument,
    updateDocument,
    getAllDocuments,
    addDocument,
    deleteDocument
};