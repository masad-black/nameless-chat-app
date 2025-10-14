import axios from "axios";

const BASE_URL = "/api/search";

const LIMIT = 10;

export async function searchNewUsersOrGroups(searchQuery, type) {
  try {
    const res = await axios.get(
      `${BASE_URL}/?search=${searchQuery}&type=${type}&limit=${LIMIT}`
    );
    return res.data;
  } catch (error) {
    console.log("Error in getting users: ", error);
  }
}
