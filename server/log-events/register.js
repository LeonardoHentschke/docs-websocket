import { registerUser, findUserByName } from "../db/usersDb.js";

function register(socket, io){
    socket.on("register-user", async (dataRegister) => {
        const user = await findUserByName(dataRegister.name);
        if( user === null) {
            const result = await registerUser(dataRegister);

            if (result.acknowledged) {
                socket.emit("register-success");
            } else {
                socket.emit("register-error");
            }
        }else {
            socket.emit("register-name-exists");
        }

    })
}

export default register;