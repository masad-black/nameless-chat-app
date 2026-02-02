import axios from "axios";

const BASE_URL = "/api/users";

export async function getRandomUsers() {
  return await axios.get(BASE_URL);
}

export async function getUserConversations(userId) {
  return await axios.get(`${BASE_URL}/${userId}/conversations`);
}
