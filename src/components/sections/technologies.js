import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper';  

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import items from '../../data/technologies.js'


// importing images


const useStyles = makeStyles({
  
  marginTop:{
        marginTop:'100px'
        
    },
  
  });

const Technologies = (props) =>{
    const classes=useStyles();
              return(<>
                  <center>
                      <Typography className={classes.marginTop} variant="h3" padding={5}>They make us Phenomenal</Typography>
                    <br/>  <Typography variant="p">We belive in learning by doing.<br/>
                      Upto now we have worked in following technologies. <br/><br/> Still Learning and Inspiring :)<br/><br/><br/><br/></Typography>
                  </center>
                    <Container>
                    <Carousel indicators={false} autoPlay={true} interval={2500}>
                        {
                            items.map( (item, i) => <Item key={i} item={item} /> )
                        }
                    </Carousel>
                
                    </Container>
                        </>

              
            
              
              )
         
}

export default Technologies;


function Item(props)
{
    return (
        <Paper styles={{'background':'black'}}>
            <Grid container>
            <Grid item xs={12} sm={12} lg={6} md={6}  style={{paddingRight:'15px'}}>
                <img src={props.item.image} alt="imagetitle"/> 
            </Grid>
            <Grid item xs={12} sm={12} lg={6} md={6} spacing={4} style={{padding:'10px'}} >
                <Typography variant="h3">{props.item.technology}</Typography> <br/>
                <Typography variant="p">{props.item.description}</Typography> 
            </Grid>
           
           
           </Grid>
        </Paper>
    )
}