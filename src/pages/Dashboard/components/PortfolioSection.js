import React from "react";
import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

const PortfolioSection = () => {
  return (
    <HStack
      bg={"white"}
      borderRadius={"xl"}
      p={"6"}
      justify={"space-between"}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      <HStack
        spacing={{
          base: "0",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDirection={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack fontSize={"14px"} color={"black.80"}>
            <Text>Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle}></Icon>
          </HStack>
          <Text textStyle={"h2"} fontWeight={"medium"}>
            $ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <Text fontSize={"sm"} color={"black.80"}>
            Wallet Balances
          </Text>
          <HStack
            spacing={2}
            gap={"32px"}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDirection={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                22.39401000
              </Text>
              <Tag>BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle={"h2"} fontWeight={"medium"}>
                $ 13000.00
              </Text>
              <Tag>USD</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<BiArrowToBottom />}>Deposit</Button>
        <Button leftIcon={<BiArrowToTop />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
