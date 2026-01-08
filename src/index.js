import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

import {
  getAvailableRoomsOnServer,
  getAvailableUserRoomName,
  joinAndSendMessageForDirectRoom,
  socketDisconnect,
  totalConnectedClinetsCount,
} from "./fn.js";
import {
  CONNECTION_EVENT,
  DIRECT_ROOM_EVENT,
  DISCONNECT_EVENT,
  GROUP_ROOM_EVENT,
} from "./constant.js";
import { UsersMap } from "./users_class.js";

dotenv.config({
  path: [".env"],
  debug: true,
});

// env variables
const clientURL = process.env.FRONTEND_URL;
const port = process.env.PORT;

// console.log(clientURL);

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: [clientURL],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Socket events
io.on(CONNECTION_EVENT, (socket) => {
  totalConnectedClinetsCount(io);
  // getAvailableRoomsOnServer(io);

  // 1: room for direct conversation
  socket.on(DIRECT_ROOM_EVENT, joinAndSendMessageForDirectRoom(socket));

  // 2: room for group conversation
  // socket.on(GROUP_ROOM_EVENT, () => {});

  socket.on(DISCONNECT_EVENT, socketDisconnect);
});

app.get("/", (req, res) => {
  res.json({
    message: `Server is running on port ${port}`,
  });
});

httpServer.listen(port);
