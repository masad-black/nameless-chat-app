"use client";

import { useRouter } from "next/navigation";

import { useGroupContext } from "@/context";
import GroupItem from "./GroupItem";
import SkeletonLoader from "../SkeletonLoader";
import ErrorMessage from "../ErrorMessage";

export default function GroupsList() {
  const router = useRouter();
  const { isLoading, groupsList, addUserToGroup } = useGroupContext();

  const handleJoinGroup = async (conversationId) => {
    await addUserToGroup(conversationId);

    router.push("/conversations");
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (false) {
    return (
      <div className="flex justify-center pt-7">
        <ErrorMessage
          message={
            "No groups found, something went wrong. Please refresh the page or try again later!!"
          }
        />
      </div>
    );
  }

  if (groupsList?.length === 0) {
    return (
      <div className="flex justify-center pt-7">
        <ErrorMessage message={"No groups found."} />
      </div>
    );
  }

  return (
    <ul>
      {groupsList?.map((group) => {
        return <GroupItem key={group?.id} group={group} />;
      })}
    </ul>
  );
}
