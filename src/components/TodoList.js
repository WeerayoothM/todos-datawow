import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../context/todoContext';

function TodoList() {
    const { todoList, selectProgress } = useContext(TodoContext);
    return (
        <div className='todos-container'>
            {
                todoList.filter((todo) => {
                    switch (selectProgress) {
                        case "All":
                            return true;
                        case "Done":
                            return todo.completed;
                        case "Undone":
                            return !todo.completed;
                        default:
                            return true;
                    }
                }).map((todo, idx) => {
                    return (
                        <TodoItem key={idx} todo={todo} />
                    )
                })
            }
        </div>
    )
};

export default TodoList;
