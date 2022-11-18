import * as React from 'react';
import {Box} from '@mui/material';

import Header from "./components/header.js";
import ListTodo from "./components/listTodo.js";

function App() {
  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <Header />
          <ListTodo />
      </Box>
  );
}

export default App;