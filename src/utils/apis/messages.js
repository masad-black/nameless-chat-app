import axios from "axios";

const BASE_URL = "/api/messages";

export async function createNewMessage(type, content, conversationId, senderId) {
  try {
    const res = await axios.post(BASE_URL, {
      type,
      content,
      conversationId,
      senderId,
    });

    return res.data;
  } catch (error) {
    console.log("Error in creating new message record: ", error);
  }
}
