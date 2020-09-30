import React from "react";
import { Flex } from "@chakra-ui/core";
import MemberForm from "../components/forms/member";
import MentorForm from "../components/forms/mentor";

const Register = () => {
  return (
    <div>
      <Flex direction="column" width="100%" mb={4}>
        <center>
          <span style={{ fontSize: 50 }}>Join Us</span>
        </center>
      </Flex>
      <Flex direction="row">
        <MemberForm />
        <MentorForm />
      </Flex>
    </div>
  );
};

export default Register;
