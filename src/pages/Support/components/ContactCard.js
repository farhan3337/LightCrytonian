import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card
      p={"6"}
      gap={"32px"}
      borderRadius={"16px"}
      mt={{
        base: "20px",
      }}
    >
      <Text fontSize={"sm"} fontWeight={"medium"}>
        You will receive response within 24 hours of time of submit.
      </Text>
      <HStack
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Name" />
        </FormControl>
        <FormControl>
          <FormLabel>Surname</FormLabel>
          <Input type="text" placeholder="Surname" />
        </FormControl>
      </HStack>

      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Enter Your Email" />
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Enter Your Message" />
      </FormControl>
      <Checkbox>
        I agree with
        <Box as="span" color={"p.purple"} fontWeight={"medium"}>
          {" "}
          Terms & Conditions.
        </Box>
      </Checkbox>
      <Stack>
        <Button>Send a Message</Button>
        <Button bg={"#EEEEF4"} color={"black"} _hover={"none"}>
          Book a Meeting
        </Button>
      </Stack>
    </Card>
  );
};

export default ContactCard;
