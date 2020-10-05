import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Technologies from './technologies'


const LandingBottom = (props) =>{
              return(<>
                  <center><Typography variant="h3" padding={5}>What you will learn with us? <br/><br/></Typography></center>
                    <Container>
                        
                  <Grid  container spacing={3} >
                       
                        <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                        <Box textAlign="center">  Real world software development <br/> (Code Collaboration)     </Box>  
                                  </Grid>
                                  <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                  <Box textAlign="center">         Version Control Systems <br/>and Project Boards</Box> 
                                  </Grid>
                                  <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                  <Box textAlign="center">                        Production Level Code <br/> (Test Cases, Documentation, Software Design) </Box> 
                                  </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">        Turning software Ideas into code.</Box> 
                                    </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">         Deployment to Cloud Services<br/> (Azure, AWS)</Box> 
                                    </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">         Static Deployment <br/> (Netlify, Vercel, GitHub Pages)</Box> 
                                    </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">         Public Speaking skills.</Box> 
                                    </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">        Enriching your network quality and <br/>interacting with potential students and mentors.</Box> 
                                    </Grid>
                                
                                
                        </Grid>
                        <Technologies/>
                        </Container>
                        </>

              
            
              
              )
         
}

export default LandingBottom;