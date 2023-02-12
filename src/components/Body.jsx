import { useEffect, useState } from 'react';
import './Body.css';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import EditTask from './options/EditTask';
import PriorityPicker from './options/PriorityPicker';
import MoveProject from './options/MoveProject';
import DeleteTask from './options/DeleteTask';

export default function Body() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  );

  // Handle PRIORITY
  function handlePrioritySelection(e, idValue) {
    // // Get priority picker value
    let priorityPickerValue = e.target.innerHTML.toLowerCase();
    // // Get the id of the task the priority picker was used on
    // // Get the obj in localStorage the ID corresponds too
    let filteredValue = tasks.filter((f) => f.id === idValue);

    let newFilteredValue = {
      ...filteredValue[0],
      priorityValue: priorityPickerValue,
      flagColor: updateColor(priorityPickerValue),
    };

    const updatedObject = updateArray(tasks, newFilteredValue);
    window.localStorage.setItem(
      'tasks',
      JSON.stringify(updatedObject)
    );
    setTasks(updatedObject);
  }

  function updateArray(obj, updatedValues) {
    obj = obj.map((item) => {
      if (item.id === updatedValues.id) {
        return { ...item, ...updatedValues };
      }
      return item;
    });
    return obj;
  }

  function updateColor(priority) {
    if (priority === 'low') return 'blue';
    if (priority === 'medium') return 'orange';
    if (priority === 'high') return 'red';
  }

  // Handle DELETE
  function handleDelete(idValue) {
    let remainingTasks = tasks.filter((task) => task.id !== idValue);
    localStorage.setItem('tasks', JSON.stringify(remainingTasks));
    setTasks(remainingTasks);
  }

  // Handle EDIT

  return (
    <div className="main-body">
      <h2 className="title-txt">Today</h2>
      {tasks && (
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <li key={task.id} data-key={task.id} className="task">
                <div className="task-left">
                  <CheckCircleOutlineOutlinedIcon className="task-done" />
                  <div className="task-title">{task.titleValue}</div>
                </div>
                <div className="task-right">
                  <EditTask />
                  <PriorityPicker
                    onPrioritySelection={(e) =>
                      handlePrioritySelection(e, task.id)
                    }
                    flagColor={task.flagColor}
                  />
                  <MoveProject />
                  <DeleteTask
                    handleDelete={() => handleDelete(task.id)}
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
