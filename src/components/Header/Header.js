import React from "react"
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://crosti.ru/patterns/00/0c/fc/2581e6a797/picture.jpg' alt='logo'/>
            <h1>check for git connection</h1>
        </header>
    )
}
export default Header