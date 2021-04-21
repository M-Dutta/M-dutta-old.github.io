import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
const theme = responsiveFontSizes(createMuiTheme());

theme.typography.h2 = {
    fontFamily: 'zen dots !important'
}

theme.typography.h4 = {
    fontFamily: 'zen dots !important',
    textAlign: 'center',
    transition: "all 0.5s ease-in-out",
    fontSize: '2.5rem !important',
    [theme.breakpoints.down("sm")]: { fontSize: "2.2rem !important" },
    [theme.breakpoints.down("xs")]: { fontSize: "1.8rem !important" }
}

theme.typography.h5 = {
    fontFamily: 'Comfortaa !important',
    fontWeight: 'bold',
    textAlign: 'center',
    transition: "all 0.5s ease-in-out",
    fontSize: '2rem !important',
    [theme.breakpoints.down("sm")]: { fontSize: "1.8rem !important" },
    [theme.breakpoints.down("xs")]: { fontSize: "1.5rem !important" }
}


theme.typography.body1 = {
    fontFamily: 'Comfortaa !important',
    fontWeight: 'bold'
}


/*
*** NavBar theming
*/

theme.overrides.MuiAppBar = {
    root: { boxShadow: 'None' },
    colorPrimary: {color: 'white',backgroundColor: 'white'}
}

theme.overrides.MuiToolbar = {
    regular: {
        minHeight: "unset !important",
        height: '35px'
    }
}
theme.overrides.MuiLink = {
    root: {
        color: 'black'
    }
}

theme.overrides.MuiIconButton = {
    root: {
        outline: 'none !important'
    }
}


export { theme }