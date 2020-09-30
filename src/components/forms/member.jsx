import React from "react";
import { Box, Button, Text } from "@chakra-ui/core";

const MemberForm = () => {
  return (
    <Box d="flex" flexDirection="column">
    <Box
      w="100%"
      fontSize="2xl"
      p={[2, 4, 8, 16]}
      borderRightWidth="0.1rem"
      borderRightColor="#FF6347"
    >
      <Box textAlign="center" fontSize="4xl">
        <Text fontSize="4xl" >Be a Member</Text>
      </Box>
      <Box
        p={(8, 12, 16, 20)}
        textAlign="center"
        h="70"
      >
        <Text fontSize="2xl" >
        Being an official member at Tech Phantoms will help you get insights of{" "}
        <strong>events</strong>, <strong>meetups</strong> and other{" "}
        <strong>future open source projects</strong> Tech Phantoms is planning
        to work on
         </Text>
      </Box>

    </Box>
    <Box textAlign="center">
        <Button
          alignContent="center"
          background="#FF6347"
          color="white"
          _hover={{
            background: "white",
            color: "#FF6347",
          }}
        >
          Join as Member
        </Button>
    </Box>
    </Box>
  );
};

export default MemberForm;
