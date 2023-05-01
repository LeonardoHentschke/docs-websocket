import start from "./log-events/start.js";
import documents from "./log-events/documents.js";
import register from "./log-events/register.js";
import login from "./log-events/login.js";
import io from "./server.js";

io.on("connection", (socket) => {
    start(socket, io);
    documents(socket, io);
    register(socket, io);
    login(socket, io);
});