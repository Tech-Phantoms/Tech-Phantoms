import React from 'react';
import {Text} from "@chakra-ui/core";
import Female from "../assets/team/_person.svg";
import Male from "../assets/team/person.svg";
import DisplayTeams from '../components/teamCard/index';




const Team=()=>{
const members={
    list:[ 
        
        {   
            id:1,
            name: 'Souvik De',
            imageUrl: Male,
            githubUrl: '',
            linkedinUrl: '',
            gender: 'male',
        },
        {   
            id:2,
            name: 'Vinit Shahdeo',
            imageUrl: Male,
            githubUrl: '',
            linkedinUrl: '',
            gender: 'male',
        },
        {   
            id:3,
            name: 'Abir Pal',
            imageUrl: Male,
            githubUrl: '',
            linkedinUrl: '',
            gender: 'male',
        },
      
        {   
            id:4,
            name: 'Tavleen',
            imageUrl: Female,
            githubUrl: '',
            linkedinUrl: '',
            gender: 'Female',
        },
        {   
            id:5,
            name: 'Garima Singh',
            imageUrl: Female,
            githubUrl: '',
            linkedinUrl: '',
            gender: 'female',
        },
        {   
            id:6,
            name: 'Joshua Poddoku',
            imageUrl: Male,
            githubUrl: '',
            linkedinUrl: '',
            gender: 'male',
        },
    ]
}
return(
    <>
    <center><Text fontSize="6xl" align="center"> Ones who made it possible ! </Text></center>
        <DisplayTeams members={members}/>
    </>
)
}
export default Team;
