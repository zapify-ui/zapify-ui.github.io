import React, { useState } from 'react';
import { Link } from "react-router-dom";
import HamburgerIcon from '../../assets/hamburger.png';
import CloseIcon from '../../assets/close.png';
import './Sidebar.css';

function Sidebar() {
    const [visibility, setVisibility] = useState('hidden');

    function handleSidebar() {
        visibility === 'hidden' ? setVisibility("visible") : setVisibility("hidden");
    }

    return (
        <React.Fragment>
            <div className={"app-sidebar " + visibility} onClick={() => handleSidebar()}>
               
               <Link className="sidebar-link" to="/components/button">Button</Link>
               <Link className="sidebar-link" to="/components/box">Box</Link>
               <Link className="sidebar-link" to="/components/container">Container</Link>
               <Link className="sidebar-link" to="/components/media">Media</Link>           
            </div>
            <button className="sidebar-button"
                onClick={() => handleSidebar()}>
                <img className="button-icon"
                    src={visibility === 'hidden' ? HamburgerIcon : CloseIcon}
                    alt="sidebar icon" />
            </button>
        </React.Fragment>
    );
}

export default Sidebar;
