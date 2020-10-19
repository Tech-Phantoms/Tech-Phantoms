import React from 'react';


import DisplayTeams from './coremembers/index';
import { team } from '../../data/airtable'
import OurStory from './ourstory/index';




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
