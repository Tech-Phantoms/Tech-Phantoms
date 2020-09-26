import React from 'react';
import { Route, Switch } from 'react-router-dom'

import "./index.css";
// importing pages 
import Index from './pages/index'
import Team from './pages/team'
import Hacktoberfest from './pages/hacktoberfest'
import Events from './pages/events'
import Projects from './pages/projects'


// importing components 
import Navbar from './components/navbar'


function App() {
  return (
    <div>
{/* Routing */}
      <Navbar />

      <Switch>
        <Route path="/" exact component={Index} />

        <Route path="/team" exact component={Team} />

        <Route path="/hacktoberfest" exact component={Hacktoberfest} />

        <Route path="/events" exact component={Events} />

        <Route path="/projects" exact component={Projects} />
      </Switch>
      

    </div>
  );
}
// Exporting App
export default App;
