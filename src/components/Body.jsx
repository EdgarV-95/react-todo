import React from 'react';
import './Body.css';

export default function Body() {
  let tasks;
  if (localStorage.getItem('tasks')) {
    tasks = Object.values(JSON.parse(localStorage.getItem('tasks')));
  }

  return (
    <div className="main-body">
      <h2 className="title-txt">Today</h2>
      {tasks && (
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="task">
                <div className="task-title">{task.titleValue}</div>
                <div className="task-description">
                  {task.descriptionValue}
                </div>
                <div className="task-date">{task.dateValue}</div>
                <div className="task-priority">
                  {task.priorityValue}
                </div>
                <div className="task-project">
                  {task.projectValue}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
