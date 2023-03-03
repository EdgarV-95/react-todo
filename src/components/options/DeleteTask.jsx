import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function DeleteTask({ handleDelete }) {
  return (
    <div className="task-delete">
      <DeleteOutlineOutlinedIcon
        onClick={handleDelete}
        sx={{
          color: 'rgb(84, 84, 84);',
          '&:hover': {
            backgroundColor: 'rgb(238,238,238);',
            borderRadius: '0.5vh',
          },
        }}
      />
    </div>
  );
}
