import axios from "axios";

const BASE_URL = "/api/groups";

export async function getGroups() {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log("Error in getting users: ", error);
  }
}

export async function getRandomGroups() {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log("Error in getting users: ", error);
  }
}

export async function joinGroup(userId, conversationId) {
  try {
    const res = await axios.post(BASE_URL, {
      userId,
      conversationId,
    });

    return res.data;
  } catch (error) {
    console.log("Error in getting users: ", error);
  }
}
