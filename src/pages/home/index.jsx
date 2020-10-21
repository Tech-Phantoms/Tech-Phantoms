import React from "react";
import { LandingTop, LandingMiddle, LandingBottom, Social } from "./sections";

const Home = (props) => {

const Navbar=props.navbar

return(
    <>
      <LandingTop navbar={Navbar}/> 
      <Social />
      <LandingMiddle />
      <LandingBottom />
    </>)

};

export default Home;
