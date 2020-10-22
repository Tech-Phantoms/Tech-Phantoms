import React from "react";

import {
  Drawer,
  List,
  makeStyles,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button
} from '@material-ui/core'

import {
  Home,
  People,
  Event,
  Description
} from '@material-ui/icons'

import Logo from "../../assets/sidenavbar/top_logo.svg";

import { useHistory } from "react-router-dom";
import Paths from './paths'


const useStyle = makeStyles(theme => ({
  list: {
    width: 260,
    padding: '10px',
  },
  fullList: {
    width: 'auto',
  }
}))

const MenuDrawer = props => {

  const classes = useStyle()

  const history = useHistory();
  const router = (path) => {
    history.push(path);
  };


  const guidelines = { path: "/guidelines" }
  let iconGen = (path) => {
    switch (path) {

      case '/team':
        return <People />

      case '/events':
        return <Event />

      case '/projects':
        return <Description />

      default:
        return <Home />
    }
  }

  const list = () => (
    <div className={classes.list}>
      <div style={{ padding: '12px 22px' }}>
        <img src={Logo} alt="" width="90%" />
      </div>
      <List>
        {Paths.map(el => <ListItem button onClick={() => {
          router(el.path)
          props.onClose()
        }}
        >
          <ListItemIcon>{iconGen(el.path)}</ListItemIcon>
          <ListItemText primary={el.name} />


        </ListItem>)}
        <ListItem>
          {/* Guideline page to be built */}
          <Button
            variant="contained"
            disableGutters={false}
            color="secondary"
            onClick={() => { router(guidelines.path) }}

          >Guidelines</Button>

          {/* Upcoming Event Logic */}
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            border="true"
            disableGutters={false}
            color="primary"

          >Upcoming Event</Button>
        </ListItem>
      </List>
    </div>
  )

  return (
    <div >
      <Drawer open={props.open} onClose={props.onClose} anchor="right">
        {list()}
      </Drawer>
    </div>
  );
};

export default MenuDrawer;
