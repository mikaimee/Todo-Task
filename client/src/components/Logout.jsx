import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = ({setCurrentUser}) => {

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/logout",
        {withCredentials: true})
        .then((res) => {
            setCurrentUser({})
            navigate("/")
        }).catch(err => console.log(err))
    }, [navigate, setCurrentUser])

    return (
        <div>Logout</div>
    )
}

export default Logout