import React from "react";
import { Box, HStack, Heading, Icon, Stack } from "@chakra-ui/react";
import { RiDashboardLine } from "react-icons/ri";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RiDashboardLine,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <Stack
      h={"95vh"}
      width={{
        base: "full",
        lg: "256px",
      }}
      gap={"24px"}
      justify={"space-between"}
      bg={"white"}
    >
      <Box>
        <Heading
          fontSize={"20px"}
          as={"h1"}
          pt={"54px"}
          pl={"28px"}
          mb={"10px"}
          color={"#5F00D9"}
        >
          Light Cryptonian
        </Heading>
        <Box mx={"12px"}>
          {navLinks.map((nav) => (
            <HStack
              py={"12px"}
              px={"16px"}
              _hover={{ bg: "#F3F3F7", color: "#171717" }}
              color={"#797E82"}
              borderRadius={"10px"}
            >
              <Icon as={nav.icon} />

              <Link fontSize={"14px"} fontWeight={"medium"} to={`${nav.link}`}>
                {nav.text}
              </Link>
            </HStack>
          ))}
        </Box>
      </Box>

      <Box mx={"12px"} mb={"6"}>
        <HStack
          py={"12px"}
          px={"16px"}
          _hover={{ bg: "#F3F3F7", color: "#171717" }}
          color={"#797E82"}
          borderRadius={"10px"}
        >
          <Icon as={BiSupport} />
          <Link fontSize={"14px"} fontWeight={"medium"} to={"/support"}>
            Support
          </Link>
        </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
