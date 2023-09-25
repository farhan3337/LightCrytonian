import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { HiMail } from "react-icons/hi";
import { BsFillChatFill } from "react-icons/bs";
import Infosection from "../Dashboard/components/InfoSection";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
      <Stack gap={"80px"}>
        <SupportCard
          rightComponent={<ContactCard />}
          title=" Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
          us."
          icon={HiMail}
        />
        <SupportCard
          rightComponent={
            <Infosection
              imageUrl={"/grid_bg.svg"}
              text={"Chat with us now"}
              tag={"Chatbot"}
              inverted={true}
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
          icon={BsFillChatFill}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
