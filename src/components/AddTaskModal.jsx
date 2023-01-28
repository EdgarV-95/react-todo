import React from 'react';
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

export default function AddTaskModal({ closeModal }) {
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
            />
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
            />
          </ul>
          <ul>
            <Stack component="form" noValidate>
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue="2023-01-28"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
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
                  // value={value}
                  label="Priority"
                  onChange={() => console.log('lol')}
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
                  // value={value}
                  label="Project"
                  onChange={() => console.log('lol')}
                >
                  <MenuItem value={'Inbox'}>Inbox</MenuItem>
                </Select>
              </FormControl>
            </Box>
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
