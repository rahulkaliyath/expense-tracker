import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.styles.scss';


const SideBar = () => {
    return (
        <nav className="admin__nav">
        <ul className="menu">
            <li className="menu__title">Dashboard</li>
            <li className="menu__title">Activity</li>
            <li className="menu__title">Settings</li>
            <li className="menu__title">Log Out</li>          
        </ul>
    </nav>
    )
  };

  export default SideBar;