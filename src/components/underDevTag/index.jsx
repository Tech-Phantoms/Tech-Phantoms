import React from 'react';
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    dev: {
        background: 'red',
        color:'white',
        '&:hover':{
            background:'black',
            color:'lightgreen'
        }
    }
})

const DevTag = () => {
  
    const classes = useStyles();     
    
        return (
        <center>
            <Button  className={classes.dev} variant="contained" color="red">
                Under Development Phase
            </Button>
        </center>)
}
export default DevTag;