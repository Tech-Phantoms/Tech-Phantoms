import React from 'react';




import OurStory from './sections/ourstory/index';




const Team = (props) => {
    const Navbar = props.navbar

    return (
        <>           
            <OurStory navbar={Navbar}/>
        </>
    )
}


export default Team;
