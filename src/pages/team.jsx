import React from 'react';


import DisplayTeams from '../components/teamCard/index';
import { team } from '../data/airtable'
import Lifecycle from '../components/teamCard/teamLifecycle/index';




const Team = () => {

    const data = team.useTeam()
    console.log(data)
    return (
        <>
            <Lifecycle/>
       
            <DisplayTeams members={data} />
        </>
    )
}
export default Team;
