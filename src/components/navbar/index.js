import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/core";

import Drawer from "./drawer";

import MenuIcon from "@material-ui/icons/Menu";

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="100%" py={4} px={6}>
      <Flex>
        <Flex flexGrow={1}></Flex>
        <Flex>
          <Box style={{ cursor: "pointer" }}>
            <MenuIcon style={{ color: "white" }}></MenuIcon>
          </Box>
        </Flex>
      </Flex>

      <Drawer open={isOpen} close={onClose} />
    </Box>
  );
};

export default Navbar;
