import React, { useContext } from 'react';
import TodoContext from '../context/todoContext';

function Progress() {
    const { progress, todoList } = useContext(TodoContext);
    return (
        <div style={{ padding: '10px 20px', width: '100%', backgroundColor: '#E07C7C', borderRadius: '20px' }}>
            <span style={{ fontWeight: '500', color: '#fff', fontSize: '2rem', lineHeight: '32.81px' }}>Progress</span>
            <div className="progressbar-container" style={{ color: '#fff', margin: '10px auto', width: '100%', height: '7px', backgroundColor: '#3b3b3b', borderRadius: '20px' }}>
                <div className="progressbar-scale" style={{ width: progress / todoList.length * 100 + '%', height: '7px', backgroundColor: '#fff', borderRadius: '20px', transition: 'all 1s ease' }}></div>
            </div >
            <span style={{ fontSize: '1rem', lineHeight: '18.75px', color: '#ebb9b8' }}>{progress} completed</span>
        </div >
    )
};

export default Progress;
