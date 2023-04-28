import React from 'react'
import "../css/taskScreen.css"

//COMPONENTS
import NavBar from '../components/NavBar'
import ProjectPanel from '../components/ProjectPanel'
import OneTask from '../components/OneTask'

const TaskScreen = () => {
    return (
        <div>
            <NavBar />
            <div className="taskContainer">
                <div className="taskBody">
                    <div className="taskItem1">
                        <ProjectPanel />
                    </div>
                    <div className="taskItem2">
                        <OneTask />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskScreen