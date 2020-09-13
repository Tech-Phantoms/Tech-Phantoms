import React from 'react';
import { Text } from "@chakra-ui/core";
import DisplayTeams from '../components/teamCard/index';
import { team } from '../data/airtable'




const Team = () => {

    const data = team.useTeam()
    console.log(data)
    return (
        <>
            <center><Text fontSize="6xl" align="center"> Ones who made it possible ! </Text></center>
            <DisplayTeams members={data} />
        </>
    )
}
export default Team;
