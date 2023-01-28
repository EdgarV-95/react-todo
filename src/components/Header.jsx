import { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import AddTaskModal from './AddTaskModal';

export default function Header({ showSidebar, onSidebarToggle }) {
  const [addTaskModal, setAddTaskModal] = useState(false);

  return (
    <div className="top-navbar">
      <div className="nav-left">
        <div
          onClick={() => {
            onSidebarToggle(showSidebar);
          }}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </div>
        <div onClick={() => console.log('Takes you back home')}>
          <HomeOutlinedIcon sx={{ fontSize: 30 }} />
        </div>
      </div>
      <div className="nav-right">
        <div onClick={() => setAddTaskModal(true)}>
          <AddIcon sx={{ fontSize: 30 }} />
        </div>
        {addTaskModal && (
          <AddTaskModal closeModal={() => setAddTaskModal(false)} />
        )}
        <div onClick={() => console.log('Shows list of done tasks')}>
          <DoneOutlinedIcon sx={{ fontSize: 30 }} />
        </div>
      </div>
    </div>
  );
}
