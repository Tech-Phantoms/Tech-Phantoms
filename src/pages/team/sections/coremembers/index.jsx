import React from "react";
import { Grid } from '@material-ui/core/';
import PropTypes from 'prop-types';
import Holder from "../../components/holder/holder";

const DisplayTeams = (props) => {

    return (

        <Grid container>

            {
                props.members.map((member) => (
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Holder id={member.id}
                            name={member.get("name")}
                            imageUrl={member.get('avatar_url')}
                            githubUrl={member.get('github_profile')}
                            linkedinUrl={member.get('linkedin_profile')}
                            gender={member.get('gender')}
                            instagramUrl={member.get('instagram_profile')}
                            mediumUrl={member.get('medium_profile')}
                            position={member.get('position')}
                        />
                    </Grid>
                ))
            }

        </Grid>


    )


}

DisplayTeams.propTypes = {
    members: PropTypes.array
}


export default DisplayTeams;
