import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function MoveProject() {
  return (
    <div className="task-project">
      <ArrowCircleRightOutlinedIcon
        onClick={() =>
          console.log(JSON.parse(localStorage.getItem('tasks')))
        }
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
