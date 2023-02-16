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
          cols="50"
          rows="5"
          maxLength="50"
          readOnly="readonly"
          value={description}
        />
      </div>
    </div>
  );
}
