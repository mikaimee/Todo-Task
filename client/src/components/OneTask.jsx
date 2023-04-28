import React from 'react'
import "../css/oneTask.css"
import {Link, NavLink, useNavigate} from "react-router-dom"

const OneTask = () => {

    const navigate = useNavigate()
    const backHome = () => navigate("/homePage")
    const edit = () => navigate("/user/edit/:userId")

    return (
        <div className='oneTaskContainer'>
            <div className="topOneTaskBar">
                <h2>Task Name</h2>
                <div className='edOneTask'>
                    <span onClick={edit}>Edit</span>
                    <span>Delete</span>
                </div>
                
            </div>
            <div className="taskElementItems">
                <div className="taskElementItem">
                    <span>Description</span>
                    <span>...description</span>
                </div>
                {/* <div className="taskElementItem">
                    <span>Project</span>
                    <span>...description</span>
                </div> */}
                <div className="taskElementItem">
                    <span>Status</span>
                    <span>...status</span>
                </div>
                <div className="taskElementItemButton">
                    <button className='oneTaskButton' onClick={backHome}>Go back</button>
                    <button className='oneTaskButton'>Completed</button>
                </div>
            </div>
        </div>
    )
}

export default OneTask