import React, { useContext } from 'react';
import TodoContext from '../../context/todoContext';
import './Progress.scss';

function Progress() {
    const { progress, todoList } = useContext(TodoContext);
    return (
        <div className='progress-container'>
            <span className="progress-header">Progress</span>
            <div className="progressbar-container">
                <div className="progressbar-scale" style={{ width: `${progress / todoList.length * 100}%` }}></div>
            </div >
            <span className="progress-completed">{progress} completed</span>
        </div >
    );
};

export default Progress;
