import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import * as dotenv from 'dotenv'
import './db/dbConnect.js';
dotenv.config()


const app = express();
const port = process.env.PORT_SERVER || 3000;
const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, "../../", "public");

app.use(express.static(publicDirectory));

const serverHttp = http.createServer(app)
serverHttp.listen(port , () => 
    console.log(`Server on in port ${port}`)
)

const io = new Server(serverHttp);

export default io;