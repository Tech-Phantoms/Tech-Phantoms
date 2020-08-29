import React from 'react';
import { Route, Switch } from 'react-router-dom'

// importing pages 
import Index from './pages/index'
import Team from './pages/team'
import Hacktoberfest from './pages/hacktoberfest'

function App() {
  return (
    <div>

      <Switch>
        <Route path="/" exact component={Index} />

        <Route path="/team" exact component={Team} />

        <Route path="/hacktoberfest" exact component={Hacktoberfest} />

      </Switch>

    </div>
  );
}

export default App;
