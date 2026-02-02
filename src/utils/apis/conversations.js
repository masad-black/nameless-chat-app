import axios from "axios";

const BASE_URL = "/api/conversations";

export async function createDirectConversation(conversationType, createrId, convMemberId) {
  console.log("call", conversationType, createrId, convMemberId);

  return await axios.post(BASE_URL, {
    conversationType,
    createrId,
    convMemberId,
  });
}

export async function createGroupConversation(formData) {
  return await axios.post(BASE_URL, formData);
}

export async function getConversationMessages(conversationId) {
  return await axios.get(`${BASE_URL}/${conversationId}/messages`);
}

// export async function getGroupMessages(conversationId) {
//   return await axios.get(`${BASE_URL}/${conversationId}/messages`);
// }
