import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="main-section">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
