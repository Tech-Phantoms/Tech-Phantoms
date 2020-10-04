import React, {useState} from "react";

import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton
} from '@material-ui/core'

import {
  Menu
} from '@material-ui/icons'

import Drawer from "./drawer";


const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = (props) => {

  const classes = useStyle()

  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent" elevation="0">
        <Toolbar>
          <div className={classes.title} />
          <IconButton onClick={() => {
            toggleDrawer()
            }}>
            <Menu fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer} />
    </div>
  );
};

export default Navbar;
