import { MongoClient } from "mongodb";

const clientMongoDB = new MongoClient("mongodb+srv://dev:1VGqYmGtvLiK2Q9Q@project-websocket.vhcvkgu.mongodb.net/?retryWrites=true&w=majority");
let documentsCollection;
let usersCollection;

try {
    await clientMongoDB.connect();

    const db = clientMongoDB.db("db-project-websocket");
    documentsCollection = db.collection("documents");
    usersCollection = db.collection("users");

    console.log("Conectado ao banco de dados com sucesso!");

} catch (erro) {
    console.log(erro);
}

export { documentsCollection, usersCollection };