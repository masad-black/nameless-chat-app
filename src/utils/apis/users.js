import axios from "axios";

const BASE_URL = "/api/users";

export async function getUsers() {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (error) {
    console.log("Error in getting users: ", error);
  }
}
