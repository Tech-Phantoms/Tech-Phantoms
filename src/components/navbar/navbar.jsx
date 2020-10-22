import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


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
    const paths = [
        { name: "About Us", path: "/" },
        { name: "Our Story", path: "/team" },
        { name: "Events", path: "/events" },
        { name: "Projects", path: "/projects" }
    ];

    const guidelines={path:"/guidelines"}

    const classes=useStyles();
    return (
        <div className={classes.navclass}>
            <Toolbar spacing={3}>
                {
                paths.map(el => <Button onClick={()=>{ router(el.path)}}>{el.name}</Button>)
                }          
{/* Guideline page to be built */}
                <Button border="true" 
                disableGutters={false} 
                color="secondary"
                onClick={()=>{ router(guidelines.path)}}
                >Guidelines</Button>

{/* Upcoming Event Logic */}
                <Button
                 variant="contained" 
                 border="true" 
                 disableGutters={false} 
                 color="info" 
                 >Upcoming Event</Button>

            </Toolbar>
        </div>
    )
}
export default Navbar