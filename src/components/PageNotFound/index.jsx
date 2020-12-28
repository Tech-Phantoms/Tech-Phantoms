import React from 'react';
import { Link } from 'react-router-dom';
import { Typography,Button,Box } from '@material-ui/core';
import emoticon from '../../assets/404sad_face.svg'

const btnstyle = {
      color: "white",
      backgroundColor: "tomato",
      boxShadow: "none",
};

const NotFoundPage = () => (
    <Box display="flex" paddingTop={5} justifyContent="center" alignItems="center" flexDirection="column" height="calc(100vh - 310.7px)">
        <img src={emoticon} alt="...." width="100px"/>
        <Typography variant="h4" align="center">
            Oh no! Page Not Found.
        </Typography>
        <Typography variant="subtitle1" align="center">
        Looks like you have travelled way too far...
        </Typography>
            <br/>
        <Link to="/">
            <Button style={btnstyle}>
                Go back to home
            </Button><br/><br/>
        </Link>
        <Typography variant="h5" align="center">
         If you feel, thats a bug. 
        </Typography>
        <Typography align="center">
         Contribute <a href="https://github.com/tech-phantoms">here</a><br/> or report at: <br/> 
         <a href="mailto:opensource@techphantoms.tech">
         opensource@techphantoms.tech </a>
        </Typography>
    </Box>
);
export default NotFoundPage;
