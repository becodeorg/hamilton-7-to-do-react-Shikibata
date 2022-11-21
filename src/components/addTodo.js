import {useEffect, useRef, useState} from "react";
import {Button, OutlinedInput} from "@mui/material";

function AddTodo(props) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
      <form onSubmit={handleSubmit} sx={{display: 'flex', marginTop: '2rem'}} className='todo-form'>
        {props.edit ? (
            <>
              <OutlinedInput
                  placeholder='Update your item'
                  value={input}
                  onChange={handleChange}
                  name='text'
                  ref={inputRef}
                  className='todo-input edit'
              />
              <Button onClick={handleSubmit} className='todo-button edit'>
                Update
              </Button>
            </>
        ) : (
            <>
              <OutlinedInput
                  placeholder='Add a todo'
                  value={input}
                  onChange={handleChange}
                  name='text'
                  className={'todo-input'}
                  ref={inputRef}
              />
              <button onClick={handleSubmit} className={'todo-button'}>
                Add
              </button>
            </>
        )}
      </form>
  );
}

export default AddTodo;
