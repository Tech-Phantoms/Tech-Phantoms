import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import MemberForm from "../components/forms/member";
import MentorForm from "../components/forms/mentor";

const Register = () => {
  return (
    <div>
      <Flex direction="column" width="100%" mb={4}>
        <Text fontSize="5xl">Join Us</Text>
      </Flex>
      <Flex direction={{"md":"row","lg":"row","xs":"column","sm":"column"}}>
        <MemberForm />
        <MentorForm />
      </Flex>
    </div>
  );
};

export default Register;
