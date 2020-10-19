import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import "./index.css";
// importing pages 
import Index from './pages/index'
import Team from './pages/team'
import Hacktoberfest from './pages/hacktoberfest'
import Events from './pages/events'
import Projects from './pages/projects'
import Register from './pages/register'

// importing components 
import Navbar from './components/navbar'
import NotFoundPage from './components/PageNotFound' 

function App() {
  return (
    <div>
{/* Routing */}
      <Hidden mdUp>
      <Navbar />
      </Hidden>
      <Switch>
        <Route path="/" exact component={Index} />

        <Route path="/team" exact component={Team} />

        <Route path="/hacktoberfest" exact component={Hacktoberfest} />

        <Route path="/events" exact component={Events} />

        <Route path="/projects" exact component={Projects} />

        <Route path="/register" exact component={Register}/>

        <Route path="*" component={NotFoundPage} />
      </Switch>
      

    </div>
  );
}
// Exporting App
export default App;
