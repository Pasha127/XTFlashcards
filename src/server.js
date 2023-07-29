import express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import {createServer} from "http";
import router from "./api/router/index.js";
import errorHandler from "./lib/tools/errorHandler.js";
import listData from "./lib/data/data.json" assert {type: "json"};
export const server = express();
export const httpServer = createServer(server);
const port = process.env.PORT || 3001;

const tempDatabase= {
    projects: ['ToDoList'],
    users: ["Christie"],
    data: {
        ToDoList:{
            Christie: [
                "Study Chinese",
                "Learn React"
            ]
        }
    }
}
//const exampleRequest = {
//    project: "ToDoList",
//    user: "Christie",
//    auth: "",
//    data: {
//        
//    }
//}


const JSONFromObj = JSON.stringify(tempDatabase);
console.log(JSON.parse(JSONFromObj));
console.log(listData);

server.use(cors());
server.use(express.json());
server.use("/", router);
server.use(errorHandler);


