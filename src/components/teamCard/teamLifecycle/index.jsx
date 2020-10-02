import React from 'react';
import { SimpleGrid, Text, Box, Image } from "@chakra-ui/core";


// importing assets.
import Teencode from '../../../assets/lifecycle/teenCode.svg'
import Teencode2 from '../../../assets/lifecycle/teenCode2.svg'
import MLSA from '../../../assets/lifecycle/mlsa.svg'
import Explain from '../../../assets/lifecycle/explain.svg'
import Brand from '../../../assets/lifecycle/brand.svg'
import Vinit from '../../../assets/lifecycle/vinit.svg'
import Kladi from '../../../assets/lifecycle/kladi.svg'

const Lifecycle=()=>{
    //Box width for Text sections
    const adjustedWidth={"xs":"90%","sm":"70%","lg":"50%","md":"50%"};
    // LeftMargin for left side boxes
    const adjustedMarginLBox={"md":"40%","lg":"40%", "xs":"5%","sm":"5%"};
    //LeftMargin for right side boxes.
    const adjustedMarginRBox={"md":"5%","lg":"5%", "xs":"5%","sm":"5%"};
    //Display Image : true for md and lg devices and false for xs and sm devices
    const displayResponsive={"sm":"none","xs":"none", "md":"block", "lg":"block"};
    //Box Background true on xs and sm devices , false on md and lg devices 

return(    
<>
<center padding={3}>
<Text padding={3} fontSize="4xl">Our Story</Text>
<Text padding={3} fontSize="2xl">It dates back to the initial days of Covid 19 Outbreak.  </Text>
<Text padding={3} fontSize="1xl" paddingTop={3}>We Inspire Open Tech Communities </Text>

<SimpleGrid columns={{"md":2,"lg":2,"xs":1,"sm":1,}}>
    <Box  w={adjustedWidth} marginTop={"5%"} alignContent="center" marginLeft={adjustedMarginLBox}>
    Two undergraduate students decided to uplift themselves by building real worlds technology skills. 
    And  took a step ahead of their usual college routines and started working on real things.
    </Box>
    <Box  w="50%" p={4} display={displayResponsive} ><Image display={displayResponsive} src={Teencode}/></Box>

    <Box w="50%" marginTop={"5%"} marginLeft={"40%"} display={displayResponsive} >
        <Image src={Teencode2}    />
        </Box>
    <Box w={adjustedWidth} p={4} marginTop={"5%"} marginLeft={adjustedMarginRBox} >
    Souvik has a great technology mindset and knows most of the practical software development. 
    Abir recognized that he has a good amount of people in his network who can help them out by mentoring.
    </Box>


    <Box  w={adjustedWidth} marginTop={"7%"} alignContent="center" marginLeft={adjustedMarginLBox} >
    With this, Abir decided to reapply for 
    Microsoft Learn Student Ambassadors Programme.
    As he realized, this can help them boost their learning
    </Box>
    <Box   w="50%" p={4} marginTop={"5%"} display={displayResponsive}  ><Image display={displayResponsive} src={MLSA}/> </Box>

    <Box w="50%" marginTop={"5%"} marginLeft={"40%"} ><Image display={displayResponsive} src={Explain}    /></Box>
    <Box   w={adjustedWidth} p={4} marginTop={"5%"}  alignContent="center" marginLeft={adjustedMarginRBox}>
    With this  Souvik decided to contact Tavleen who is phenomenal at branding and content writing. 
    And things were getting sorted up. Abir and Souvik started focussing more on the ideas so that
     they can make community more engaging.
    </Box>

    <Box w={adjustedWidth} marginTop={"7%"}  alignContent="center" marginLeft={adjustedMarginLBox} >
    Abir contact one of his mentor of GSSOC 2020, Vinit Shahdeo and discussed about the plans 
    for the community and here we go.
      <br/><br/><b>Ninja Developers was rebranded to Tech Phantoms</b>
    </Box>
    <Box   w="50%" p={4} marginTop={"5%"} display={displayResponsive}><Image display={displayResponsive} src={Vinit}/> <br/> <b> Vinit Shahdeo, SDE Postman</b> </Box>

    <Box w="50%" marginTop={"10%"} marginLeft={"40%"} display={displayResponsive} ><Image display={displayResponsive} src={Brand}    /></Box>
    <Box   w={adjustedWidth} p={4} marginTop={"10%"}  alignContent="center" marginLeft={adjustedMarginRBox}>
    With development and content minds,  they finally built a whole single page website for Tech Phantoms. (v1)
    <br/><br/>And opened applications for Core Team Selection.
    </Box>

    <Box w={adjustedWidth} marginTop={"10%"} alignContent="center" marginLeft={adjustedMarginLBox} >
    With this, Abir, Souvik and Tavleen had a difficult task to select official members and Core Members for 
positions like social, development, content and design out of 700 applicants.
Heavy reviews, sleepless nights and finally we formed the core team
    </Box>
    <Box   w="50%" p={4} marginTop={"10%"} display={displayResponsive}  ><Image display={displayResponsive}  src={Kladi}/> <br/></Box>



</SimpleGrid>
<Text fontSize="2xl" margin={10}>
With right efforts, anything is possible. Here we are,</Text>
<Text fontSize="5xl" >Tech Phantoms</Text>
(still growing and enriching open source)

</center>
</>
)
}
export default Lifecycle
