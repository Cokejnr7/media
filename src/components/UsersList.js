import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
  const useThunk = (thunk) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const doFetchUsers = useCallback(() => {
      setIsLoading(true);
      dispatch(thunk())
        .unwrap()
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => setError("Couldn't fetch users"))
        .finally(() => setIsLoading(false));
    }, [thunk, dispatch]);

    return [doFetchUsers, isLoading, error];
  };

  const { data: users } = useSelector((state) => {
    return state.users;
  });

  const [doFetchUsers, isLoadingUsers, userFetchError] = useThunk(fetchUsers);
  const [createUser, userCreationLoading, userCreateError] = useThunk(addUser);
  useThunk(fetchUsers);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    createUser();
  };

  if (isLoadingUsers) return <Skeleton times={6} className="h-10 w-full" />;
  if (userFetchError) return userFetchError;

  const renderedUsers = users.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-ro justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>
          {userCreationLoading ? "Creating User..." : "+ Add User"}
        </Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
