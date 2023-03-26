import logStartEvents from "./log-events/log-start-events.js";
import logEventsDocuments from "./log-events/log-events-documents.js";
import io from "./server.js";

io.on("connection", (socket) => {
    logStartEvents(socket, io);
    logEventsDocuments(socket, io);
});