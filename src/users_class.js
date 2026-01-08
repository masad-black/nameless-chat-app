export class UsersMap {
  static map = new Map();
  static currentRoomNumber = 0;

  constructor() {
    console.log("--- Users Map ---");
  }

  static addNewUser(userId) {
    this.map.set(userId, `roomNo_${this.currentRoomNumber}`);
  }

  static getUserRoom(userIds) {
    return (
      this.map.get(userIds.initiatorId) || this.map.get(userIds.receiverId)
    );
  }

  static showAvailableUsers() {
    console.log("Current Available Users: ", this.map);
  }
}
