import React, { useState } from 'react';
import './Body.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function Body() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  );

  function handleDelete(idValue) {
    let newTasks = tasks.filter((t) => t.id !== idValue);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  return (
    <div className="main-body">
      <h2 className="title-txt">Today</h2>
      {tasks && (
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="task">
                <div className="task-left">
                  <CheckCircleOutlineOutlinedIcon className="task-done" />
                  <div className="task-title">{task.titleValue}</div>
                </div>
                <div className="task-right">
                  <EditOutlinedIcon className="task-edit" />
                  <FlagIcon className="task-priority" />
                  <ArrowCircleRightOutlinedIcon className="task-project" />
                  <DeleteOutlineOutlinedIcon
                    className="task-delete"
                    onClick={() => handleDelete(task.id)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
