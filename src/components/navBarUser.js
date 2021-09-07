import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {ListItem, ListItemText} from "@material-ui/core";

function NavBarUser(props) {
    const {authenticated, user} = useSelector((state) => state.session);

    if(authenticated) {
        return (
            <Link to="/logout" key="logout" style={{
                textDecoration: `none`,
                textTransform: `uppercase`,
                color: `white`,
            }}>
                <ListItem button={true}>
                    <ListItemText primary={`Logout ${user.name}`} />
                </ListItem>
            </Link>
        );
    } else
    {
        return null;
    }
}

export default NavBarUser;