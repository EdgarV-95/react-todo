import './Sidebar.css';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

export default function Sidebar({
  onToggleBody,
  onToggleToday,
  onToggleThisWeek,
}) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => onToggleBody()}>
          <div className="icon">
            <span className="inbox-icon">
              <InboxOutlinedIcon />
            </span>
            <h4>Inbox</h4>
          </div>
        </li>
        <li onClick={() => onToggleToday()}>
          <div className="icon">
            <span className="today-icon">
              <TodayOutlinedIcon />
            </span>
            <h4>Today</h4>
          </div>
        </li>
        <li onClick={() => onToggleThisWeek()}>
          <div className="icon">
            <span className="projects-icon">
              <DateRangeOutlinedIcon />
            </span>
            <h4>This Week</h4>
          </div>
        </li>
        <li>
          <h3>Projects</h3>
        </li>
        <div className="new-project">+ Add Project</div>
      </ul>
    </div>
  );
}
