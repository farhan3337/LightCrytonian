import {
  Button,
  HStack,
  Icon,
  Stack,
  Text,
  Flex,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
// import {} from "../../../../public/images/graph.svg"
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
const PriceSection = () => {
  const timestamp = [
    "12:55 AM",
    "01:55 AM",
    "02:55 AM",
    "03:55 AM",
    "04:55 AM",
  ];
  return (
    <CustomCard>
      <Flex justify={"space-between"} align={"start"}>
        <Stack>
          <Text fontSize={"sm"} color={"black.80"}>
            Current Price
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
                $ 22.39401000
              </Text>
              <HStack color={"#059669"}>
                <Icon as={BsArrowUpRight} />
                <Text fontSize={"sm"} fontWeight={"medium"}>
                  0.04%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<AiFillPlusCircle />}>Buy</Button>
          <Button leftIcon={<AiFillMinusCircle />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify={"end"}>
          <TabList bg={"blackAlpha.50"} p={"3px"}>
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize={"sm"}
                p={"6px"}
                borderRadius={"4"}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image width={"100%"} src="/Graph.svg" mt={"75px"} />
            <HStack justify={"space-between"}>
              {timestamp.map((time) => (
                <Text key={"time"} fontSize={"sm"} color={"black.80"}>
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
