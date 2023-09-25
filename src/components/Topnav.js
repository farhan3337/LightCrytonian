import React from "react";
import {
  Box,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px={"4"} bg={"white"}>
      <HStack
        maxWidth={"1080px"}
        h={"16"}
        justify={"space-between"}
        mx={"auto"}
        px={"4"}
      >
        <Icon
          cursor={"pointer"}
          as={GiHamburgerMenu}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "block",
          }}
        />
        <Heading fontWeight={"medium"} fontSize={"28px"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaRegUserCircle} fontSize={"28px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
