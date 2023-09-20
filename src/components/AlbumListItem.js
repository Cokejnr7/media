import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

const AlbumListItem = ({ album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleAlbumDelete = () => {
    removeAlbum(album);
  };
  const header = (
    <>
      <Button
        loading={results.isLoading}
        className="mr-2"
        onClick={handleAlbumDelete}
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in album
    </ExpandablePanel>
  );
};

export default AlbumListItem;
