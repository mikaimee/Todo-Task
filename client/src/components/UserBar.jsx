import React, { useEffect, useState } from 'react'
import "../css/userBar.css"
import axios from "axios";
import { useParams } from 'react-router-dom';

const UserBar = (props) => {

    const {currentUser, setCurrentUser} = props

    useEffect(() => {
        axios.get("http://localhost:8000/api/getLoginUser", 
        {withCredentials: true})
        .then((res) => {
            console.log(res)
            setCurrentUser({
                id: res.data._id,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                role: res.data.role,
                isAdmin: res.data.isAdmin
            })
        }).catch((err) => {
            console.log(err)
        })
    })

    return (
        <div className="userBarContainer">
            <span className='userProdileEdit'>edit</span>
            <div className='userProfileImg'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
            </div>
            <div className="userInfo">
                <h3 className='userProfileName'>Name</h3>
                <p className='userProfileDetails'>Email</p>
                <p className='userProfileDetails'>Role</p>
            </div>
            
        </div>
    )
}

export default UserBar