import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import "./index.css";
// importing pages 
import Home from './pages/home/'
import Team from './pages/team/'

import Hacktoberfest from './pages/hacktoberfest'
import Events from './pages/event'
import Projects from './pages/Project'
import Register from './pages/register'

// importing components 
import Drawer from './components/navbar'
import NotFoundPage from './components/PageNotFound' 
import Navbar from './components/navbar/navbar'
function App() {
  return (
    <div>
{/* Routing */}
      <Hidden mdUp>
      <Drawer />
      </Hidden>
      <Switch>
        <Route 
        path="/" 
        exact 
        render={()=><Home navbar={Navbar}/>}
        />

        <Route 
        path="/team" 
        exact 
        render={()=><Team navbar={Navbar}/>}
        />

        <Route 
        path="/hacktoberfest" 
        exact 
        render={()=><Hacktoberfest  navbar={Navbar}/>}
        />

        <Route 
        path="/events" 
        exact 
        render={()=><Events navbar={Navbar}/>}
        />

        <Route 
        path="/projects" 
        exact 
        render={()=><Projects navbar={Navbar}/>}
        />

        <Route 
        path="/register" 
        exact 
        component={Register}/>

        <Route 
        path="*" 
        render={()=><NotFoundPage navbar={Navbar}/>}
        />
      </Switch>
      

    </div>
  );
}
// Exporting App
export default App;
