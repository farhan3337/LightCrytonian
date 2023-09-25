import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
const SupportCard = ({ rightComponent, title, icon, text }) => {
  return (
    <Flex
      justify={"space-between"}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxWidth={"386px"}>
        <Icon as={icon} boxSize={"6"} color={"p.purple"} />
        <Text as={"h1"} textStyle={"h1"} fontWeight={"medium"}>
          {title}
        </Text>
        <Text fontSize={"sm"} color={"#535D66"}>
          {text}
        </Text>
      </Stack>

      <Box width={"full"} maxWidth={"550px"}>
        {rightComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
