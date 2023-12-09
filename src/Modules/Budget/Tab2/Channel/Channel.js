import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { LuFileSearch } from "react-icons/lu";
import { Grey100, White } from "../../../../Styles/Colors";
import { SmallRadius } from "../../../../Styles/Style";

const Channel = ({ channel, handleChannelSelect, selectedChannel }) => {
  return (
    <Button
      key={channel.name}
      onClick={() => handleChannelSelect(channel)}
      width="100%"
      pl="0"
      p=".5rem"
      justifyContent="flex-start"
      borderRadius={"0"}
      bg={selectedChannel?.name === channel.name ? Grey100 : "transparent"}
      _hover={{ bg: Grey100 }}
    >
      <Box
        display={"inline-block"}
        position="relative"
        width="2rem"
        height="2rem"
        bg={"orange"}
        padding=".2rem"
        borderRadius={SmallRadius}
        mr="1rem"
      >
        <LuFileSearch
          size="1.3rem"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          color={White}
        />{" "}
      </Box>{" "}
      {channel.name}
    </Button>
  );
};

export default Channel;
