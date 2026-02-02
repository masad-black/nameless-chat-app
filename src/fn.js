import { UsersMap } from "./users_class.js";
import { JOIN_ROOM_EVENT, NEW_MESSAGE_EVENT } from "./constant.js";

export function totalConnectedClinetsCount(io) {
  console.log("Total Connected Clinets On Server: ", io.engine.clientsCount);

  //   return io.engine.clientsCount;
}

export function socketDisconnect(reason) {
  console.log("The Socket is Disconnected and Message is:  ", reason.trim());
}

export function getAvailableRoomsOnServer(io) {
  console.log("Total Rooms On the Server: ", io.sockets.adapter.rooms);
}

export function getAvailableUserRoomName(map, userIds) {
  if (!map.has(userIds.initiatorId) || !map.has(userIds.receiverId)) {
    return false;
  }

  return map.get(userIds.initiatorId) ? map.get(userIds.initiatorId) : map.get(userIds.receiverId);
}

export function joinAndSendMessageForDirectRoom(socket, io) {
  return function ({ userIds, message }) {
    console.log("message: ", message);

    // Make users join the room
    if (!UsersMap.getUserRoom(userIds)) {
      UsersMap.addNewUser(userIds.initiatorId);
      const roomName = UsersMap.getUserRoom(userIds);

      socket.join(roomName);
    } else socket.join(UsersMap.getUserRoom(userIds));

    // now send the message back to other user
    if (message) {
      const roomName = UsersMap.getUserRoom(userIds);
      io.to(roomName).emit(DIRECT_ROOM_EVENT, { message, senderId: userIds.initiatorId });
    }
  };
}

// this will simpley add the socket to the room
export function joinRoom(socket) {
  socket.on(JOIN_ROOM_EVENT, (conversationId) => {
    console.log(`User joined the room conversationId: `, conversationId);

    socket.join(`${conversationId}`);
  });
}

export function sendMessage(socket) {
  socket.on(NEW_MESSAGE_EVENT, (conversationId, message) => {
    console.log(`New Message from user: ${message} and id ${conversationId}`);

    socket.to(`${conversationId}`).emit(NEW_MESSAGE_EVENT, conversationId, message);
  });
}
