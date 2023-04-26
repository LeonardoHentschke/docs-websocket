import { usersCollection } from "./dbConnect.js";
import hashAndSaltPass from "../utils/hashAndSaltPass.js";

function getAllUsers() {
    return usersCollection.find().toArray();
}

function registerUser({name, pass}) {
    const { hashPass, saltPass } = hashAndSaltPass(pass);
    return usersCollection.insertOne({
        name,
        hashPass,
        saltPass
    });
}

function findUserByName(name) {
    return usersCollection.findOne({
        name: name
    });
}

export {
    getAllUsers,
    registerUser,
    findUserByName
};