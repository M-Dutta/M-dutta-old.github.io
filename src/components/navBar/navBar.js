import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { About } from '../pages/about/about';
import { Work } from '../pages/work/work';
import { Transition } from 'react-spring/renderprops';


import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/MenuItem/MenuItem';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import TypoGraphy from '@material-ui/core/Typography'
import { borders } from '@material-ui/system';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const navList = [
  { name: 'About', url: '/about' },
  { name: 'Work', url: '/work' },
  { name: 'Site-Info', url: '/site-info' }
]

const baseDiv = document.body.childNodes[1]
const topLimit = 30

const theme = createMuiTheme({
  overrides: {
    MuiTabs: {
      root: {
        fontFamily: 'Cabin Sketch',
        fontSize: "1.3rem",
      }
    }


    // label: {
    //   color: "#FFF000"
    // },
    // indicator: {
    //   backgroundColor: "#FFF"
  }
});

const useStyles = makeStyles({
  Mui_root: {
      fontFamily: "Cabin Sketch",
      fontSize: 'larger',
      opacity: .5,
      "&:hover": {
        textDecoration: 'underline'
      },
      "&.active": {
        opacity: 1
      }
    }
});

const NavBar = props => {
  const navBarStyle = useStyles()
  console.log(navBarStyle)
  return (
    <div className='nav-bar'>
      <AppBar  >
        <Tabs centered={true}>
          <Tab classes={{root:navBarStyle.Mui_root}} label='About' to='/about' component={NavLink} />
          <Tab classes={{root:navBarStyle.Mui_root}} label="Work" to='/work' component={NavLink} />
          <Tab classes={{root:navBarStyle.Mui_root}} label="site-info" to='/site-info' component={NavLink} />
        </Tabs>
      </AppBar>
    </div>
  );
}


// const NavBar = props => {
//     const navItems = navList.map((data, index) => <li key={index + 1}><NavLink className='link' to={data.url}>{data.name}</NavLink></li>)

//     const [background, setBackground] = useState('transparent') 
//     useEffect(() => {
//         const handleScroll = () => {
//             if (baseDiv.scrollTop>30) setBackground('white')
//             else setBackground('transparent')
//         }
//         document.body.childNodes[1].addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener("scroll", handleScroll);
//       }, [])

//     return (
//         <nav className='navbar shadow-sm justify-content-center fixed-top rounded-bottom-1' style={{background: background, transition: 'background 500ms linear'}} >
//             <ul className='nav-list'>
//                 {navItems}
//             </ul>
//         </nav>
//     )
// }

export { NavBar }