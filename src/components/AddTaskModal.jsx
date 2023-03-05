import React, { useState, useEffect } from 'react';
import './AddTaskModal.css';
import {
  TextField,
  Stack,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export default function AddTaskModal({ closeModal }) {
  const currentDate = new Date()
    .toLocaleDateString('en-GB')
    .split('/')
    .reverse()
    .join('-');
  const [dateValue, setDateValue] = useState(currentDate);
  const [titleValue, setTitleValuel] = useState('');
  const [descriptionValue, setDescriptionValuel] = useState('');
  const [priorityValue, setPriorityValue] = useState('');
  const [projectValue, setProjectValue] = useState('');

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem('tasks');
    if (data !== null) setTasks(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (tasks.length > 1) {
      window.localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      return;
    }
  }, [tasks]);

  let flagColor;
  function updateColor(priority) {
    if (priority === 'low') flagColor = 'rgb(64,115,214)';
    if (priority === 'medium') flagColor = 'rgb(244,156,24)';
    if (priority === 'high') flagColor = 'rgb(222,76,74)';
  }

  function handleSubmit() {
    updateColor(priorityValue);
    tasks.push({
      id: uuidv4(),
      titleValue,
      descriptionValue,
      dateValue,
      priorityValue,
      projectValue,
      flagColor: flagColor,
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    closeModal();
    // Very ugly fix for adding tasks to Body.jsx
    location.reload();
  }

  return (
    <div className="modal-background">
      <form onSubmit={handleSubmit}>
        <div className="modal-body">
          <div className="modal-header">
            <h3>New Task</h3>
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
          </div>
          <div className="form-body">
            <ul>
              <TextField
                required
                id="outlined-basic"
                label="Title"
                variant="outlined"
                value={titleValue}
                onChange={(e) => setTitleValuel(e.target.value)}
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value={descriptionValue}
                onChange={(e) => setDescriptionValuel(e.target.value)}
              />
            </ul>
            <ul>
              <Stack component="form" noValidate>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={dateValue}
                  onChange={(e) => setDateValue(e.target.value)}
                />
              </Stack>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">
                    Priority
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Priority"
                    value={priorityValue}
                    onChange={(e) => setPriorityValue(e.target.value)}
                  >
                    <MenuItem value={'low'}>Low</MenuItem>
                    <MenuItem value={'medium'}>Medium</MenuItem>
                    <MenuItem value={'high'}>High</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth required>
                  <InputLabel id="demo-simple-select-label">
                    Project
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Project"
                    value={projectValue}
                    onChange={(e) => setProjectValue(e.target.value)}
                  >
                    <MenuItem value={'Inbox'}>Inbox</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </ul>
          </div>
          <div className="buttons">
            <button onClick={closeModal}>Close</button>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
