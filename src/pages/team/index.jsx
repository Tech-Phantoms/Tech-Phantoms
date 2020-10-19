import React from 'react';

import { Hidden } from "@material-ui/core/";

import DisplayTeams from './sections/coremembers/index';
import { team } from '../../data/airtable'
import OurStory from './sections/ourstory/index';




const Team = (props) => {
    const Navbar = props.navbar
    const data = team.useTeam()
    return (
        <>

                <Hidden smDown>
                    <Navbar />
                </Hidden>

            <OurStory />

            <DisplayTeams members={data} />
        </>
    )
}


export default Team;
