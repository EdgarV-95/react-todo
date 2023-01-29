import React, { useState } from 'react';
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

const tasks = [];

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

  return (
    <div className="modal-background">
      <div className="modal-body">
        <div className="modal-header">
          <h3>New Task</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <div className="form-body">
          <ul>
            <TextField
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
              <FormControl fullWidth>
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
                  <MenuItem value={'Low'}>Low</MenuItem>
                  <MenuItem value={'Medium'}>Medium</MenuItem>
                  <MenuItem value={'High'}>High</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
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
          <button
            onClick={() => {
              tasks.push({
                id: uuidv4(),
                titleValue,
                descriptionValue,
                dateValue,
                priorityValue,
                projectValue,
              });
              localStorage.setItem('task', JSON.stringify(tasks));
              closeModal();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
