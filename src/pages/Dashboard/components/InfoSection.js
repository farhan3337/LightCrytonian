import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

const InfoSection = ({ imageUrl, text, tag, inverted }) => {
  return (
    <CustomCard
      bgImage={imageUrl}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgColor={inverted ? "p.purple" : "white"}
    >
      <Tag
        borderRadius={"full"}
        bg={inverted ? "white" : "p.purple"}
        color={inverted ? "p.purple" : "white"}
      >
        {tag}
      </Tag>
      <Text
        mt={"4"}
        fontWeight={"medium"}
        textStyle={"h5"}
        color={inverted ? "white" : "black"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoSection;
