import Holder from './holder'
import Events from './events'

export { Holder, Events }
=======
// Code for Event Card
import React from 'react'
import {
    Box,
    Image,
    Button,
    SimpleGrid,
    Collapse,
} from '@chakra-ui/core'
import MLSABadge from '../../assets/LightMode_MLSA_Badge.svg'
// Fallback image, when Img src=error / not found
import fallbackEventImage from '../../assets/loader.gif'

const EventHolder =props=>{
                        /*

                        eventNo: Event Serial Number (required)
                        eventImg: Event Image Link (required, default image: https://drive.google.com/file/d/13UqDB73ie5a-2LhF4RpepZdWa4QhPWTz/view)
                        title: Event Title (required)
                        description: Event Description (required)
                        date: Event Date (required)
                        reg_link: Event Register Link (required, can use a default table airtable for this see below 👇)
                        event_recording_link: Event Recording Link (Optional, for past events, can be updated later)
                        eventTime: **Event Time (Time Zone) ** (required)
                        duration: Duration(required)
                        mlsa_event: MLSA Event(Options (yes or no))          
                        rsvp            
                        */
                       const [show, setShow] = React.useState(false);

                       const handleToggle = () => setShow(!show);

    return(
       
        <Box boxShadow="4px 2px 21px 10px #E5E0E0" height={["20%","50%"]} width={["90%","40%","30%"]} paddingTop="15px" maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <center>
            {/* Fallback Image Added, when error in src */}
            <Image fallbackSrc={fallbackEventImage} width={["80%","80%","100%"]} objectFit="contain" src={props.eventImg} alt="event" />
        </center>
        <Box p="6">
{/* Date and Time  */}
<Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="lg"
                textTransform="uppercase"
                ml="2"
                textAlign="center"
                
                
                >
                    {props.date}
               </Box> 
             {/*Event Title  */}
        <center><Box
            mt="1"
            fontWeight="semibold"
            as="h1"
            lineHeight="tight"
            isTruncated
          >
            {props.title}
          </Box></center>
             

        

               <Collapse animateOpacity={true} isOpen={show}>
               <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="lg"
                textTransform="uppercase"
                ml="2"
                textAlign="center"
                paddingBottom="2"
                
                >
                      {props.eventTime}
               </Box> 
        {/* Grid for RSVP and Recording */}
         <SimpleGrid columns={{sm: 1, md: 1,lg: 2}} spacing={2} textAlign="justify">
                {/* RSVP Badge */}
                <Button cursor="pointer" rounded="full" fontSize={20} as="a" px="2" variantColor="teal" target="_blank" variant="outline" href={props.rsvp}>
                          RSVP
                        </Button>

                        
                {/* Recording If Available */}
                        { 
                            props.event_recording_link &&
                            <Button cursor="pointer" rounded="full" fontSize={15} as="a" px="2" variantColor="red" target="_blank" variant="outline" href={props.event_recording_link}>
                            Recording
                            </Button>            
                        } 
          </SimpleGrid>
 
          
        

  {/* Event Description */}
          <Box py={3}>
            <b>Description</b><br/>
            {props.description}
          </Box>
          <Box paddingTop={4}>

  {/* Show MLSA Badge when mlsa_event==true */}
                {
                    props.mlsa_event &&
                    <div>
                            <center><h2>Event By:</h2>
                            <Image rounded={12} width="50%" alt="" src={MLSABadge} py={2}/></center>
                    </div>
                }
          </Box>
          </Collapse><center>
          <Button size="sm" onClick={handleToggle} mt="1rem">
       {show ? "👨‍💻Hide" : "🙋‍♂️More Info"}
      </Button></center>
        </Box>

      </Box>
     
        )

}

