import './Sidebar.css';
import { useState } from 'react';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

export default function Sidebar({
  onToggleBody,
  onToggleToday,
  onToggleThisWeek,
}) {
  const [inboxClicked, setInboxClicked] = useState(false);
  function handleInboxClick() {
    setInboxClicked(true);
    setTodayClicked(false);
    setThisWeekClicked(false);
  }
  const [todayClicked, setTodayClicked] = useState(false);
  function handleTodayClick() {
    setInboxClicked(false);
    setTodayClicked(true);
    setThisWeekClicked(false);
  }
  const [inboxThisWeek, setThisWeekClicked] = useState(false);
  function handleThisWeekClick() {
    setInboxClicked(false);
    setTodayClicked(false);
    setThisWeekClicked(true);
  }

  return (
    <div className="sidebar">
      <ul>
        <li
          className={inboxClicked ? 'clicked' : 'my-li'}
          onClick={() => {
            handleInboxClick();
            onToggleBody();
          }}
        >
          <div className="icon">
            <span className="inbox-icon">
              <InboxOutlinedIcon />
            </span>
            <h4>Inbox</h4>
          </div>
        </li>
        <li
          className={todayClicked ? 'clicked' : 'my-li'}
          onClick={() => {
            handleTodayClick();
            onToggleToday();
          }}
        >
          <div className="icon">
            <span className="today-icon">
              <TodayOutlinedIcon />
            </span>
            <h4>Today</h4>
          </div>
        </li>
        <li
          className={inboxThisWeek ? 'clicked' : 'my-li'}
          onClick={() => {
            handleThisWeekClick();
            onToggleThisWeek();
          }}
        >
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
