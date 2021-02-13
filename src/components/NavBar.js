import React from 'react';
import {Link} from "react-router-dom";
import {Container, IconButton, List, ListItem, ListItemText, makeStyles} from "@material-ui/core";
import {Home} from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    }
});

const navLinks = [
    {title: `about us`, path: `/about`},
    {title: `product`, path: `/product`},
    {title: `blog`, path: `/blog`},
    {title: `contact`, path: `/contact`},
    {title: `faq`, path: `/faq`},
];

const NavBar = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position={'static'}>
                <Toolbar>
                    <Container className={classes.navbarDisplayFlex}>
                        <IconButton edge={"start"} color={'inherit'} aria-label={'home'}>
                            <Home fontSize={'large'}/>
                        </IconButton>
                        <List component={'nav'} aria-labelledby={'main navigation'} className={classes.navDisplayFlex}>
                            {navLinks.map(({title, path}) => (
                                <Link to={path} key={title} className={classes.linkText}>
                                    <ListItem button={true}>
                                        <ListItemText primary={title}/>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;