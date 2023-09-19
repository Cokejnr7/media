import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import useThunk from "../hook/use-thunk";
import ExpandablePanel from "./ExpandablePanel";

const UserListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleDeleteUser = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleDeleteUser}>
        <GoTrash />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>CONTENT!!!</ExpandablePanel>;
};

export default UserListItem;
