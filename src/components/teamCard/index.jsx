import React from "react";
import { SimpleGrid } from "@chakra-ui/core";

import Holder from "./holder";

const DisplayTeams = (props) => {

    return (
        <SimpleGrid spacing={{ "lg": "4", "md": "2", "xs": "5", "sm": "5" }} columns={{ "lg": "3", "md": "2", "xs": "1", "sm": "1" }} justifyContent="center  " paddingTop="50px">
            {
                props.members.map((member) => (
                    <Holder key = {member.id} id={member.id}
                        name={member.get("name")}
                        imageUrl={member.imageUrl}
                        githubUrl={member.get('github_profile')}
                        linkedinUrl={member.get('linkedin_profile')}
                        gender={member.get('gender')}
                        instagramUrl={member.get('instagram_profile')}
                        mediumUrl={member.get('medium_profile')}
                        />
                ))
            }
        </SimpleGrid>

    )


}



export default DisplayTeams;