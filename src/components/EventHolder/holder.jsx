// Code for Event Card
import React from 'react'
import {
  Box,
  Image,
  Button,
  SimpleGrid,
  Collapse,
  Text,
  Badge
} from '@chakra-ui/core'
import tt from 'tinytime'
import MLSABadge from '../../assets/LightMode_MLSA_Badge.svg'
// Fallback image, when Img src=error / not found
import fallbackEventImage from '../../assets/loader.gif'


const EventHolder = props => {
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

  return (

    <Box
      boxShadow="1px 4px 6px #E5E0E0"
      paddingTop="15px"
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      cursor="pointer"
    >
      <center>
        {/* Fallback Image Added, when error in src */}
        <Image
          fallbackSrc={fallbackEventImage}
          width={["40%", "40%", "40%"]}
          objectFit="contain"
          src={props.eventImg}
          alt="event"
          onClick={handleToggle}
        />
      </center>
      <Box p="6">

        {/*Event Title  */}
        <Box
          ml="1"
          fontWeight="semibold"
          lineHeight="tight"
          isTruncated
        >
          <Text fontSize="xl" fontWeight="bold">{props.title}</Text>
        </Box>
        <Box
          ml="1"
          fontWeight="semibold"
          lineHeight="tight"
          isTruncated
        >
          {props.mlsa_event && <Badge
            style={{ backgroundColor: '#203A61', color: "white" }}
          >MLSA</Badge>}

        </Box>
        {/* Date and Time  */}
        <Box
          color="gray.500"
          fontWeight="semibold"
          fontSize="lg"
          textTransform="uppercase"
          mt="1"
          ml="1"
        >
          <Text fontSize="sm">{tt('{h}:{mm} {a}').render(new Date(props.date))}</Text>
        </Box>

        <Collapse animateOpacity={true} isOpen={show}>

          {/* Grid for RSVP and Recording */}
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={2} textAlign="justify">


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
            <b>Description</b><br />
            {props.description}
          </Box>
          <Box paddingTop={4}>

            {/* Show MLSA Badge when mlsa_event==true */}
            {
              props.mlsa_event &&
              <div>
                <center><h2>Event By:</h2>
                  <Image rounded={12} width="50%" alt="" src={MLSABadge} py={2} /></center>
              </div>
            }
          </Box>
        </Collapse>

        <Box
          ml="1"
          mt="3"
          fontWeight="semibold"
          lineHeight="tight"
          isTruncated
        >
          <SimpleGrid columns={2} spacing={2}>
            <Box>
              <a target="blank" href={props.reg_link}>
                <Button
                  variant="outline"
                >Check out</Button>
              </a>
            </Box>

          </SimpleGrid>
        </Box>
      </Box>

    </Box>

  )

}

export default EventHolder