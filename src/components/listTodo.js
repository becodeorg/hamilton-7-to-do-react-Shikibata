import React, {useEffect, useState} from 'react';
import AddTodo from './addTodo';
import Todo from './todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    if(localStorage.getItem("localTasks")){
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTodos(storedList);
    }
  },[])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }


    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    localStorage.setItem("localTasks", JSON.stringify(newTodos));
  };



  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
    localStorage.setItem("localTasks", JSON.stringify(removedArr))
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("localTasks", JSON.stringify(updatedTodos))
  };

  return (
      <>
        <AddTodo onSubmit={addTodo} />
        <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
        />
      </>
  );
}

export default TodoList;