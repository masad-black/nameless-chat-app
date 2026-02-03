import {
  CLIENT_CONNECTED_EVENT,
  CLIENT_DISCONNECT_EVENT,
  CLIENT_ROOM_EVENT,
  CONNECTION_EVENT,
  DISCONNECT_EVENT,
  JOIN_ROOM_EVENT,
  NEW_CONVERSATION_EVENT,
  NEW_MESSAGE_EVENT,
  RECEIVED_CONVERSATION_EVENT,
  RECEIVED_MESSAGE_EVENT,
  RECEIVED_STOP_TYPING_EVENT,
  SHOW_TYPING_EVENT,
  STOP_TYPING_EVENT,
  TYPING_EVENT,
} from "./constant.js";

// this will simpley add the socket to the room
function joinRoom(socket) {
  socket.on(JOIN_ROOM_EVENT, (conversationId) => {
    console.log(`User joined the room conversationId: `, conversationId);

    socket.join(`${conversationId}`);
  });
}

function listeningAndSendConversation(socket) {
  socket.on(NEW_CONVERSATION_EVENT, ({ payload }) => {
    payload.members.forEach((member) => {
      if (member.user.id !== socket.user.id) {
        socket.to(member.user.id).emit(RECEIVED_CONVERSATION_EVENT, payload);
      }
    });
  });
}

function listeningAndSendingMessag(socket) {
  socket.on(NEW_MESSAGE_EVENT, ({ payload }) => {
    console.log(payload);

    payload.members.forEach((member) => {
      if (payload.message.senderId !== member.userId) {
        socket.to(member.userId).emit(RECEIVED_MESSAGE_EVENT, payload.message);
      }
    });
  });
}

function listeningTyping(socket) {
  socket.on(TYPING_EVENT, ({ conversationId }) => {
    socket.to(conversationId).emit(SHOW_TYPING_EVENT, { response: true });
  });
}

function listeningToStopTyping(socket) {
  socket.on(STOP_TYPING_EVENT, (conversationId) => {
    socket.to(conversationId).emit(RECEIVED_STOP_TYPING_EVENT);
  });
}

export default function runSocketServer(io) {
  try {
    io.on(CONNECTION_EVENT, (socket) => {
      socket.user = socket.handshake.auth;

      // adding new connected user/socket to the
      // room to listen for the events
      socket.join(socket.user.id);

      // socket response that client is connected
      socket.emit(CLIENT_CONNECTED_EVENT, { response: true });
      console.log(`Client connected to the server and user id: ${socket.user.id}`);

      joinRoom(socket);
      listeningAndSendConversation(socket);
      listeningAndSendingMessag(socket);
      listeningTyping(socket);
      listeningToStopTyping(socket);

      // when client disconnect from the server
      socket.on(DISCONNECT_EVENT, () => {
        socket.emit(CLIENT_DISCONNECT_EVENT, { response: false });
        console.log(`---Client dis-connected from the server---`);
      });
    });
  } catch (error) {
    socket.emit(CLIENT_DISCONNECT_EVENT, { response: false });
    console.log(`---Client dis-connected from the server---`);
  }
}
