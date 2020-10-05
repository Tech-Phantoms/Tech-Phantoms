import React from 'react'
import { useRepo } from '../../data/hooks'
import Holder from './holder'

import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    projList: {
        marginTop: theme.spacing(12)
    }
}))

const Projects = props => {
    const classes = useStyle()

    const repos = useRepo()
    console.log(repos)

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
                            issues={el.issueCount}
                            stars={el.stars}
                            description={el.description}
                            issueUrl={el.issueUrl}
                            key={el.id}
                        />
                    </Grid>)
                }
            </Grid>
        </Container>
    </>
}

export default Projects
