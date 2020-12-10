import React, { useContext } from 'react';
import TodoContext from '../context/todoContext';


function Header() {
    const { selectProgress, setSelectProgress } = useContext(TodoContext);

    return (
        <div style={{ marginTop: '20px', padding: '10px 0', width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ lineHeight: '1rem', fontSize: '1.5rem', fontWeight: '500' }}>Tasks</span>
            <select className="select-task" style={{ padding: '4px 3px', outline: 'none', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
                <option value="all" style={{ borderRadius: '10px' }} >All</option>
                <option value="done" style={{ borderRadius: '10px' }}>Done</option>
                <option value="undone" style={{ borderRadius: '10px' }}>Undone</option>
            </select>
        </div>
    )
}

export default Header
