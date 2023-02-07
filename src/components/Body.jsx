import React, { useState, useEffect } from 'react';
import './Body.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import FlagIcon from '@mui/icons-material/Flag';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function PriorityPicker() {
  function updateArray(obj, updatedValues) {
    obj = obj.map((item) => {
      if (item.id === updatedValues.id) {
        return { ...item, ...updatedValues };
      }
      return item;
    });
    return obj;
  }

  function handlePrioritySelection(e) {
    // // Get priority picker value
    let priorityPickerValue = e.target.innerHTML.toLowerCase();
    // // Get the id of the task the priority picker was used on
    let taskId =
      e.target.parentNode.parentNode.parentNode.parentNode.dataset
        .key;
    // // Get the obj in localStorage the ID corresponds too
    let newObj = Object.values(
      JSON.parse(localStorage.getItem('tasks'))
    );
    let filteredValue = newObj.filter((f) => f.id === taskId);
    let myOBJpriorityValue = filteredValue[0].priorityValue;
    myOBJpriorityValue = priorityPickerValue;

    let newFilteredValue = {
      ...filteredValue[0],
      priorityValue: myOBJpriorityValue,
    };

    const updatedObject = updateArray(newObj, newFilteredValue);
    window.localStorage.setItem(
      'tasks',
      JSON.stringify(updatedObject)
    );
    location.reload();
  }

  return (
    <>
      <ul className="select-priority">
        <li key="0" onClick={(e) => handlePrioritySelection(e)}>
          Low
        </li>
        <li key="1" onClick={(e) => handlePrioritySelection(e)}>
          Medium
        </li>
        <li key="2" onClick={(e) => handlePrioritySelection(e)}>
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

  function handleDelete(idValue) {
    let newTasks = tasks.filter((t) => t.id !== idValue);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  const [click, setClick] = useState();
  function toggleClick(idValue) {
    if (click === idValue) {
      setClick();
    } else {
      setClick(idValue);
    }
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
                    <PriorityPicker />
                  </div>
                  <div className="task-priority">
                    <FlagIcon
                      onClick={() => {
                        toggleClick(task.id);
                      }}
                    />
                  </div>

                  <ArrowCircleRightOutlinedIcon className="task-project" />
                  <DeleteOutlineOutlinedIcon
                    className="task-delete"
                    onClick={() => handleDelete(task.id)}
                  />
                </div>
                {task.priorityValue}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
