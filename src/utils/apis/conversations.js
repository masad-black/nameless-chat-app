import axios from "axios";

const BASE_URL = "/api/conversations";

export async function createDirectConversation(conversationType, createrId, convMemberId) {
  try {
    const res = await axios.post(BASE_URL, {
      conversationType,
      createrId,
      convMemberId,
    });

    return res.data;
    // return res.data;
  } catch (error) {
    console.log("Error in creating new conversation record: ", error);
  }
}

export async function createGroupConversation(
  conversationType,
  createrId,
  groupName,
  groupBio,
  isPrivate,
  groupBanner
) {
  try {
    const formData = new FormData();
    formData.append("conversationType", conversationType);
    formData.append("createrId", createrId);
    formData.append("groupName", groupName);
    formData.append("groupBio", groupBio);
    formData.append("isPublic", isPrivate);
    formData.append("groupBanner", groupBanner);

    const res = await axios.post(BASE_URL, formData);

    return res.data;
    // return res.data;
  } catch (error) {
    console.log("Error in creating new conversation record: ", error);
  }
}

export async function getConversationMessages(conversationId) {
  try {
    const res = await axios.get(`${BASE_URL}/${conversationId}/messages`);

    if (res.data.success) {
      return res.data.messages;
    }

    return null;

    console.log("api response: ", res.data);
  } catch (error) {
    console.log("Error in getting messages record: ", error);
  }
}
