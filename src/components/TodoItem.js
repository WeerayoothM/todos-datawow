import axios from 'axios';
import React, { useContext, useState } from 'react';
import TodoContext from '../context/todoContext';
import optionsvg from '../images/Option.svg';

function TodoItem({ todo }) {
    const [isEdit, setIsEdit] = useState(false);
    const [isShowOption, setIsShowOption] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const { fetchTodoData } = useContext(TodoContext);
    const changeStatus = () => {
        axios.patch(`http://localhost:3001/todos/${todo.id}`, { "completed": !todo.completed }, { headers: { "Content-Type": "application/json" } })
            .then(res => {
                console.log(res.data)
                fetchTodoData()
            })
            .catch(err => console.log(err.message))
    };
    const editTodo = () => {
        setIsEdit(true)
        setIsShowOption(false)
        setInputValue(todo.title)
    };
    const saveEditTodo = () => {
        axios.patch(`http://localhost:3001/todos/${todo.id}`, { "title": inputValue }, { headers: { "Content-Type": "application/json" } })
            .then(res => {
                console.log(res.data)
                fetchTodoData()
            })
            .catch(err => console.log(err.message))
        setIsEdit(false)
    };
    const deleteTodo = () => {
        axios.delete(`http://localhost:3001/todos/${todo.id}`)
            .then(res => {
                console.log(res.data)
                fetchTodoData()
            })
            .catch(err => console.log(err.message))
    };
    return (
        <div style={{ display: 'flex', padding: '3px 5px 3px 10px', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', borderRadius: '20px', margin: '10px 0' }}>
            {isEdit ?
                <>
                    <input className="edit-input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className="btn-option btn-save" onClick={saveEditTodo}>Save</button>
                </>
                :
                <>
                    <div style={{ display: 'flex', alignItems: 'center' }} >
                        <input onChange={changeStatus} className='checkbox' type="checkbox" style={{ borderRadius: '10px', border: 'none', width: '15px', height: '15px', margin: '0', marginRight: '10px', cursor: 'pointer' }} checked={todo.completed} />
                        <span className='checkmark'></span>
                        <div >
                            <span style={{ textDecoration: todo.completed ? "line-through" : "none", wordBreak: 'break-word', wordWrap: 'break-word', color: todo.completed ? "gray" : "black" }}>{todo.title}</span>
                        </div>
                    </div>
                    <div className="todo-option">
                        <button className="btn-option" onClick={() => setIsShowOption(prev => !prev)} style={{ padding: '0 2px' }}><img src={optionsvg} alt="option" /></button>
                        <div className="todo-option-list" onMouseOver={() => setIsShowOption(true)} onMouseLeave={() => setIsShowOption(false)} style={{ display: isShowOption ? 'flex' : 'none', transition: 'all 1s ease' }}>
                            <button className="btn-option btn-edit" onClick={editTodo}>Edit</button>
                            <button className="btn-option btn-delete" onClick={deleteTodo}>Delete</button>
                        </div>
                    </div>
                </>
            }
        </div >
    )
};

export default TodoItem;
