import axios from "axios";

const BASE_URL = "/api/users";

export async function getRandomUsers() {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log("Error in getting users: ", error);
  }
}

export async function getUserConversations(userId) {
  if (!userId) {
    console.log("User Id is required to make this call");
    return;
  }

  try {
    const res = await axios.get(`${BASE_URL}/${userId}/conversations`);

    return res.data;
  } catch (error) {
    console.log("Error in getting conversation record: ", error);
  }
}
