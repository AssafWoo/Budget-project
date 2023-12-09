import React, { createContext, useState, useContext, useCallback, useMemo } from "react";
import { useCustomToast } from "../Hooks/useCustomToast";
import { sumArray } from "../Utils/getArraySum";
import { allocationOptions, frequencyOptions } from "../Constants/SelectOptions";

const BudgetContext = createContext();

export const useBudget = () => useContext(BudgetContext);

export const BudgetProvider = ({ children }) => {
  const [channels, setChannels] = useState([
    {
      name: "Paid reviews",
      budget: {
        frequency: frequencyOptions[0],
        budgetAllocation: allocationOptions[0],
        baselineBudget: 12000,
        monthlyValues: new Array(12).fill(1000),
        quarterlyValues: new Array(4).fill(3000),
      },
    },
  ]);
  const showToast = useCustomToast();

  const handleAddChannel = useCallback((newChannelName) => {
    setChannels((prevChannels) => [
      ...prevChannels,
      {
        name: newChannelName,
        budget: {
          frequency: frequencyOptions[0],
          budgetAllocation: allocationOptions[0],
          baselineBudget: 12000,
          monthlyValues: new Array(12).fill(1000),
          quarterlyValues: new Array(4).fill(3000),
        },
      },
    ]);
    showToast("Channel added", `${newChannelName} has been added.`, "success");
  },[showToast]);

  const handleUpdateChannel = useCallback((channel, newName) => {
    setChannels((prevChannels) =>
      prevChannels.map((c) => (c === channel ? { ...c, name: newName } : c))
    );
    showToast(
      "Channel updated",
      `Channel name changed to ${newName}.`,
      "success"
    );
  },[showToast]);

  const handleDeleteChannel = useCallback((channel) => {
    setChannels((prevChannels) => prevChannels.filter((c) => c !== channel));
    showToast(
      "Channel deleted",
      `Channel ${channel.name} has been removed.`,
      "success"
    );
  },[showToast]);


  const handleBudgetChange = useCallback((channelName, index, value, type) => {
    setChannels((prevChannels) =>
      prevChannels.map((channel) => {
        if (channel.name === channelName) {
          const newValues = [...channel.budget[type]];
          newValues[index] = Number(value);
          const totalSum = sumArray(newValues);
          return {
            ...channel,
            budget: {
              ...channel.budget,
              [type]: newValues,
              baselineBudget: totalSum,
            },
          };
        }
        return channel;
      })
    );
  },[]);

  const handleFormChange = useCallback((channelName, key, value) => {
    setChannels((prevChannels) =>
      prevChannels.map((channel) => {
        if (channel.name === channelName) {
          return {
            ...channel,
            budget: {
              ...channel.budget,
              [key]: value,
            },
          };
        }
        return channel;
      })
    );
  },[]);

  const updateBudgetAllocation = useCallback((channelName) => {
    setChannels((prevChannels) =>
      prevChannels.map((channel) => {
        if (channel.name === channelName) {
          const budget = channel.budget || {};
          const { budgetAllocation, frequency, baselineBudget } = budget;
          if (budgetAllocation === "Equal") {
            const newValues =
              frequency === "Quarterly"
                ? new Array(4).fill(baselineBudget)
                : new Array(12).fill(
                    frequency === "Annually"
                      ? baselineBudget / 12
                      : baselineBudget
                  );
            const valuesKey =
              frequency === "Quarterly" ? "quarterlyValues" : "monthlyValues";
            return {
              ...channel,
              budget: {
                ...channel.budget,
                [valuesKey]: newValues,
              },
            };
          } else if (budgetAllocation === "Manual") {
            const valuesKey =
              frequency === "Quarterly" ? "quarterlyValues" : "monthlyValues";
            const totalSum = sumArray(channel.budget[valuesKey]);
            return {
              ...channel,
              budget: {
                ...channel.budget,
                baselineBudget: totalSum,
              },
            };
          }
        }
        return channel;
      })
    );
  },[]);


  const updateChannelValueAtIndex = useCallback((channel, index, newValue) => {
    setChannels((prevChannels) =>
      prevChannels.map((prevChannel) => {
        if (
          prevChannel.name === channel.name &&
          Array.isArray(prevChannel.budget.monthlyValues)
        ) {
          const updatedChannel = { ...prevChannel };
          updatedChannel.budget.budgetAllocation = "Manual";
          updatedChannel.budget = { ...prevChannel.budget };
          updatedChannel.budget.monthlyValues = [...prevChannel.budget.monthlyValues];
          updatedChannel.budget.monthlyValues[index] = newValue;
          const totalSum = updatedChannel.budget.monthlyValues.reduce(
            (a, b) => a + b,
            0
          );
          updatedChannel.budget.baselineBudget = totalSum;
          return updatedChannel;
        }
        return prevChannel;
      })
    );
  },[]);

  const contextValue = useMemo(() => ({
    channels,
    updateChannelValueAtIndex,
    handleAddChannel,
    handleUpdateChannel,
    handleDeleteChannel,
    handleBudgetChange,
    handleFormChange,
    updateBudgetAllocation,
  }), [channels, updateChannelValueAtIndex, handleAddChannel, handleUpdateChannel, handleDeleteChannel, handleBudgetChange, handleFormChange, updateBudgetAllocation]);


  return (
    <BudgetContext.Provider value={contextValue}>
      {children}
    </BudgetContext.Provider>
  );
};
