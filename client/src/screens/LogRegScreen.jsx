import React from 'react'
import "../css/logRegScreen.css"

// COMPONENTS
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import Register from '../components/Register'

const LogRegScreen = () => {
    return (
        <div>
            <NavBar />
            <div className="logRegContainer">
                <div className="logRegBody">
                    <Register />
                    <Login />
                </div>
        </div>
        </div>
        
    )
}

export default LogRegScreen