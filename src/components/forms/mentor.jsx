import React from "react";
import { Box, Button } from "@chakra-ui/core";

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
        <span style={{ fontSize: 40 }}>Be a Mentor</span>
      </Box>
      <Box
        p={(8, 12, 16, 20)}
        textAlign="center"
        h="70"
        fontSize={[20, 25, 27.5, 30]}
      >
        We believe in learning by doing. Being a mentor at an open source
        community like Tech Phantoms will help the learners find valuable
        support from you
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
