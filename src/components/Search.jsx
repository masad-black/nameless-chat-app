"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { searchNewUsersOrGroups } from "@/utils/apis/search.js";
import SearchInput from "./search/SearchInput";
import MainTemplate from "./search/template";
import ExpandableButton from "./ExpandableButton";
import { NewConversationIcon, ConversationsIcon } from "@/app/assets/icons";
import { CONVERSATION_PAGE_URL } from "@/utils/constant";
import Form from "./form";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showGroupForm, setGroupForm] = useState(false);
  const [searchedUsersList, setSearchedList] = useState([]);
  const router = useRouter();

  function handleClick() {
    setGroupForm(!showGroupForm);
  }

  // todo: also make the search context
  useEffect(() => {
    if (!searchQuery) return;

    const id = window.setTimeout(async () => {
      console.log("now search!!", searchQuery);
      const data = await searchNewUsersOrGroups(searchQuery, "users");
      console.log("searched result: ", data);
    }, 600);

    return () => window.clearTimeout(id);
  }, [searchQuery]);

  return (
    <div className="relative flex flex-col w-screen h-screen overflow-hidden bg-stone-900">
      {/* Search top Section */}
      <div className="flex items-center justify-center w-full pt-3 pb-8 bg-white">
        <SearchInput />
      </div>
      {/* Search bottom section */}
      <div className="w-full h-full overflow-auto justify-items-center bg-[#F9FAFB] p-7">
        <MainTemplate />
      </div>
      {/* Actions */}
      <div className="flex flex-col items-end justify-center h-fit gap-y-2 p-1 bg-[#F9FAFB]">
        <ExpandableButton
          icon={<ConversationsIcon />}
          cbFn={() => {
            router.push(CONVERSATION_PAGE_URL);
          }}
          className={"bg-indigo-600 hover:bg-indigo-700"}
        >
          Your Conversations
        </ExpandableButton>
        <ExpandableButton
          icon={<NewConversationIcon />}
          className={"bg-green-600 hover:bg-green-700"}
          cbFn={handleClick}
        >
          Create New Group
        </ExpandableButton>
      </div>
      {/* Group Form */}
      {showGroupForm && <Form onClick={handleClick} />}
    </div>
  );
};

export default Search;
