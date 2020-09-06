// Code for Event Card
import React from 'react'
import {
    Box,
    Link,
    Badge,
    Image,
    Button
} from '@chakra-ui/core'
import MLSABadge from '../../assets/LightMode_MLSA_Badge.svg'
// Fallback image, when Img src=error / not found
const fallbackEventImage='https://lh5.googleusercontent.com/ViAkyJuSp8ojaVAFcBAL_SYySe09zlFojlu3EKzpOEyGND7miyL7ecsngzYTmnkf22YvoEYucC2hDw=w1921-h940-rw'

const EventHolder =props=>{
                        /*
                        eventNo: Event Serial Number (required)
                        eventImg: Event Image Link (required, default image: https://drive.google.com/file/d/13UqDB73ie5a-2LhF4RpepZdWa4QhPWTz/view)
                        eventTitle: Event Title (required)
                        eventDesc: Event Description (required)
                        eventDate: Event Date (required)
                        eventReg: Event Register Link (required, can use a default table airtable for this see below 👇)
                        eventRec: Event Recording Link (Optional, for past events, can be updated later)
                        eventTime: **Event Time (Time Zone) ** (required)
                        eventDuration: Duration(required)
                        mlsaEvent: MLSA Event(Options (yes or no))          
                        eventRSVP            
                        */


    return(

        <Box height={["100%","50%"]} width={["90%","40%","30%"]} paddingTop="15px" maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <center>
            {/* Fallback Image Added, when error in src */}
            <Image fallbackSrc={fallbackEventImage}   objectFit="cover" src={props.eventImg} alt="event" />
        </center>
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            
            {/* RSVP Badge */}
            <Button as="a" px="2" variantColor="teal" target="_blank" variant="outline" href="https://chakra-ui.com">
              RSVP
            </Button>


            <Badge rounded="full" px="2" variantColor="teal">
            <Link fontSize={20} target="blank" href={props.eventRSVP}>RSVP</Link>            
            </Badge>

            {/* Date and Time  */}
            <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
           &bull; {props.eventDate}<br/> &bull; {props.eventTime}
          </Box>
          </Box>

  {/*Event Title  */}
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.eventTitle}
          </Box>

  {/* Event Description */}
          <Box>
            {props.eventDesc}
          </Box>
          <Box paddingTop={4}>


  {/* Show MLSA Badge when mlsaEvent==true */}
                {
                    props.mlsaEvent &&
                    <div>
                            <h2>Event By:</h2>
                            <img width="50%" alt="" src={MLSABadge}/>
                    </div>
                }
          </Box>
        </Box>
      </Box>
        )

}
export default EventHolder;