import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';  
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    paperleft:{
        'text-align':"center",
         padding:'20px',
         background:"purple",
         color:'white',
         height:'350px'
    },
    papermiddle:{
        'text-align':"center",
         padding:'20px',
         background:"#FFBF00",
         height:'350px'
    },
    paperright:{
        'text-align':"center",
         padding:'20px',
         background:"#299E7E",
         color:'white',
         height:'350px'
    }
  });

const LandingMiddle = (props) =>{
              
                const classes = useStyles();
                return (
                    <Container>
                    <Grid  container spacing={6} padding={6}>
                         <Grid   item xs={12} sm={12} md={4} lg={4} >
                            <Paper className={classes.paperleft} background="purple"  variant="outlined">  
                            
                               
                                    <Typography variant='h5' line-spacing={5}>
                                    <span role='img' aria-label="rocket" > 🚀 </span> Tech Phantoms
                                    </Typography>
                                    <br/>
                                   
                                   <Typography variant='p' textAlign="center" line-spacing={5}>
                                    We are an open tech community, on a mission to create open source tools and help
                                    young developers pave their way towards open source and learn real world software development. 
                                    
                                    <br />
                                    </Typography>
                                    

                                   
                              
                                </Paper>
                                
                         </Grid>

                         <Grid item xs={12} sm={12} md={4} lg={4} >
                                  
                                    <Paper className={classes.papermiddle} variant="outlined">  
                                    <Typography variant='h5' line-spacing={5}>
                                    We <span role='img' style={{color:"red"}} aria-label="heart"> ❤ </span> Open Source
                                    </Typography>
                                    <br/>
                                  
                                   
                                   <Typography variant='p' textAlign="center" line-spacing={5}>
                                    Open source helps students to get started with real world software development skills including
                                    writing a production code, following best code practices, writing unit test cases, setting up CI/ CD and deploying to various
                                    cloud providers and lot more.

                
                                    </Typography>
                                  

                                   
                                   
                                
                                    </Paper>
                              
                         </Grid>


                         <Grid item xs={12} sm={12} md={4} lg={4} >
                        
                         <Paper className={classes.paperright} variant="outlined">  
                                    <Typography variant='h5' line-spacing={5}>
                                    <span role='img' aria-label="manHand"> 🙋‍♂️ </span> Socially Alive
                                    </Typography>
                                    <br/>
                                  
                                   
                                   <Typography variant='p' textAlign="center" line-spacing={5}>
                                   Making development interactive, we  conduct technical events, posts, and stories with hands on code. 
                                   Along with this, we conduct Microsoft Learn Student Ambassadors to conduct events on our platform. We have dedicated mentors and fully functional core team.
                
                                    </Typography>
                                  

                                   
                                   
                                
                                    </Paper>
                         </Grid>


                    </Grid>
                    </Container>

                );
}

export default LandingMiddle;