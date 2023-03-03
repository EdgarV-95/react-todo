import { useState, useEffect } from 'react';
import './Body.css';
import Checkbox from '@mui/material/Checkbox';
import TaskDesc from './options/TaskDesc';
import EditTask from './options/EditTask';
import PriorityPicker from './options/PriorityPicker';
import MoveProject from './options/MoveProject';
import DeleteTask from './options/DeleteTask';

function Inbox({
  tasks,
  handleComplete,
  taskIndex,
  toggleTask,
  handleEdit,
  handlePrioritySelection,
  handleDelete,
}) {
  return (
    <div className="main-body">
      <h2 className="title-txt">Inbox</h2>
      {tasks && (
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <div className="task-test" key={task.id}>
                <li data-key={task.id} className="task">
                  <div className="task-left">
                    <Checkbox
                      size="small"
                      onClick={() => {
                        handleComplete(task.id);
                      }}
                    />
                  </div>
                  <div
                    className="task-middle"
                    onClick={() => {
                      toggleTask(task.id);
                    }}
                  >
                    {task.titleValue}
                  </div>
                  <div className="task-right">
                    <EditTask
                      onEditTask={handleEdit}
                      currentValues={[
                        task.id,
                        task.titleValue,
                        task.descriptionValue,
                        task.dateValue,
                        task.priorityValue,
                        task.projectValue,
                        task.flagColor,
                      ]}
                    />
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
                <div className="task-description">
                  {taskIndex === task.id && (
                    <TaskDesc
                      title={task.titleValue}
                      description={task.descriptionValue}
                      date={task.dateValue}
                      priority={task.priorityValue}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Today({
  tasks,
  handleComplete,
  taskIndex,
  toggleTask,
  handleEdit,
  handlePrioritySelection,
  handleDelete,
}) {
  return (
    <div className="main-body">
      <h2 className="title-txt">Today</h2>
      {tasks && (
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <div className="task-test" key={task.id}>
                <li data-key={task.id} className="task">
                  <div className="task-left">
                    <Checkbox
                      size="small"
                      onClick={() => {
                        handleComplete(task.id);
                      }}
                    />
                  </div>
                  <div
                    className="task-middle"
                    onClick={() => {
                      toggleTask(task.id);
                    }}
                  >
                    {task.titleValue}
                  </div>
                  <div className="task-right">
                    <EditTask
                      onEditTask={handleEdit}
                      currentValues={[
                        task.id,
                        task.titleValue,
                        task.descriptionValue,
                        task.dateValue,
                        task.priorityValue,
                        task.projectValue,
                        task.flagColor,
                      ]}
                    />
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
                <div className="task-description">
                  {taskIndex === task.id && (
                    <TaskDesc
                      title={task.titleValue}
                      description={task.descriptionValue}
                      date={task.dateValue}
                      priority={task.priorityValue}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function ThisWeek({
  tasks,
  handleComplete,
  taskIndex,
  toggleTask,
  handleEdit,
  handlePrioritySelection,
  handleDelete,
}) {
  return (
    <div className="main-body">
      <h2 className="title-txt">This Week</h2>
      {tasks && (
        <ul className="tasks-list">
          {tasks.map((task) => {
            return (
              <div className="task-test" key={task.id}>
                <li data-key={task.id} className="task">
                  <div className="task-left">
                    <Checkbox
                      size="small"
                      onClick={() => {
                        handleComplete(task.id);
                      }}
                    />
                  </div>
                  <div
                    className="task-middle"
                    onClick={() => {
                      toggleTask(task.id);
                    }}
                  >
                    {task.titleValue}
                  </div>
                  <div className="task-right">
                    <EditTask
                      onEditTask={handleEdit}
                      currentValues={[
                        task.id,
                        task.titleValue,
                        task.descriptionValue,
                        task.dateValue,
                        task.priorityValue,
                        task.projectValue,
                        task.flagColor,
                      ]}
                    />
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
                <div className="task-description">
                  {taskIndex === task.id && (
                    <TaskDesc
                      title={task.titleValue}
                      description={task.descriptionValue}
                      date={task.dateValue}
                      priority={task.priorityValue}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Body({ showBody, showToday, showWeek }) {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  );

  let currentTask;
  if (showToday) {
    currentTask = tasks.filter(
      (f) =>
        f.dateValue ===
        new Date()
          .toLocaleDateString('en-GB')
          .split('/')
          .reverse()
          .join('-')
    );
  } else if (showWeek) {
    currentTask = tasks.filter(
      (f) =>
        f.dateValue <=
        f.dateValue.slice(0, -2) +
          (+f.dateValue[8] + +f.dateValue[9] + 7)
    );
  } else {
    currentTask = tasks.filter((f) => f.projectValue === 'Inbox');
  }

  // HELPERS
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

  // Handle DETAILS
  const [taskIndex, setTaskIndex] = useState(null);
  function toggleTask(index) {
    setTaskIndex(index === taskIndex ? null : index);
  }

  // Handle EDIT
  function handleEdit(
    idValue,
    title,
    description,
    date,
    priority,
    project
  ) {
    let filteredValue = currentTask.filter((f) => f.id === idValue);
    let newFilteredValue = {
      ...filteredValue[0],
      titleValue: title,
      descriptionValue: description,
      dateValue: date,
      priorityValue: priority,
      projectValue: project,
      flagColor: updateColor(priority),
    };

    const updatedObject = updateArray(currentTask, newFilteredValue);
    window.localStorage.setItem(
      'tasks',
      JSON.stringify(updatedObject)
    );
    setTasks(updatedObject);
    location.reload();
  }

  // Handle PRIORITY
  function handlePrioritySelection(e, idValue) {
    // // Get priority picker value
    let priorityPickerValue = e.target.innerHTML.toLowerCase();
    // // Get the id of the task the priority picker was used on
    // // Get the obj in localStorage the ID corresponds too
    let filteredValue = currentTask.filter((f) => f.id === idValue);

    let newFilteredValue = {
      ...filteredValue[0],
      priorityValue: priorityPickerValue,
      flagColor: updateColor(priorityPickerValue),
    };

    const updatedObject = updateArray(currentTask, newFilteredValue);
    window.localStorage.setItem(
      'tasks',
      JSON.stringify(updatedObject)
    );
    setTasks(updatedObject);
    location.reload();
  }

  // Handle DELETE
  function handleDelete(idValue) {
    let remainingTasks = currentTask.filter(
      (task) => task.id !== idValue
    );
    localStorage.setItem('tasks', JSON.stringify(remainingTasks));
    setTasks(remainingTasks);
  }

  const [completedTasks, setCompletedTasks] = useState([]);
  function handleComplete(idValue) {
    let doneTask = currentTask.filter((task) => task.id === idValue);
    completedTasks.push(doneTask);
    localStorage.setItem('done', JSON.stringify(completedTasks));
    handleDelete(idValue);
  }

  useEffect(() => {
    const data = window.localStorage.getItem('done');
    if (data !== null) setCompletedTasks(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (completedTasks.length > 1) {
      window.localStorage.setItem(
        'done',
        JSON.stringify(completedTasks)
      );
    } else {
      return;
    }
  }, [completedTasks]);

  return (
    <>
      {showBody && (
        <Inbox
          tasks={currentTask}
          handleComplete={handleComplete}
          taskIndex={taskIndex}
          toggleTask={toggleTask}
          handleEdit={handleEdit}
          handlePrioritySelection={handlePrioritySelection}
          handleDelete={handleDelete}
        />
      )}
      {showToday && (
        <Today
          tasks={currentTask}
          handleComplete={handleComplete}
          taskIndex={taskIndex}
          toggleTask={toggleTask}
          handleEdit={handleEdit}
          handlePrioritySelection={handlePrioritySelection}
          handleDelete={handleDelete}
        />
      )}
      {showWeek && (
        <ThisWeek
          tasks={currentTask}
          handleComplete={handleComplete}
          taskIndex={taskIndex}
          toggleTask={toggleTask}
          handleEdit={handleEdit}
          handlePrioritySelection={handlePrioritySelection}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
