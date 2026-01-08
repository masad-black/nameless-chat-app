import { UsersMap } from "./users_class.js";
import { DIRECT_ROOM_EVENT } from "./constant.js";

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

export function joinAndSendMessageForDirectRoom(socket) {
  return function ({ userIds, message }) {
    // Make users join the room
    if (!UsersMap.getUserRoom(userIds)) {
      UsersMap.addNewUser(userIds.initiatorId);
      const roomName = UsersMap.getUserRoom(userIds);

      socket.join(roomName);
    } else socket.join(UsersMap.getUserRoom(userIds));

    // now send the message back to other user
    if (message) {
      const roomName = UsersMap.getUserRoom(userIds);
      socket.to(roomName).emit(DIRECT_ROOM_EVENT, message);
    }
  };
}

export function joinGroupRoom() {}
