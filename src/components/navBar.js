import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavBarUser from "./navBarUser";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});

const navLinks = [
  { title: `home`, path: `/home` },
  { title: `leader board`, path: `/leaderboard` },
  { title: `new question`, path: `/add` },
];

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position={"static"}>
        <Toolbar>
          <Container className={classes.navbarDisplayFlex}>
            <Link to={"/home"}>
              <IconButton edge={"start"} color={"inherit"} aria-label={"home"}>
                <Home fontSize={"large"} />
              </IconButton>
            </Link>
            <List
              component={"nav"}
              aria-labelledby={"main navigation"}
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem button={true}>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
              <NavBarUser/>
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
