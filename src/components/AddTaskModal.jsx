import React from 'react';

export default function AddTaskModal({ closeModal }) {
  return (
    <div className="modal-background">
      <div className="modal-body">
        <h3>New Task</h3>
        <div className="form-body">
          <button onClick={closeModal}>X</button>
          <ul>
            <li>Title</li>
            <li>Description</li>
          </ul>
          <ul>
            <li>Due Date</li>
            <li>Priority</li>
            <li>Project</li>
          </ul>
        </div>
        <div className="buttons">
          <button onClick={closeModal}>Close</button>
          <button onClick={() => console.log('works')}>Submit</button>
        </div>
      </div>
    </div>
  );
}
