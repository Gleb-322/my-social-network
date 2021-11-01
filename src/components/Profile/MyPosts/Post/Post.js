import React from "react"
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://www.meme-arsenal.com/memes/b877babd9c07f94b952c7f152c4e264e.jpg' alt='men'/>
            {props.messages}
            <div>
                <span>Like {props.likeCounts}</span>
            </div>
        </div>
    )
}
export default Post