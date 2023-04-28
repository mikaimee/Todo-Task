import React from 'react'
import "../css/editTask.css"

// COMPONENTS
import NavBar from '../components/NavBar'

const EditTaskScreen = () => {
    return (
        <div>
            <NavBar />
            <div className='editTaskContainer'>
                <div className="taskForm">
                    <h2>Add Tasks</h2>
                    <div className="taskInputs">
                        <label>Title</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="taskInputs">
                        <label>Description of Task</label>
                        <input type="text" name="" id="" />
                    </div>
                    {/* <div className="taskInputs">
                        <label>Project</label>
                        <input type="text" name="" id="" />
                    </div> */}
                    <div className="taskInputs">
                        <label>Status of Task</label>
                        <input type="text"/>
                    </div>
                    <div className="taskInputs">
                        <button>Update Task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTaskScreen