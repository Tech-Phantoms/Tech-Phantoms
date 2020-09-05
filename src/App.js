import React from 'react';
import { Route, Switch } from 'react-router-dom'
import "./index.css";
// importing pages 
import Index from './pages/index'
import Team from './pages/team'
import Hacktoberfest from './pages/hacktoberfest'
import Events from './pages/events'

//routes just for preview purpose
import MainLanding from './components/landing_page/main_landing' 



// importing components 
import Navbar from './components/navbar'


function App() {
  return (
    <div>

      <Navbar />

      <Switch>
        <Route path="/" exact component={Index} />

        <Route path="/team" exact component={Team} />

        <Route path="/hacktoberfest" exact component={Hacktoberfest} />

        <Route path="/events" exact component={Events} />


         {/*routes for preview purpose*/}
        <Route path ="/landing" exact component={MainLanding}/>  
       

      </Switch>
      

    </div>
  );
}

export default App;
