import React from "react";
import { LandingTop, LandingMiddle, LandingBottom, Social} from "./sections";

const Home = (props) => {

const Navbar=props.navbar

return(
    <>
      <LandingTop navbar={Navbar}/> 
      <LandingMiddle />
      <LandingBottom />
      <Social />
    </>)

};

export default Home;
