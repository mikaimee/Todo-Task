import React from 'react'
import "../css/homescreen.css"

// COMPONENTS
import NavBar from '../components/NavBar'
import ProjectPanel from '../components/ProjectPanel'
import TaskToday from '../components/TaskToday'

const HomeScreen = () => {
    return (
        <div>
            <NavBar />
            <div className="homeContainer">
                <div className="homeBody">
                    <div className="homeItem1">
                        <ProjectPanel />
                    </div>
                    <div className="homeItem2">
                        <TaskToday />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen