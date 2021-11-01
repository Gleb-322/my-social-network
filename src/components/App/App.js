import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Profile from '../Profile/Profile'
import Dialogs from '../Dialogs/Dialogs'
import './App.css'
import {Route, Switch} from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path="/profile" component={Profile} />
                    <Route path='/messages' component={Dialogs} />
                    <Route path='/news' component={News} />
                    <Route path='/music' component={Music} />
                    <Route path='/settings' component={Settings} />
                </Switch>
            </div>
        </div>
    );
}

export default App
