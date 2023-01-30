import React, { useState } from 'react';
import './Body.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function PriorityPicker() {
  return (
    <>
      <div className="bazdmeg">
        <li>Low</li>
        <li>Medium</li>
        <li>High</li>
      </div>
    </>
  );
}

export default function Body() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  );

  function handleDelete(idValue) {
    let newTasks = tasks.filter((t) => t.id !== idValue);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  const [click, setClick] = useState(false);
  function handlePriority(e, idValue) {
    // Create component to select new priority and save it to body and localstorage
    let newTask = tasks.filter((t) => t.id === idValue);
    // Use data attribute to get the item
    // Find a way to have the div over the icon. Maybe set its position to absolute?
    console.log(e);
    console.log(newTask[0].id);
    if (idValue === newTask[0].id) setClick(!click);
  }

  return (
    <div className="main-body">
      <h2 className="title-txt">Today</h2>
      {tasks && (
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <>
                <li key={task.id} className="task">
                  <div className="task-left">
                    <CheckCircleOutlineOutlinedIcon className="task-done" />
                    <div className="task-title">
                      {task.titleValue}
                    </div>
                  </div>
                  <div className="task-right">
                    <EditOutlinedIcon className="task-edit" />
                    {click && <PriorityPicker />}
                    <div className="task-test" data-info="test">
                      <FlagIcon
                        className="task-priority"
                        onClick={(e) => {
                          handlePriority(e, task.id);
                        }}
                      />
                    </div>

                    <ArrowCircleRightOutlinedIcon className="task-project" />
                    <DeleteOutlineOutlinedIcon
                      className="task-delete"
                      onClick={() => handleDelete(task.id)}
                    />
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
}
