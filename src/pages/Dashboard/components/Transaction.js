import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaBtc } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";

const Transaction = () => {
  const transactions = [
    {
      id: "1",
      icon: AiFillDollarCircle,
      text: "USD Deposit",
      amount: "+ $81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: AiFillDollarCircle,
      text: "USD Deposit",
      amount: "+ $81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard>
      <Text mb={"6"} fontSize={"sm"} color={"black.80"}>
        Recent Transactions
      </Text>
      <Stack spacing={"4"}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            <Flex key={transaction.id} gap={"4"}>
              <Grid
                bg={"black.5"}
                placeItems={"center"}
                boxSize={10}
                borderRadius={"full"}
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify={"space-between"} w={"full"}>
                <Stack spacing={"0"}>
                  <Text textStyle={"h6"}>{transaction.text}</Text>
                  <Text fontSize={"sm"} color={"black.40"}>
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle={"h6"}>{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
        <Button bg={"#EEEEF4"} color={"black"} _hover={"none"}>
          View All
        </Button>
      </Stack>
    </CustomCard>
  );
};

export default Transaction;
