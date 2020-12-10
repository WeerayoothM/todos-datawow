import React, { useContext, useState } from 'react';
import TodoContext from '../context/todoContext';
import './Header.css';
import dropdown from '../images/arrow-down-sign.svg'


function Header() {
    const [isShowSelect, setIsShowSelect] = useState(false);
    const { selectProgress, setSelectProgress } = useContext(TodoContext);

    const handleSelectProgress = (e) => {
        setSelectProgress(e.target.value)
        setIsShowSelect(false)
    }

    return (
        <div style={{ marginTop: '15px', padding: '10px 0', width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ lineHeight: '1rem', fontSize: '1.5rem', fontWeight: '500' }}>Tasks</span>
            <div className="dropdown">
                <button className="dropbtn" onClick={() => setIsShowSelect(prev => !prev)}>{selectProgress}<img src={dropdown} alt="dropdown" style={{ width: '8px' }} /></button>
                <div className="dropdown-content" onMouseOver={() => setIsShowSelect(true)} onMouseLeave={() => setIsShowSelect(false)} style={{ display: isShowSelect ? 'flex' : 'none', transition: 'all 1s ease' }}>
                    <button value="All" onClick={handleSelectProgress}>All</button>
                    <button value="Done" onClick={handleSelectProgress}>Done</button>
                    <button value="Undone" onClick={handleSelectProgress}>Undone</button>
                </div>
            </div>
        </div>
    )
}

export default Header
