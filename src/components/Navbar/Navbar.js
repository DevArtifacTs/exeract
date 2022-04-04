import React, {useState, useEffect} from "react";
import './Navbar.css'
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';


function Navbar(props) {
    const [isHomeActive, setIsHomeActive] = useState(false);
    const [isActActive, setIsActActive] = useState(false);
    const [isStatActive, setIsStatActive] = useState(false);
    

    return (
        <nav className='navbar'>
            <Link to= '/' className='web-logo' >
                <h1>Exer<span>act</span></h1>
            </Link>
            <ul className='nav-list'>
                
                <li  className='nav-list-item'
                onMouseEnter={() => setIsHomeActive(true)}
                onMouseLeave={() => setIsHomeActive(false)}>
                    <Link to= '/' >
                            <img src={isHomeActive? "/icons/home_active.png" : "/icons/home_normal.png" } alt="home-icon" className="nav-icon" />
                    </Link>
                </li>
                
                <li  className='nav-list-item'
                onMouseEnter={() => setIsActActive(true)}
                onMouseLeave={() => setIsActActive(false)}>
                    <Link to= 'add-activity-form' >
                            <img src={isActActive? "/icons/activity_active.png" : "/icons/activity_normal.png"} alt="activity-icon"  className="nav-icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar ;