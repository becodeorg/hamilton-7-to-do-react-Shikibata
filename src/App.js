import * as React from 'react';
import {Box} from '@mui/material';
import './index.css'
import Header from "./components/header.js";
import ListTodo from "./components/listTodo.js";

function App() {
  return (
      <div className="container">
          <Box className="todo-container" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <Header />
              <ListTodo />
          </Box>
      </div>
  );
}

export default App;