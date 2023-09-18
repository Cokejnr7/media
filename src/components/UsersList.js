import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";

const UsersList = () => {
  const useThunk = (thunk) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const doFetchUsers = () => {
      setIsLoading(true);
      dispatch(thunk())
        .unwrap()
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => setError("Couldn't fetch users"))
        .finally(() => setIsLoading(false));
    };

    return [doFetchUsers, isLoading, error];
  };

  const { data: users } = useSelector((state) => {
    return state.users;
  });
  const dispatch = useDispatch();
  const [doFetchUsers, isLoadingUsers, error] = useThunk(fetchUsers);

  useEffect(() => {
    doFetchUsers();
  }, []);

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  if (isLoadingUsers) return <Skeleton times={6} className="h-10 w-full" />;
  if (error) return error;

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
        <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
};

export default UsersList;
