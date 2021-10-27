
import React from "react"
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <img src='https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg' alt='main'/>
            <div>Ava + descr</div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        Post 1
                    </div>
                    <div className={classes.item}>
                        Post 2
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Profile