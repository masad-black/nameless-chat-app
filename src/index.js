import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

import runSocketServer from "./socket.js";

dotenv.config({
  path: [".env"],
  debug: true,
});

// env variables
const clientURL = process.env.FRONTEND_URL;
const port = process.env.PORT;

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [clientURL],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// this will run the web-socket server
runSocketServer(io);

app.get("/", (req, res) => {
  res.json({
    message: `Server is running on port ${port}`,
  });
});

httpServer.listen(port);
