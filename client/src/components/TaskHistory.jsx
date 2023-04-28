import React from 'react'
import "../css/taskHistory.css"

const TaskHistory = () => {
    return (
        <div className="taskHistoryContainer">
            <div className="taskHistorySearch">
                <span>Search by: ... enter date here</span>
            </div>
            <div className="taskHistoryList">
                <div className="taskHistoryItem">
                    <span>Task 1</span>
                    <div className="taskHistoryStatus">
                        <span>Status</span>
                    </div>
                </div>
                <div className="taskHistoryItem">
                    <span>Task 1</span>
                    <span>Status</span>
                </div>
                <div className="taskHistoryItem">
                    <span>Task 1</span>
                    <span>Status</span>
                </div>
            </div>
        </div>
    )
}

export default TaskHistory