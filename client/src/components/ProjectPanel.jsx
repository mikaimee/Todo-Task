import React, { useEffect, useState } from 'react'
import "../css/projectPanel.css"
import axios from "axios";

const ProjectPanel = () => {

    const [allProjects, setAllProjects] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/projects")
        .then((res) => {
            setAllProjects(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    return (
        <div className="projectContainer">
            <h2 className="projectTitle">My Projects</h2>
            <div className="projectItems">
                {
                    allProjects.map((project) => (
                        <span>{project.name}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectPanel