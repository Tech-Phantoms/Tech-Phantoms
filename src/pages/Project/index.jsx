import React from 'react';

import ProjectSection from './sections/projects'

const Index = () => {

    return (
        <div>
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
            <ProjectSection />
        </div>
    )
}

export default Index;