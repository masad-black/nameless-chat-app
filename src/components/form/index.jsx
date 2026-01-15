import { useState } from "react";

import Actions from "./Actions";
import ImageUpload from "./form_items/ImageUpload";
import Header from "./Header";
import FormField from "./form_items/FormField";
import GroupPrivacySelector from "./form_items/GroupPrivacySelector";
import AddGroupMembers from "./form_items/AddGroupMembers";
import { useConversationContext } from "@/context";

export default function Form({ onClick }) {
  const [uploadedImage, setImage] = useState();
  const [groupName, setGroupName] = useState("");
  const [groupBio, setGroupBio] = useState("");
  const [groupPrivacy, setGroupPrivacy] = useState("public");
  const [groupMemberIds, setGroupMemberIds] = useState([]);
  const { createConversation } = useConversationContext();

  function formHandler(e) {
    e.preventDefault();
    console.log("group data: ", groupName, groupBio, groupPrivacy, uploadedImage);
  }

  return (
    <div className="w-screen h-screen absolute bg-[#636364]/60 flex items-center justify-center">
      <form onSubmit={formHandler} className="w-full  max-w-3xl rounded-xl overflow-hidden">
        <Header onClick={onClick} />
        <main className="bg-white px-12 py-1 space-y-5 pb-5">
          <ImageUpload image={uploadedImage} setImage={setImage} />
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
          <AddGroupMembers setGroupMemberIds={setGroupMemberIds} />
        </main>
        <Actions />
      </form>
    </div>
  );
}
