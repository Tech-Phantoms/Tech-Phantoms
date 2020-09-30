import React from "react";
import { Box, Button, Text } from "@chakra-ui/core";

const MentorForm = () => {
  return (
    <Box
      w="100%"
      fontSize="2xl"
      p={16}
      borderLeftWidth="0.1rem"
      borderLeftColor="#FF6347"
    >
      <Box textAlign="center">
        <Text fontSize="4xl">Be a Mentor</Text>
      </Box>
      <Box
        p={(8, 12, 16, 20)}
        textAlign="center"
        h="70"
       
      >
        <Text fontSize="2xl" >
        We believe in learning by doing. Being a mentor at an open source
        community like Tech Phantoms will help the learners find valuable
        support from you
        </Text>
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
          Be a Mentor
        </Button>
      </Box>
    </Box>
  );
};

export default MentorForm;
