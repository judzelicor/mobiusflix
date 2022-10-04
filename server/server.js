"use strict";

import express from "express";
import dotenv from "dotenv";
import { resolve } from "path";
import {
    featuredRoute
} from "./routes/index.js";

// Load environment variables
dotenv.config({
    path: resolve(".env.local")
})

let server;
let port;

server = express();
port = process.env.PORT;

server.use("/api/v1/featured", featuredRoute);

server.listen(port, () => {
    console.log(`Mobiusflix server is listening on port ${ port }`);
})