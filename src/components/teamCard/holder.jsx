import React from "react";
import { Box, Image, Text, Flex, Link } from "@chakra-ui/core";
import styles from './style.module.css';
import Female from "../../assets/team/_person.svg";
import Male from "../../assets/team/person.svg";
import GitHub from "../../assets/team/github_.svg";
import Linkedin from "../../assets/team/linkedin.svg";
import Instagram from "../../assets/team/instagram.svg";
import Medium from "../../assets/team/medium.svg"
const Holder=(props)=>{
    const {
        name,
        imageUrl,
        githubUrl,
        linkedinUrl,
        gender,
        instagramUrl,
        mediumUrl
      } = props;
      return (
        <Box margin={{"md":"40px"}} className={styles.container} >
          <Flex className={styles.flexContainer}>
            <Image
              fallbackSrc={gender === "male" ? Male : Female}
              src={imageUrl}
              alt={name}
              rounded="full"
              size="150px"
            />
  
            <Text className={styles.name}>
              {name}
            </Text>
  
            <Flex className={styles.linkFlex}>
              {
                githubUrl &&
                <Link href={githubUrl} isExternal>
                <Image src={GitHub} alt="GitHub" size="36px" />
              </Link>
              
              }
             
  
              <Link href={linkedinUrl} isExternal>
                <Image src={Linkedin} alt="Linkedin" size="32px" />
              </Link>
              {
                instagramUrl &&
              <Link href={instagramUrl} isExternal>
                <Image src={Instagram} alt="Instagram" size="32px" />
              </Link>
              }
              {
                mediumUrl &&
              <Link href={mediumUrl} isExternal>
                <Image src={Medium} alt="Instagram" size="32px" />
              </Link>
              }
            </Flex>
          </Flex>
        </Box>
      );
}

export default Holder;