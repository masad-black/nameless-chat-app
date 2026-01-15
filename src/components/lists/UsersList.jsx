import { useState } from "react";
import { useRouter } from "next/navigation";

import SkeltenLoader from "../SkeletonLoader";
import Loader from "../Loader";
import { useConversationContext, useUserContext } from "@/context";
import { useUser } from "@/hooks";
import UserItem from "./UserItem";
import ErrorMessage from "../ErrorMessage";

export default function UsersList({ searchedUserList }) {
  const { userData } = useUser();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const { createConversation, isLoading: loader } = useConversationContext();
  const { isLoading, usersList } = useUserContext();
  const router = useRouter();

  const error = true;
  // const allUsers = [...searchedUserList, ...(usersList || [])];
  const allUsers = [...(usersList || [])];

  const handleStartConversation = async (memberId) => {
    setSelectedConversation(memberId);

    // 1: make the api call to add this conversation into DB
    await createConversation("direct", userData?.id, memberId);

    // 2: redirect to conversations page
    router.push("/conversations");
  };

  const users = [
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
    {
      profileImage: "",
      username: "asad_butt01",
      bio: "hey i am going to be a software developer!!",
    },
  ];

  if (isLoading) {
    return <SkeltenLoader />;
  }

  if (false) {
    return (
      <div className="flex justify-center pt-7">
        <ErrorMessage
          message={
            "No users found, something went wrong. Please refresh the page or try again later!!"
          }
        />
      </div>
    );
  }

  if (allUsers?.length === 0) {
    return (
      <div className="flex justify-center pt-7">
        <ErrorMessage message={"No users found."} />
      </div>
    );
  }

  return (
    <ul>
      {allUsers?.map((user) => {
        return <UserItem key={user?.id} user={user} />;
      })}
    </ul>
  );
}
