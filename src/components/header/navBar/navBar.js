import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { About } from '../../pages/about/about';
import { Work } from '../../pages/work/work';
import { Base } from '../../base/base'
const navList = [
    { name: 'About', url: '/about' },
    { name: 'Work', url: '/work' },
    { name: 'Site-Info', url: '/site-info' }
]

const NavBar = props => {
    const navItems = navList.map((data, index) =>
        <li key={index + 1}>
            <NavLink className='link' to={data.url}>{data.name}</NavLink>
        </li>
    )
    return (<Router>
        <nav className='navbar justify-content-center'>
            <ul className='nav-list'>
                {navItems}
            </ul>
        </nav>
        <Switch>
            <Route path='/' exact component={Base}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/work' ></Route>
        </Switch>
    </Router>
    
    )
}

export { NavBar }