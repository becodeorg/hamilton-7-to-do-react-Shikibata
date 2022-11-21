import React, { useState } from 'react';
import AddTodo from "./addTodo";
import {Box, Checkbox, Paper} from "@mui/material";
import {TiDelete, TiEdit} from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

  const [edit, setEdit] = useState({
    id: null,
    value: '',
    isComplete: '',
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
      isComplete: '',
    });
  };


  if (edit.id) {
    return <AddTodo edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
      <Box className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index}
          sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
          <div className={'row'} elevation={2} >
              <p className={'row-p'}>{todo.text}</p>
                <Box className='icons'
                     sx={{display: 'flex',gap:'10px', marginLeft:'2rem'}}>
                    <Checkbox key={todo.id} defaultChecked={todo.isComplete} onClick={() => completeTodo(todo.id)}></Checkbox>
                    <TiDelete
                      onClick={() => removeTodo(todo.id)}
                      className='delete-icon'/>
                  <TiEdit
                      onClick={() => setEdit({ id: todo.id, value: todo.text})}
                      className='edit-icon'/>
                </Box>
        </div>
      </Box>
  ));
};

export default Todo;