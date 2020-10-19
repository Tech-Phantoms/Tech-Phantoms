import React from 'react';


import DisplayTeams from './sections/coremembers/index';
import { team } from '../../data/airtable'
import OurStory from './sections/ourstory/index';




const Team = () => {

    const data = team.useTeam()
    console.log(data)
    return (
        <>
            <OurStory/>
       
            <DisplayTeams members={data} />
        </>
    )
}
export default Team;
