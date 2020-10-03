import React from "react";

import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton
} from '@material-ui/core'

import {
  Menu
} from '@material-ui/icons'

import { useDisclosure } from '@chakra-ui/core'

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
  let { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="transparent" elevation="0">
        <Toolbar>
          <div className={classes.title} />
          <IconButton onClick={onOpen}>
            <Menu fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={isOpen} close={onClose} />
    </div>
  );
};

export default Navbar;
