import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useState } from 'react';
import {
  TextField,
  Stack,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';

export default function EditTask({ onEditTask, currentValues }) {
  const [openEditForm, setOpenEditForm] = useState(false);
  function openEditFormBtn() {
    setOpenEditForm(!openEditForm);
  }

  function closeEditFormBtn() {
    setOpenEditForm(false);
    setTitle(currentValues[1]);
    setDescription(currentValues[2]);
    setDate(currentValues[3]);
    setPriority(currentValues[4]);
    setProject(currentValues[5]);
  }

  const [title, setTitle] = useState(currentValues[1]);
  const [description, setDescription] = useState(currentValues[2]);
  const [date, setDate] = useState(currentValues[3]);
  const [priority, setPriority] = useState(currentValues[4]);
  const [project, setProject] = useState(currentValues[5]);
  return (
    <>
      <EditOutlinedIcon
        className="task-edit"
        onClick={openEditFormBtn}
        sx={{
          '&:hover': {
            backgroundColor: 'rgb(238,238,238);',
            borderRadius: '0.5vh',
          },
        }}
      />
      {openEditForm && (
        <div className="modal-background">
          <div className="modal-body">
            <div className="modal-header">
              <h3>Edit Task</h3>
              <button onClick={closeEditFormBtn}>X</button>
            </div>
            <div className="form-body">
              <ul>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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
                      value={priority}
                      onChange={(e) => setPriority(e.target.value)}
                    >
                      <MenuItem value={'low'}>Low</MenuItem>
                      <MenuItem value={'medium'}>Medium</MenuItem>
                      <MenuItem value={'high'}>High</MenuItem>
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
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                    >
                      <MenuItem value={'Inbox'}>Inbox</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </ul>
            </div>
            <div className="buttons">
              <button onClick={closeEditFormBtn}>Close</button>
              <button
                onClick={() => {
                  onEditTask(
                    currentValues[0],
                    title,
                    description,
                    date,
                    priority,
                    project,
                    currentValues[6]
                  );
                  openEditFormBtn();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
