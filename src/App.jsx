import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import CompletedTasks from './components/CompletedTasks';

function App() {
  // Use state to track the sidebar
  const [showSidebar, setShowSidebar] = useState(true);

  let component;
  switch (window.location.pathname) {
    case '/':
      component = <Body />;
      break;
    case '/home':
      component = <Body />;
      break;
    case '/completed':
      component = <CompletedTasks />;
      break;
    default:
      component = <Body />;
      break;
  }

  return (
    <div className="body">
      <Header
        showSidebar={showSidebar}
        onSidebarToggle={() => setShowSidebar(!showSidebar)}
      />
      <div className="main-section">
        {showSidebar && <Sidebar />}
        {component}
      </div>
    </div>
  );
}
export default App;
