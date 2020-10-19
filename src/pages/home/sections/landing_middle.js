import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';  
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root:{
marginBottom:'15vh',
marginTop:'10%',
  },
    paperleft:{
        'text-align':"center",
         padding:'20px',
         background:"black",
         color:'lightgreen',
         height:'350px',
         boxShadow:'5px 10px green',
         fontFamily:'consolas',
      },
    papermiddle:{
        'text-align':"center",
         padding:'20px',
         background:"#FFBF00",
         height:'350px',
         boxShadow:'5px 10px tomato',
         fontFamily:'consolas',
    },
    paperright:{
        'text-align':"center",
         padding:'20px',
         background:"#071D55",
         color:'white',
         height:'350px',
         boxShadow:'5px 10px #5484FF',
         fontFamily:'consolas',
    }
   
    
  
  });

const LandingMiddle = (props) =>{
              
                const classes = useStyles();
                return (
                    <Container className={classes.root}>
                    <Grid  container spacing={6} padding={6}>
                         <Grid   item xs={12} sm={12} md={4} lg={4} >
                            <Paper square elevation={24}  Wrap className={classes.paperleft} background="purple"  variant="elevation">  
                            
                               
                                    <Typography variant='h5' line-spacing={5}>
                                    <span role='img' aria-label="rocket" > 🚀 </span> Tech Phantoms
                                    </Typography>
                                    <br/>
                                   
                                   <Typography variant='p' textAlign="center" line-spacing={5}>
                                    We are an open tech community, run by CS Undergrads who are on a mission to create open source tools and help
                                    young developers pave their way towards open source and learn <b>real world software development. </b>
                                    <br/>
                                    </Typography>
                                    

                                   
                              
                                </Paper>
                                
                         </Grid>

                         <Grid item xs={12} sm={12} md={4} lg={4} >
                                  
                                    <Paper square Wrap className={classes.papermiddle} variant="outlined">  
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
                        
                         <Paper square className={classes.paperright} variant="outlined">  
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