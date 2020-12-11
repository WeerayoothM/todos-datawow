import './App.scss';
import Progress from './components/Progress/Progress';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import React, { useEffect, useState } from 'react';
import TodoContext from './context/todoContext';
import axios from 'axios';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [progress, setProgress] = useState(0);
  const [selectProgress, setSelectProgress] = useState("All")
  const fetchTodoData = () => {
    axios.get('http://localhost:3001/todos')
      .then(res => {
        const completedTask = res.data.reduce((acc, todo) => {
          if (todo.completed) return acc + 1
          return acc
        }, 0)
        setProgress(completedTask)
        setTodoList(res.data)
      })
      .catch(err => console.log(err))
  };

  const addTodo = (e) => {
    if (e.key === "Enter") {
      axios.post('http://localhost:3001/todos', { title: inputValue, completed: false })
        .then(res => {
          setInputValue("");
          fetchTodoData();

        })
        .catch(err => console.log(err))
    }
  };

  useEffect(() => {
    fetchTodoData();
  }, []);


  return (
    <div className="App">
      <div className="container">
        <TodoContext.Provider value={{ todoList, setTodoList, fetchTodoData, progress, selectProgress, setSelectProgress }} >
          <Progress />
          <Header />
          <TodoList />
          <input className="todo-input" type="text" value={inputValue}
            onKeyPress={addTodo} onChange={(e) => setInputValue(e.target.value)}
            placeholder='Add your todo...'
          />
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;
