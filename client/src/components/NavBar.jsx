import React from 'react'
import "../css/navbar.css"
import {Link, NavLink, useNavigate} from "react-router-dom"

import Logout from './Logout'

const NavBar = () => {

    const navigate = useNavigate()
    const backHome = () => navigate("/homePage")
    const profilePage = () => navigate("/user/:userId")


    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="navLogo" onClick={backHome}>My Task Organizer</span>
                <div className="navLogReg">
                    <span className="navSpan" onClick={profilePage}>Profile Page</span>
                    <span className="navSpan">Logout</span>
                </div>
            </div>
        </div>
    )
}

export default NavBar