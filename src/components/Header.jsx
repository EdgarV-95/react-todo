import { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import AddTaskModal from './AddTaskModal';

export default function Header({
  showSidebar,
  onSidebarToggle,
  onToggleBody,
  onToggleCompleted,
}) {
  const [addTaskModal, setAddTaskModal] = useState(false);

  return (
    <div className="top-navbar">
      <div className="nav-left">
        <div onClick={() => onSidebarToggle(showSidebar)}>
          <MenuIcon
            sx={{
              fontSize: 30,
              '&:hover': {
                backgroundColor: 'rgb(236, 144, 144);',
                borderRadius: '0.5vh',
              },
            }}
          />
        </div>
        <div onClick={() => onToggleBody()}>
          <HomeOutlinedIcon
            sx={{
              fontSize: 30,
              '&:hover': {
                backgroundColor: 'rgb(236, 144, 144);',
                borderRadius: '0.5vh',
              },
            }}
          />
        </div>
      </div>
      <div className="nav-right">
        <div onClick={() => setAddTaskModal(true)}>
          <AddIcon
            sx={{
              fontSize: 30,
              '&:hover': {
                backgroundColor: 'rgb(236, 144, 144);',
                borderRadius: '0.5vh',
              },
            }}
          />
        </div>
        {addTaskModal && (
          <AddTaskModal
            closeModal={() => setAddTaskModal(false)}
            sx={{
              '&:hover': {
                backgroundColor: 'rgb(236, 144, 144);',
                borderRadius: '0.5vh',
              },
            }}
          />
        )}
        <div onClick={() => onToggleCompleted()}>
          <DoneOutlinedIcon
            sx={{
              fontSize: 30,
              '&:hover': {
                backgroundColor: 'rgb(236, 144, 144);',
                borderRadius: '0.5vh',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
