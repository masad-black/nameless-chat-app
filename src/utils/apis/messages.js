import axios from "axios";

const BASE_URL = "/api/messages";

export async function createNewMessage(type, content, conversationId, senderId, file) {
  try {
    if (file) {
      const formData = new FormData();
      formData.append("type", type);
      formData.append("content", content);
      formData.append("conversationId", conversationId);
      formData.append("senderId", senderId);
      formData.append("file", file);
      const res = await axios.post(BASE_URL, formData);

      return res.data;
    } else {
      const res = await axios.post(BASE_URL, {
        type,
        content,
        conversationId,
        senderId,
      });

      return res.data;
    }
  } catch (error) {
    console.log("Error in creating new message record: ", error);
  }
}
