import SkeltenLoader from "../SkeletonLoader";
import { useUserContext } from "@/context";
import UserItem from "./UserItem";
import ErrorMessage from "../ErrorMessage";
import { useUser } from "@/hooks";

export default function UsersList({ searchedUserList }) {
  const { userData } = useUser();
  const { isLoading, usersList, error } = useUserContext();
  // const allUsers = [...searchedUserList, ...(usersList || [])];
  const allUsers = [...(usersList || [])];

  if (isLoading) {
    return <SkeltenLoader />;
  }

  if (error) {
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

  // if (allUsers?.length === 0) {
  //   return (
  //     <div className="flex justify-center pt-7">
  //       <ErrorMessage message={"No users available."} />
  //     </div>
  //   );
  // }

  return (
    <ul>
      {allUsers?.map((user) => {
        if (user.id === userData.id) return;
        return <UserItem key={user?.id} user={user} />;
      })}
    </ul>
  );
}
