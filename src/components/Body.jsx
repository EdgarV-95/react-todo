import React from 'react';
import './Body.css';

export default function Body() {
  let tasks;
  if (localStorage.getItem('task')) {
    tasks = Object.values(JSON.parse(localStorage.getItem('task')));
  } else {
    console.log('no');
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

// Need to find a way to append newly added tasks in localStorage rather than losing them on refresh
