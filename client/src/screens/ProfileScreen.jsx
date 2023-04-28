import React from 'react'
import "../css/profileScreen.css"

// COMPONENTS
import NavBar from '../components/NavBar'

//COMPONENTS
import UserBar from '../components/UserBar'
import CompletedTask from '../components/CompletedTask'
import ProjectPanel from '../components/ProjectPanel'
import TaskHistory from '../components/TaskHistory'

const ProfileScreen = () => {
    return (
        <div>
            <NavBar />
            <div className="profileContainer">
                <div className="profileBody">
                    <div className="profileItem1">
                        <UserBar />
                    </div>
                    <div className="profileItem2">
                        <CompletedTask />
                        <ProjectPanel />
                        <TaskHistory />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProfileScreen
