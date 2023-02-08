import React, { useState } from 'react';
import './Body.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function PriorityPicker({ prop }) {
  return (
    <>
      <ul className="select-priority">
        <li key="0" onClick={prop}>
          Low
        </li>
        <li key="1" onClick={prop}>
          Medium
        </li>
        <li key="2" onClick={prop}>
          High
        </li>
      </ul>
    </>
  );
}

export default function Body() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  );

  // Handels PRIORITY PICKING
  const [click, setClick] = useState();
  function toggleClick(idValue) {
    if (click === idValue) {
      setClick();
    } else {
      setClick(idValue);
    }
  }

  function handlePrioritySelection(e) {
    // // Get priority picker value
    let priorityPickerValue = e.target.innerHTML.toLowerCase();
    // // Get the id of the task the priority picker was used on
    let taskId =
      e.target.parentNode.parentNode.parentNode.parentNode.dataset
        .key;
    // // Get the obj in localStorage the ID corresponds too
    let filteredValue = tasks.filter((f) => f.id === taskId);

    let newFilteredValue = {
      ...filteredValue[0],
      priorityValue: priorityPickerValue,
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

  let flagColor;
  function updateFlagColor(priority) {
    if (priority === 'low') flagColor = 'blue';
    if (priority === 'medium') flagColor = 'orange';
    if (priority === 'high') flagColor = 'red';
  }

  // Handels DELETE
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
              <li key={task.id} data-key={task.id} className="task">
                <div className="task-left">
                  <CheckCircleOutlineOutlinedIcon className="task-done" />
                  <div className="task-title">{task.titleValue}</div>
                </div>
                <div className="task-right">
                  <EditOutlinedIcon
                    className="task-edit"
                    onClick={() =>
                      console.log(
                        JSON.parse(localStorage.getItem('tasks'))
                      )
                    }
                  />
                  <div
                    className={
                      click === task.id ? 'info clicked' : 'info'
                    }
                  >
                    <PriorityPicker prop={handlePrioritySelection} />
                  </div>
                  <div className="task-priority">
                    {updateFlagColor(task.priorityValue)}
                    <FlagIcon
                      onClick={() => {
                        toggleClick(task.id);
                      }}
                      sx={{
                        color: flagColor,
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
            );
          })}
        </ul>
      )}
    </div>
  );
}
