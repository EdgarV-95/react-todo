import { useState } from 'react';
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
  }
  const [showCompleted, setShowCompleted] = useState(false);
  function toggleCompleted() {
    setShowBody(false);
    setShowCompleted(true);
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
        {showSidebar && <Sidebar />}
        {showBody && <Body />}
        {showCompleted && <CompletedTasks />}
      </div>
    </div>
  );
}
export default App;
