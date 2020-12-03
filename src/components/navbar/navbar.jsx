import React from 'react';
import {
    Toolbar,
    Button,
    ButtonGroup
} from '@material-ui/core'
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paths from './paths'

const useStyles = makeStyles({
    navclass: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});

const Navbar = () => {
    const history = useHistory();
    const router = (path) => {
        history.push(path);
    };

    const guidelines = { path: "/guidelines" }

    const classes = useStyles();
    return (
        <div className={classes.navclass}>
            <Toolbar spacing={3}>
                <ButtonGroup>
                    {
                        Paths.map(el => <Button onClick={() => { router(el.path) }}>{el.name}</Button>)
                    }
                    <Button border="true"
                        disableGutters={false}
                        color="secondary"
                        onClick={() => { router(guidelines.path) }}
                    >Guidelines</Button>

                    {/* Upcoming Event Logic */}
                    <Button
                        variant="contained"
                        disableElevation
                        border="true"
                        disableGutters={false}
                        color="primary"
                        href='/apihacks'
                    >API Hacks</Button>
                </ButtonGroup>
                {/* Guideline page to be built */}


            </Toolbar>
        </div>
    )
}
export default Navbar