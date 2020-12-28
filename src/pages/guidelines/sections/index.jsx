import React from 'react'
import { Typography, Grid, Hidden, makeStyles, Paper } from '@material-ui/core'

const useStyle = makeStyles({
    container: {
        padding: '20px',
    },
    headingstyles: {
        background: 'tomato',
        padding: '10px'
    },
    report: {
        background: 'black',
        color: 'lightgreen',
        '&:a': {
            color: 'white'
        },
    },
    content: {
        padding: '20px',
    },
    a: {
        fontSize: '18px',
        color:'#b19cd9',
        wordWrap:'break-word'
    }
})

const Guidelines = (props) => {
    const Navbar = props.navbar;
    const classes = useStyle();

    return (<div>
        <Hidden mdDown>
            <Navbar />
        </Hidden>
        <div className={classes.container} >
            <center>
                <Grid alignContent="center" container>
                    <Grid item xs={12} md={12} sm={12} lg={12}>
                        <Typography variant="h4" gutterBottom="true">
                            Tech Phantoms is an Open Source Organization.
                </Typography>
                        <Paper className={classes.report}> <Typography gutterBottom="true" variant="h6" margin={5}>
                            If any voilations or harrasment faced,
               please take a step ahead and report it to us:<br />
                            <Typography gutterBottom="true">
                                <a className={classes.a} href="mailto:opensource@techphantoms.tech">
                                    opensource@techphantoms.tech</a>
                            </Typography>
                        </Typography></Paper>
                        <Typography gutterBottom="true" variant="h6" margin={5}>
                            We intend to create an inclusive environment for everyone, regardless of ethnicity, religion, skin color, national origin, age, disability, sexual orientation, gender identity, parental status, marital status and political belonging as well as gender-specific expression, mental illness, socio-economic status or background. We are united by these values and uphold our unique differences.
                </Typography>
                        <Typography gutterBottom="true" className={classes.content} variant="h6"> <Typography variant="h4" gutterBottom="true" className={classes.headingstyles}>  Introduction  </Typography>
We are dedicated to providing a harassment free experience for everyone, and we do not tolerate harassment of participants in any form. We ask you to be considerate of others and behave professionally and respectfully to all other participants.

This code and related procedures also apply to unacceptable behavior occurring outside the scope of community activities, in all community venues— online and in-person— as well as in all one-on-one communications, and anywhere such behavior has the potential to adversely affect the safety and well-being of community members.

Admins, Mentors, Contributers are subject to these Community Guidelines and Code of Conduct.

Diversity and inclusion make us strong. We encourage participation from the most varied and diverse backgrounds possible and want to be very clear about where we stand.

Our goal is to maintain a safe, helpful and friendly community for everyone, regardless of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, nationality, or other protected categories under applicable law.


<Typography variant="h4" gutterBottom="true" className={classes.headingstyles}>EXPECTED BEHAVIOR </Typography>
Don't just support your colleagues on demand, be proactive. Offer your help if you notice that a team member is struggling with a problem or otherwise needs help. Be careful not to be too patronizing or disrespectful. When someone turns to you for help, always be open, listen and try to put yourself in the position of your counterpart. If you don't have time because of a deadline, let the person know and tell them openly when you have time or maybe refer a team member who is just as familiar with the topic.

You are expected to be thoughtful and considerate towards others. In this way we contribute to a collaborative, positive and healthy environment in which the team must:

Be inclusive
Be collaborative
Be professional
Be responsible
Be honest
Be welcoming
Be kind
Be respectful of other viewpoints and ideas
Be supportive and look out for each other
<Typography variant="h4" gutterBottom="true" className={classes.headingstyles}>REPORT A PROBLEM</Typography>
The worst thing that can happen is someone keeps quiet when there are problems. There are a number of things that you can do to resolve conflicts and problems as best you can
because we take incidents regarding the topics mentioned very seriously. We are always there for you to discuss any problem and
together we will find out what steps we need to take next to solve the problem maintaining the confidentiality.
 <br/><a className={classes.a} href="mailto:opensource@techphantoms.tech">
                                    opensource@techphantoms.tech</a><br />
                            <br />
                            <Typography variant="h4" gutterBottom="true" className={classes.headingstyles}>REPORTING</Typography>

If you are the subject of, or witness to any violations of this Code of Conduct, please contact us by submitting an incident report, or email us at:
 <a  className={classes.a}  href="mailto:opensource@techphantoms.tech">opensource@techphantoms.tech </a>.
Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.
If necessary,Admins are empowered to take appropriate actions that may include, but are not limited to, warnings, expulsion from the conference without refund, and referrals to venue security or local law enforcement.
</Typography>

                    </Grid>

                </Grid>
            </center></div>
    </div>
    )
}
export default Guidelines