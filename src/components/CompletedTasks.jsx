import './CompletedTasks.css';
import { useState } from 'react';
import TaskDesc from './options/TaskDesc';
import DeleteTask from './options/DeleteTask';

export default function CompletedTasks() {
  const [completedList, setCompletedList] = useState(
    JSON.parse(localStorage.getItem('done') || '[]')
  );

  // Handle DELETE
  function handleDelete(idValue) {
    let remainingTasks = completedList.filter(
      (task) => task[0].id !== idValue
    );
    localStorage.setItem('done', JSON.stringify(remainingTasks));
    setCompletedList(remainingTasks);
  }

  return (
    <div className="main-body">
      <div className="completed-tasks">
        <h2 className="title-txt">Completed tasks</h2>
        {completedList && (
          <ul className="tasks-list">
            {completedList.map((task) => {
              return (
                <div className="completed-container">
                  <div className="task-test" key={task[0].id}>
                    <TaskDesc
                      title={task[0].titleValue}
                      description={task[0].descriptionValue}
                      date={task[0].dateValue}
                      priority={task[0].priorityValue}
                    />
                  </div>
                  <DeleteTask
                    handleDelete={() => handleDelete(task[0].id)}
                  />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
