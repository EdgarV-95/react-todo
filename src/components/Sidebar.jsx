import './Sidebar.css';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import BorderAllIcon from '@mui/icons-material/BorderAll';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="icon">
            <span className="inbox-icon">
              <InboxOutlinedIcon />
            </span>
            <h4>Inbox</h4>
          </div>
        </li>
        <li>
          <div className="icon">
            <span className="today-icon">
              <TodayOutlinedIcon />
            </span>
            <h4>Today</h4>
          </div>
        </li>
        <li>
          <div className="icon">
            <span className="projects-icon">
              <BorderAllIcon />
            </span>
            <h4>Projects</h4>
          </div>
        </li>
        <div className="new-project">+ Add Project</div>
      </ul>
    </div>
  );
}
