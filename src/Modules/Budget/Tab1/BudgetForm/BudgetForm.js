import React, { useEffect, useRef } from "react";
import { Box, HStack } from "@chakra-ui/react";
import BudgetAllocationSwitch from "./SubComponents/BudgetAllocationSwitch";
import BudgetBaseline from "./SubComponents/BudgetBaseline";
import BudgetFrequency from "./SubComponents/BudgetFrequency";
import BudgetBreakdown from "./SubComponents/BudgetBreakdown";
import { useBudget } from "../../../../Context/BudgetContext";

const BudgetForm = ({ channel }) => {
  const {
    channels,
    handleBudgetChange,
    handleFormChange,
    updateBudgetAllocation,
  } = useBudget();
  const budget = channels.find((c) => c.name === channel.name)?.budget;

  const prevBudgetRef = useRef({
    budgetAllocation: null,
    baselineBudget: null,
    frequency: null,
    monthlyValues: null,
    quarterlyValues: null,
  });

  const onFormChange = (key, value) => {
    handleFormChange(channel.name, key, value);
  };

  const onBudgetChange = (index, value, type) => {
    handleBudgetChange(channel.name, index, value, type);
  };

  useEffect(() => {
    const { budgetAllocation, baselineBudget, frequency } = budget || {};

    const prevBudgetProps = prevBudgetRef.current;
    if (
      JSON.stringify({ budgetAllocation, baselineBudget, frequency }) !==
      JSON.stringify(prevBudgetProps)
    ) {
      updateBudgetAllocation(channel.name);
      prevBudgetRef.current = { budgetAllocation, baselineBudget, frequency };
    }
  }, [budget, channel.name, updateBudgetAllocation]);

  if (!budget) {
    return <div>Loading...</div>;
  }

  return (
    <Box p={4} >
      <HStack spacing={4} width="80%" wrap={"wrap"}>
        <BudgetFrequency
          frequency={budget.frequency}
          handleFormChange={onFormChange}
        />
        <BudgetBaseline
          baselineBudget={budget.baselineBudget}
          handleFormChange={onFormChange}
          frequency={budget.frequency}
          disableInput={budget.budgetAllocation === "Equal" ? false : true}
        />
        <BudgetAllocationSwitch
          budgetAllocation={budget.budgetAllocation}
          handleFormChange={onFormChange}
        />
      </HStack>
      <BudgetBreakdown
        frequency={budget.frequency}
        budgetAllocation={budget.budgetAllocation}
        values={
          budget.frequency === "Monthly" || budget.frequency === "Annually"
            ? budget.monthlyValues
            : budget.quarterlyValues
        }
        handleBudgetChange={onBudgetChange}
      />
    </Box>
  );
};

export default BudgetForm;
