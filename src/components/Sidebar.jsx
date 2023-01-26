import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>Inbox</li>
        <li>Today</li>
        <li>Projects</li>
        <div className="new-project">+ Add Project</div>
      </ul>
    </div>
  );
}
