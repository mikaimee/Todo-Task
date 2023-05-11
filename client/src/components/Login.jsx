import React, { useState } from 'react'
import "../css/rl.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = ({setCurrentUser}) => {
    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [loginError, setLoginError] = useState()

    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", {
            email,
            password
        }, {withCredentials: true, credentials: "include"})
        .then(res => {
            console.log("successfully logged in", res);
            setCurrentUser(res.data.user)
            navigate("/homePage")
            window.location.reload(false);
        }).catch((err) => {
            console.log("login error", err)
            setLoginError(err.response.data.errors)
        })
    }

    return (
        <div className="rlContainer">
            <h2 className="rlTitle">Login Here</h2>
            <form className="rlForm" onSubmit={loginHandler}>
                <div className="rlInput">
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="rlInput">
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="rlInput">
                    <button type="submit" className="rlButton">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login