import { useState } from 'react';
import TaskDesc from './options/TaskDesc';

export default function CompletedTasks() {
  const [completedList, setCompletedList] = useState(
    JSON.parse(localStorage.getItem('done') || '[]')
  );

  return (
    <div className="completed-tasks">
      <a href="/completed" className="site-title"></a>
      {completedList && (
        <ul className="tasks-list">
          {completedList.map((task) => {
            return (
              <div className="task-test" key={task[0].id}>
                <TaskDesc
                  title={task[0].titleValue}
                  description={task[0].descriptionValue}
                  date={task[0].dateValue}
                  priority={task[0].priorityValue}
                />
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
