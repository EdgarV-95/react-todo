import { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
// import AddTaskModal from './AddTaskModal';

export default function Header({ showSidebar, onSidebarToggle }) {
  const [addTaskModal, setAddTaskModal] = useState(false);

  return (
    <div className="top-navbar">
      <div className="nav-left">
        <div onClick={() => onSidebarToggle(showSidebar)}>
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
        <button onClick={() => console.log(addTaskModal)}></button>
      </div>
    </div>
  );
}

function AddTaskModal({ closeModal }) {
  return (
    <div className="modal-background">
      <div className="modal-body">
        <h3>New Task</h3>
        <div className="form-body">
          <button onClick={closeModal}>X</button>
          <ul>
            <li>Title</li>
            <li>Description</li>
          </ul>
          <ul>
            <li>Due Date</li>
            <li>Priority</li>
            <li>Project</li>
          </ul>
        </div>
        <div className="buttons">
          <button onClick={closeModal}>Close</button>
          <button onClick={() => console.log('works')}>Submit</button>
        </div>
      </div>
    </div>
  );
}
