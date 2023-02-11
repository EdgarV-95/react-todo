import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function MoveProject() {
  return (
    <div className="task-project">
      <ArrowCircleRightOutlinedIcon
        onClick={() => console.log('Moving to project')}
      />
    </div>
  );
}
