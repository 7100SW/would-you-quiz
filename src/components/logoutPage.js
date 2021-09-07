import React from 'react';
import {Card, CardHeader, makeStyles} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {useDispatch} from "react-redux";
import {logout} from "../actions";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    card: {
        margin: "3.0em",
    },
    title: {
        fontSize: 14,
    },
});

const LogoutPage = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        history.push("/login");
    };

    return (
        <Container maxWidth={"md"} >
            <Card className={classes.card}>
                <CardHeader title={"Are you sure you want to logout?"}></CardHeader>
                <CardContent>
                    <Button variant={"contained"} color={"primary"} onClick={handleLogout}>Logout</Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default LogoutPage;