import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

function App() {
  // Use state to track the sidebar
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="body">
      <Header
        showSidebar={showSidebar}
        onSidebarToggle={() => setShowSidebar(!showSidebar)}
      />
      <div className="main-section">
        {showSidebar && <Sidebar />}
        <Body />
      </div>
    </div>
  );
}
export default App;
