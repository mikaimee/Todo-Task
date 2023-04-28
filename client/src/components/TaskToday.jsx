import React from 'react'
import "../css/taskToday.css"
import {Link, NavLink, useNavigate} from "react-router-dom"

const TaskToday = () => {

    const navigate = useNavigate();
    const oneTask = () => navigate("/task/:id")
    const addTask = () => navigate("/addTask")

    return (
        <div className="taskTodayContainer">
            <div className="topTaskBar">
                <h2>Today's Tasks</h2>
                <button className='todayTaskButton' onClick={addTask}>+</button>
            </div>
            <div className="todayTaskItems">
                <div className="todayTaskItem">
                    <span onClick={oneTask} className="taskTodayTitle">Task 1</span>
                    <div className='todayTaskStatus'>
                        <span>Completed</span>
                    </div>
                </div>
                <div className="todayTaskItem">
                    <span onClick={oneTask} className="taskTodayTitle">Task 1</span>
                    <div className='todayTaskStatus'>
                        <span>Status</span>
                    </div>
                </div>
                <div className="todayTaskItem">
                    <span onClick={oneTask} className="taskTodayTitle">Task 1</span>
                    <div className='todayTaskStatus'>
                        <span>Status</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default TaskToday