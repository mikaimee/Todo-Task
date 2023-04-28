import React, { useEffect, useState } from 'react';
import "../css/addTask.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import NavBar from '../components/NavBar'

const AddTaskScreen = () => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("");
    // const [project, setProject] = useState("")

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/:projectid/tasks", {
            title,
            desc
        }, {withCredentials: true})
        .then((res) => {
            console.log(res)
            console.log("catch from back-end")
            navigate("/homePage")
        })
        .catch((err) => {
            console.log("error from front-end")
            setErrors(err.response.data.errors)
        })
    }

    return (
        <div>
            <NavBar />
            <div className='addedTaskContainer'>
                <div className="taskForm">
                    <h2>Add Tasks</h2>
                    <form onSubmit={submitHandler} >
                        <div className="taskInputs">
                            <label>Title</label>
                            <input 
                                type="text" 
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="taskInputs">
                            <label>Description of Task</label>
                            <input 
                                type="text" 
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </div>
                        {/* <div className="taskInputs">
                            <label>Project</label>
                            <input type="text" name="" id="" />
                        </div> */}
                        <div className="taskInputs">
                            <button>Add Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTaskScreen