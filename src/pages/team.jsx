import React, { Component } from 'react';
import TeamCard from '../components/teamCard';
import {SimpleGrid, Heading} from "@chakra-ui/core";
import Female from "../assets/team/_person.svg";
import Male from "../assets/team/person.svg";

class Team extends Component {
    state={
    people:[
        {   
            id:1,
            name: 'Abir Pal',
            imageUrl: Male,
            githubUrl: '',
            linkedinUrl: '',
            gender: 'male',
        },
        {   
            id:2,
            name: 'Garima Singh',
            imageUrl: Female,
            githubUrl: '',
            linkedinUrl: '',
            gender: 'female',
        },
        {   
            id:3,
            name: 'Joshua Poddoku',
            imageUrl: Male,
            githubUrl: '',
            linkedinUrl: '',
            gender: 'male',
        },
    ]
}
    
    render() { 
        return (<> 
            <Heading fontFamily="Montserrat" as="h1" color="tomato"  marginBottom="40px" fontSize="3.8rem" textAlign="center">
                Meet Our Team
            </Heading>
            <SimpleGrid columns={[1, 2, 3]} spacing="30px" marginLeft="15px" marginRight="15px" >
                { this.state.people.map(person => (
				    <TeamCard key={person.id} people={person}  />
			    ))}
            </SimpleGrid>
            </>
         );
    }
}
 
export default Team;