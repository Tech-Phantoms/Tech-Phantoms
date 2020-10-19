import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

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
    return (
        <Toolbar>
            {
            paths.map(el => <Button onClick={()=>{ router(el.path)}}>{el.name}</Button>)
            }          
            <Button variant="outlined" border="true" color="secondary">Join Us</Button>
        </Toolbar>
    )
}
export default Navbar