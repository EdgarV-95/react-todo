import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function DeleteTask({ handleDelete }) {
  return (
    <div className="task-delete">
      <DeleteOutlineOutlinedIcon onClick={handleDelete} />
    </div>
  );
}
