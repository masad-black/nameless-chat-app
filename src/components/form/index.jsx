import { useState } from "react";
import { useRouter } from "next/navigation";

import Actions from "./Actions";
import ImageUpload from "./form_items/ImageUpload";
import Header from "./Header";
import FormField from "./form_items/FormField";
import GroupPrivacySelector from "./form_items/GroupPrivacySelector";
import AddGroupMembers from "./form_items/AddGroupMembers";
import { useConversationContext } from "@/context";
import { CONVERSATION_PAGE_URL } from "@/utils/constant";

export default function Form({ onClick }) {
  const router = useRouter();
  const [image, setImage] = useState();
  const [actualFile, setFile] = useState();
  const [groupName, setGroupName] = useState("");
  const [groupBio, setGroupBio] = useState("");
  const [groupPrivacy, setGroupPrivacy] = useState("public");
  const { createConversation } = useConversationContext();

  async function formHandler(e) {
    e.preventDefault();
    const privacy = groupPrivacy === "private" ? false : true;
    await createConversation("group", null, groupName, groupBio, privacy, actualFile);
    router.push(CONVERSATION_PAGE_URL);
  }

  function resetFormFields() {
    setGroupName("");
    setGroupBio("");
    setGroupPrivacy("public");
    setImage();
    setFile();
  }

  return (
    <div className="w-screen h-screen absolute bg-[#636364]/60 flex items-center justify-center">
      <form
        onSubmit={formHandler}
        className="w-full  max-w-3xl rounded-xl overflow-hidden"
        encType="multipart/form-data"
      >
        <Header onClick={onClick} />
        <main className="bg-white px-12 py-1 space-y-5 pb-5">
          <ImageUpload setFile={setFile} image={image} setImage={setImage} />
          <FormField
            type={"text"}
            title={"Group Name "}
            className={"border-[#E5E7EB] rounded-sm bg-[#f1f5f9] border text-sm px-2 py-3"}
            placeholder={"Enter group name..."}
            value={groupName}
            onChangeHandler={setGroupName}
            required={true}
          />
          <FormField
            type={"text"}
            title={"Group Bio "}
            className={"border-[#E5E7EB] rounded-sm bg-[#f1f5f9] border text-sm px-2 py-3 "}
            placeholder={"Write a short bio about your group..."}
            value={groupBio}
            onChangeHandler={setGroupBio}
            required={true}
          />
          <GroupPrivacySelector groupPrivacy={groupPrivacy} setGroupPrivacy={setGroupPrivacy} />
          {/* <AddGroupMembers setGroupMemberIds={setGroupMemberIds} /> */}
        </main>
        <Actions resetFormFields={resetFormFields} />
      </form>
    </div>
  );
}
