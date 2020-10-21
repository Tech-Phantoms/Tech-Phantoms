import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



const LandingBottom = (props) =>{
              return(<>
                  <center><Typography variant="h4" padding={5}>What you will learn with us? <br/><br/></Typography></center>
                    <Container>
                        
                  <Grid  container spacing={3} >
                       
                        <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                        <Box textAlign="center"><Typography variant="h6" gutterBottom={true} >   Real world software development <br/> (Code Collaboration)   </Typography>  </Box>  
                                  </Grid>
                                  <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                  <Box textAlign="center">     <Typography variant="h6" gutterBottom={true}  >        Version Control Systems <br/>and Project Boards  </Typography>  </Box> 
                                  </Grid>
                                  <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                  <Box textAlign="center">               <Typography variant="h6" gutterBottom={true}  >             Production Level Code <br/> (Test Cases, Documentation, Software Design)  </Typography>   </Box> 
                                  </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">     <Typography variant="h6" gutterBottom={true}>       Turning software Ideas into code.  <br/>  </Typography>  </Box> 
                                    </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">     <Typography variant="h6" gutterBottom={true}>        Deployment to Cloud Services<br/> (Azure, AWS)  </Typography>  </Box> 
                                    </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">      <Typography variant="h6" gutterBottom={true}>       Static Deployment <br/> (Netlify, Vercel, GitHub Pages)  </Typography>  </Box> 
                                    </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">    <Typography variant="h6" gutterBottom={true}>         Public Speaking skills.  </Typography>  </Box> 
                                    </Grid>
                                    <Grid spacing={5}  item xs={12} sm={12} md={6} lg={6} >
                                    <Box textAlign="center">    <Typography variant="h6" gutterBottom={true}>        Quality Networking  </Typography>  </Box> 
                                    </Grid>
                                
                                
                        </Grid>
                    
                        </Container>
                        </>

              
            
              
              )
         
}

export default LandingBottom;