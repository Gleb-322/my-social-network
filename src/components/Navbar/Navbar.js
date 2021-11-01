import React from "react"
import {Link} from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <Link to='/profile'>Profile</Link>
            </div>
            <div className={classes.item}>
                <Link to='/messages'>Messages</Link>
            </div>
            <div className={classes.item}>
                <Link to='/news'>News</Link>
            </div>
            <div className={classes.item}>
                <Link to='/music'>Music</Link>
            </div>
            <div className={classes.item}>
                <Link to='/settings'>Settings</Link>
            </div>
        </nav>
    )
}
export default Navbar