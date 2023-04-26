const socket = io();

function emitRegisterUser(dataRegister) {
    socket.emit("register-user", dataRegister)
}

socket.on("register-success", () => alert("Usuario com sucesso!"));
socket.on("register-error", () => alert("Erro ao cadastrar usuario"));
socket.on("register-name-exists", () => alert("Usuario já existe!"));

export { emitRegisterUser };