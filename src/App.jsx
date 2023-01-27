import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';

function App() {
  return (
    <div className="body">
      <Header />
      <div className="main-section">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
