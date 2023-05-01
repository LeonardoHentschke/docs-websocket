const socket = io();

function emitLoginUser(dataLogin) {
    socket.emit("login-user", dataLogin)
}

socket.on("register-success", () => alert("Usuario com sucesso!"));
socket.on("register-error", () => alert("Erro ao cadastrar usuario"));
socket.on("register-name-exists", () => alert("Usuario já existe!"));

export { emitLoginUser };