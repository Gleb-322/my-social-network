
import React from "react"
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={classes}>
            <img src='https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg' alt='main'/>
            <div>Ava + descr</div>
            <MyPosts/>
        </div>
    )
}
export default Profile