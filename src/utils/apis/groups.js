import axios from "axios";

const BASE_URL = "/api/groups";

export async function getRandomGroups() {
  return await axios.get(BASE_URL);
}

export async function joinGroup(userId, conversationId) {
  console.log(userId, conversationId);

  return await axios.post(BASE_URL, {
    userId,
    conversationId,
  });
}
