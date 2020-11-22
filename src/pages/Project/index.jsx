import React from 'react';
import { Hidden } from "@material-ui/core/";
import ProjectSection from './sections/projects'
import ContributeSection from './sections/contribute'

import useRepo from './hooks/public.repo';

const Index = (props) => {
    const Navbar = props.navbar
    let repos = useRepo();
    return (
        <div>
            <Hidden smDown>
                <Navbar />
            </Hidden>
            <h1 style={{
                fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI ,Helvetica,Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji , Segoe UI Symbol",
                padding: "0.75rem",
                fontSize: "2.25rem",
                textAlign: "center"
            }}>Our Projects</h1>
            <h3 style={{
                fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                padding: "0.75rem",
                fontSize: "1.5rem",
                textAlign: "center"
            }}>
                Contribute in our Projects
            </h3>
            <p style={{
                fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
                padding: "0.75rem",
                fontSize: "1xl",
                textAlign: "center"
            }}>
                Our Community is always open for new dedicated Contributor
            </p>
            <ProjectSection repos={repos} />
            <ContributeSection />
        </div>
    )
}

export default Index;