import React from 'react';
import { Typography, Grid, Box} from "@material-ui/core/";
import Placeholder from './placeholder.svg'
/* fixed */
const creatorsData = [
    {
        img: {Placeholder},
        name: 'Souvik De',
        subtagline: 'Community and Dev Lead',
    },
    {
        img: {Placeholder},
        name: 'Abir Pal',
        subtagline: 'Community and Dev Lead',
    },
    {
        img: {Placeholder},
        name: 'Vinit Shahdeo',
        subtagline: 'Core Mentor and SDE Postman',
    }
]
const Creators = (props) => {
    return (
        <>
            {
                creatorsData.map((creator) => (
                    <Grid container spacing={15}>
                        <Box width="100%" border={2} marginTop={4} marginBottom={1} padding={1}>
                            <Grid item md={4} lg={4} xs={4} sm={4}>
                                <img alt={creator.name} src={Placeholder}  width="30%"/>
                            </Grid>
                            <Grid container md={8} lg={8} xs={8} sm={8}>
                               
                                    <Grid item md={12} lg={12} xs={12} sm={12}>
                                        <Typography variant="h6">
                                            {creator.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={12} lg={12} xs={12} sm={12}>
                                        <Typography variant="h6">
                                            {creator.subtagline}
                                        </Typography>
                                    </Grid>
                                
                            </Grid>
                        </Box>
                    </Grid>
                )
                )
            }
        </>



    )




}
export default Creators;