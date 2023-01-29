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
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                {task.titleValue} {task.descriptionValue}{' '}
                {task.dateValue} {task.priorityValue}{' '}
                {task.projectValue}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
