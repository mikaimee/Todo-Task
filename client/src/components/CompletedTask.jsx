import React from 'react'
import "../css/completedTask.css"

const CompletedTask = () => {
    return (
        <div className="completedTaskContainer">
            <h2>Completed Tasks on MM/dd/YYYY</h2>
            <div className="completedTaskBody">
                <div className="progressGraph">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-_X9txiWXhAHEJYkjYd6Xhuz8_Dcx0H34p-G3wQJ4&s' />
                </div>
                <div className="completedTaskList">
                    <span>Task 1</span>
                    <span>Task 1</span>
                    <span>Task 1</span>
                    <span>Task 1</span>
                    <span>Task 1</span>
                </div>
            </div>
        </div>
    )
}

export default CompletedTask