import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";

const AlbumListItem = ({ album }) => {
  const header = (
    <div className="flex gap-x-2 items-center">
      <Button>
        <GoTrash />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in album
    </ExpandablePanel>
  );
};

export default AlbumListItem;
