import { TextField } from '@mui/material';

export default function TaskDesc({
  title,
  description,
  date,
  priority,
}) {
  let capitalLetter =
    priority.charAt(0).toUpperCase() + priority.substring(1);
  return (
    <div className="details-tab">
      <div className="left-side">
        <p>
          <span>Title:</span> {title}
        </p>
        <p>
          <span>Due date:</span> {date}
        </p>
        <p>
          <span>Priority:</span> {capitalLetter}
        </p>
      </div>
      <div className="description">
        <p>
          <span>Description:</span>
        </p>
        <textarea
          cols="30"
          rows="5"
          maxlength="50"
          readonly="readonly"
        >
          {description}
        </textarea>
      </div>
    </div>
  );
}
