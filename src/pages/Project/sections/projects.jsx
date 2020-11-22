import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';

import Holder from '../components/holder';

const useStyle = makeStyles(theme => ({
    projList: {
        marginTop: theme.spacing(12)
    }
}))


const Projects = (props) => {
    const classes = useStyle();

    let { repos } = props

    return <>
        <div className={classes.projList} />
        <Container>
            <Grid container spacing={6}>
                {
                    repos.map(el => <Grid item xs={12} sm={6} lg={4} >
                        <Holder
                            created={el.created}
                            repo_name={el.name}
                            language={el.language}
                            issues={el.issues_count}
                            stars={el.stars}
                            description={el.description}
                            issueUrl={el.html_url}
                            key={el.id}
                        />
                    </Grid>)
                }
            </Grid>
        </Container>
    </>
}

Projects.propTypes = {
    repos: PropTypes.object
}

export default Projects