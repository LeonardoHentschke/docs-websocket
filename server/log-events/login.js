import { registerUser, findUserByName } from "../db/usersDb.js";
import authenticateUser from "../utils/authenticateUser.js";

function login(socket, io){
    socket.on("login-user", async ({name, pass}) => {
        const user = await findUserByName(name);
        // if( user !== null) {
        //     const result =  authenticateUser(pass, user);
        //
        //
        // }else {
        //     socket.emit("register-name-exists");
        // }
        console.log(user)
        const result = authenticateUser(pass, user);
        console.log(result)
    })
}

export default login;