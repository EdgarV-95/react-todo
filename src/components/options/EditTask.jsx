import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export default function EditTask() {
  return (
    <EditOutlinedIcon
      className="task-edit"
      onClick={() =>
        console.log(JSON.parse(localStorage.getItem('tasks')))
      }
    />
  );
}
