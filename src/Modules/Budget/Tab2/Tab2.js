import React, { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import { useBudget } from "../../../Context/BudgetContext";
import { Grey700 } from "../../../Styles/Colors";
import { stringWithCommasToNumber } from "../../../Utils/getFormatNumbers";
import BudgetTable from "./BudgetTable/BudgetTable";
import Channel from "./Channel/Channel";

const Tab2 = () => {
  const { channels, updateChannelValueAtIndex } = useBudget();
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [monthlyValues, setMonthlyValues] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (channels && channels.length > 0) {
      setSelectedChannel(channels[0]);
    }
  }, [channels]);

  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
    setEditingIndex(null);
  };

  const handleValueChange = (index, newValue) => {
    if (
      selectedChannel &&
      selectedChannel.budget &&
      selectedChannel.budget.monthlyValues
    ) {
      const newMonthlyValues = [...selectedChannel.budget.monthlyValues];
      newMonthlyValues[index] = newValue;
      setSelectedChannel({
        ...selectedChannel,
        budget: {
          ...selectedChannel.budget,
          monthlyValues: newMonthlyValues,
        },
      });
      setEditingIndex(null);
      updateChannelValueAtIndex(
        selectedChannel,
        index,
        stringWithCommasToNumber(newValue)
      );
    }
  };

  useEffect(() => {
    if (
      selectedChannel &&
      selectedChannel.budget &&
      selectedChannel.budget.monthlyValues
    ) {
      setMonthlyValues(selectedChannel.budget.monthlyValues);
    }
  }, [selectedChannel, channels]);

  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Box
        width={{ base: "100%", md: "25%" }}
        position="relative"
        _after={{
          content: '""',
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "5rem",
          backgroundImage: "linear-gradient(to left, rgba(169,181,210,.1), rgba(112,126,167,0))",
        }}
      >
        <Text mb="1rem" mt=".5rem" color={Grey700} fontWeight={"900"}>
          Channels
        </Text>
        {channels &&
          channels.map((channel) => (
            <Channel
              channel={channel}
              handleChannelSelect={handleChannelSelect}
              selectedChannel={selectedChannel}
            />
          ))}
      </Box>
      <BudgetTable
        handleValueChange={handleValueChange}
        data={monthlyValues}
        editingIndex={editingIndex}
        setEditingIndex={setEditingIndex}
      />
    </Flex>
  );
};

export default Tab2;
