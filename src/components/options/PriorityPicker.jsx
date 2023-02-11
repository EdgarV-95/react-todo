import FlagIcon from '@mui/icons-material/Flag';

function DropdownList({ prop }) {
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

export default function PriorityPicker() {
  return (
    <>
      {/* <div className={click === taskID ? 'info clicked' : 'info'}>
        <DropdownList prop={handlePriority} />
      </div> */}
      <div className="task-priority">
        <FlagIcon onClick={() => console.log('here')} />
      </div>
    </>
  );
}

// function handlePrioritySelection(e) {
//     // // Get priority picker value
//     let priorityPickerValue = e.target.innerHTML.toLowerCase();
//     // // Get the id of the task the priority picker was used on
//     let taskId =
//       e.target.parentNode.parentNode.parentNode.parentNode.dataset
//         .key;
//     // // Get the obj in localStorage the ID corresponds too
//     let filteredValue = tasks.filter((f) => f.id === taskId);

//     let newFilteredValue = {
//       ...filteredValue[0],
//       priorityValue: priorityPickerValue,
//     };

//     const updatedObject = updateArray(tasks, newFilteredValue);
//     window.localStorage.setItem(
//       'tasks',
//       JSON.stringify(updatedObject)
//     );
//     setTasks(updatedObject);
//     updateFlagColor(priorityPickerValue);
//   }

//   function updateArray(obj, updatedValues) {
//     obj = obj.map((item) => {
//       if (item.id === updatedValues.id) {
//         return { ...item, ...updatedValues };
//       }
//       return item;
//     });
//     return obj;
//   }

//   const [flagColor, setFlagColor] = useState('');
//   function updateFlagColor(priority) {
//     if (priority === 'low') setFlagColor('blue');
//     if (priority === 'medium') setFlagColor('orange');
//     if (priority === 'high') setFlagColor('red');
//   }
