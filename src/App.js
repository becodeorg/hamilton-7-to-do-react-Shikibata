import * as React from 'react';
import {Checkbox, Button, OutlinedInput, FormGroup, FormControlLabel, Box} from '@mui/material';
import Header from "./components/header.js";
import AddTodo from "./components/addTodo.js";
import ListTodo from "./components/listTodo.js";

function App() {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Header />
          <AddTodo />
          <ListTodo />
      </Box>
  );
}

export default App;
