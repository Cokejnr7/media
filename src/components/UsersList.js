import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeleton from "./Skeleton";

const UsersList = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    data: users,
    error,
  } = useSelector((state) => {
    return state.users;
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) return <Skeleton times={6} className="h-10 w-full" />;
  if (error) return "error";

  return "Users List";
};

export default UsersList;
