import React from "react";
import Sidenav from "../../src/components/Sidenav";
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import Topnav from "../../src/components/Topnav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "none",
          lg: "none",
        }}
      >
        <Sidenav />
      </Box>
      <SideDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <Box flexGrow={1}>
        <Topnav title={title} onOpen={onOpen} />
        <Container mt="6" maxW="70rem" pb={"6"}>
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
