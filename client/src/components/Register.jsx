import React, {useState} from 'react'
import "../css/rl.css"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = ({setCurrentUser}) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [role, setRole] = useState("")
    const [isAdmin, setIsAdmin] = useState("")

    const [regErrors, setRegErrors] = useState("")

    const navigate = useNavigate()

    const autoLogin = (email, password) => {
        axios.post("http://localhost:8000/api/login", {
            email,
            password
        }, {withCredentials: true, credentials: "include"})
        .then(res => {
            setCurrentUser(res.data.user)
            navigate("/homePage")
            window.location.reload(false);
        }).catch((err) => {
            console.log("Autologin error", err)
        })
    }

    const registrationHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/register", {
            firstName,
            lastName,
            role,
            email,
            password,
            confirmPassword,
            isAdmin
        }, {withCredentials: true, credentials: "include"})
        .then((res) => {
            console.log(res);
            autoLogin(email, password)
            navigate("/homePage")
        }).catch((err) => {
            console.log("Error with registration", err)
            setRegErrors("Registration Error")
        })
    }

    return (
        <div className="rlContainer">
            <h2 className="rlTitle">Register Here</h2>
            <form className="rlForm" onSubmit={registrationHandler}>
                <div className="rlInput">
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="rlInput">
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="rlInput">
                    <label>Role: </label>
                    <input type="text" onChange={(e) => setRole(e.target.value)} />
                </div>
                <div className="rlInput">
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="rlInput">
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="rlInput">
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="rlInput">
                    <button className="rlButton">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register;