import React from "react";
import { SimpleGrid } from "@chakra-ui/core";

import Holder from "./holder";

const DisplayTeams = (props) => {

    return (
        <SimpleGrid spacing={{ "lg": "4", "md": "2", "xs": "5", "sm": "5" }} columns={{ "lg": "3", "md": "2", "xs": "1", "sm": "1" }} justifyContent="center  " paddingTop="50px">
            {
                props.members.map((member) => (
                    <Holder id={member.id}
                        name={member.get("name")}
                        imageUrl={member.imageUrl}
                        githubUrl={member.get('github_profile')}
                        linkedinUrl={member.get('linkedin_profile')}
                        gender={member.get('gender')} />
                ))
            }
        </SimpleGrid>

    )


}



export default DisplayTeams;