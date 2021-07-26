import { Box, Center, Text, Link } from "@chakra-ui/react";
import React from "react";
import ROUTES from "../../../routes";

function SpecialBanner() {
  return (
    <Center>
    <Link href={ROUTES.socials.apihacks} isExternal>
      <Box
        bgGradient="linear(93.96deg, #ff3D00 -19.25%,#FFE600 72.85%,#FC2FCF 144.15%)"
        h="fit-content"
        w="85%"
        p="2"
        rounded="5"
      >
        <Text color="black" fontWeight="semibold">
          Seasonal Hackathon
        </Text>
        <Text color="black">apihacks.co</Text>
      </Box>
     </Link>
    </Center>
  );
}

export default SpecialBanner;
