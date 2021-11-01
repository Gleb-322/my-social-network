import React from "react"
import Post from './Post/Post'
// import classes from './MyPosts.module.css'

const MyPosts = () => {
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    New Post
                </div>
                <div>
                    <Post messages='Hi, i am Ivan' likeCounts={5}/>
                    <Post messages='I love React' likeCounts={555}/>
                    <Post messages='You can now view my-social-network in the browser.' likeCounts={55}/>
                </div>
            </div>
    )
}
export default MyPosts