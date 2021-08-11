import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import colors from "../../../colors";
function Announcements() {
  const [ann, setAnn] = useState([]);
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    fetch(process.env.REACT_APP_API_URL, { method: "GET" })
      .then((res) => res.json())
      .then((response) => setAnn(response))
      .catch((err) => console.log(err));
  };

  return (
    <Box
      borderWidth="1px"
      borderColor={colors.borderStroke}
      bg={colors.secondaryDark}
      h="50vh"
      ml={6}
      mt={6}
      w="70%"
      minW="20vw"
      maxW="27vw"
    >
      <Flex>
        <Heading m={4} as="h4" size="md" color={colors.headings}>
          Announcements
        </Heading>
      </Flex>
      {ann.map((val) => {
        return (
          <Box m={2} align="center">
            <Link href={val.link} target="_blank">
              <Text isTruncated>{val.title}</Text>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default Announcements;
