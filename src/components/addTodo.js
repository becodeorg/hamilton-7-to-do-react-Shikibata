import {Box, Button, OutlinedInput} from "@mui/material";
import * as React from "react";

function AddTodo() {
  return (
      <Box sx={{ display: 'flex', width: '50%', justifyContent: 'center' }}>
        <OutlinedInput type="text" className="new-todo-input" placeholder="Type a new todo"></OutlinedInput>
        <Button className="new-todo-button">Add Todo</Button>
      </Box>
  );
}

export default AddTodo;