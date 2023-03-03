import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import CompletedTasks from './components/CompletedTasks';

function App() {
  // Use state to track the sidebar
  const [showSidebar, setShowSidebar] = useState(true);
  const [showBody, setShowBody] = useState(true);
  function toggleBody() {
    setShowBody(true);
    setShowCompleted(false);
    setShowToday(false);
    setShowWeek(false);
  }
  const [showCompleted, setShowCompleted] = useState(false);
  function toggleCompleted() {
    setShowBody(false);
    setShowCompleted(true);
    setShowToday(false);
    setShowWeek(false);
  }
  const [showToday, setShowToday] = useState(false);
  function toggleToday() {
    setShowBody(false);
    setShowCompleted(false);
    setShowToday(true);
    setShowWeek(false);
  }
  const [showWeek, setShowWeek] = useState(false);
  function toggleWeek() {
    setShowBody(false);
    setShowCompleted(false);
    setShowToday(false);
    setShowWeek(true);
  }

  return (
    <div className="body">
      <Header
        showSidebar={showSidebar}
        onSidebarToggle={() => setShowSidebar(!showSidebar)}
        onToggleBody={toggleBody}
        onToggleCompleted={toggleCompleted}
      />
      <div className="main-section">
        {showSidebar && (
          <Sidebar
            onToggleBody={toggleBody}
            onToggleToday={toggleToday}
            onToggleThisWeek={toggleWeek}
          />
        )}
        <Body
          showBody={showBody}
          showToday={showToday}
          showWeek={showWeek}
        />
        {showCompleted && <CompletedTasks />}
      </div>
    </div>
  );
}
export default App;
