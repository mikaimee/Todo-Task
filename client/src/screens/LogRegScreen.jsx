import React from 'react'
import "../css/logRegScreen.css"

// COMPONENTS
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import Register from '../components/Register'

const LogRegScreen = () => {

    // const {currentUser, setCurrentUser} = props

    return (
        <div>
            <NavBar />
            <div className="logRegContainer">
                <div className="logRegBody">
                    <Register />
                    <Login />
                    {/* <Register currentUser={currentUser} setCurrentUser={setCurrentUser} />
                    <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/> */}
                </div>
        </div>
        </div>
        
    )
}

export default LogRegScreen