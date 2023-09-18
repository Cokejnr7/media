import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import useThunk from "../hook/use-thunk";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UserListItem from "./UserListItem";

const UsersList = () => {
  const { data: users } = useSelector((state) => {
    return state.users;
  });

  const [doFetchUsers, isLoadingUsers, userFetchError] = useThunk(fetchUsers);
  const [createUser, isCreatingUser, userCreateError] = useThunk(addUser);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    createUser();
  };
  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (userFetchError) {
    content = "Error fetching users";
  } else {
    content = users.map((user) => {
      return <UserListItem key={user.id} user={user} />;
    });
  }

  return (
    <div>
      <div className="flex flex-row items-center justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {userCreateError && "Error creating user"}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
