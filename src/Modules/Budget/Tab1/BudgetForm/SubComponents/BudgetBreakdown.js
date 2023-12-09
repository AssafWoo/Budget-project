import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { Grey300, Grey50, Grey600, Navy600, Navy500 } from "../../../../../Styles/Colors";
import { getMonthsAndYear } from "../../../../../Utils/getMonthsAndYear";
import { getQuartersOfYear } from "../../../../../Utils/getQuartersOfYear";
import { stringWithCommasToNumber } from "../../../../../Utils/getFormatNumbers";
import { CurrencyInput } from "../../../../../Common/Inputs/CurrencyInput";
import { MediumRadius, SmallGrey300Border } from "../../../../../Styles/Style";

const MonthBudget = ({ label, value, readOnly, onChange }) => {
  return (
    <VStack spacing={1} alignItems={"flex-start"}>
      <Text fontSize=".9rem" color={Navy500}>
        {label}
      </Text>
      <CurrencyInput
        onChange={onChange}
        element={{ label: label, value: value }}
        readOnly={readOnly}
      />
    </VStack>
  );
};

const BudgetBreakdown = ({
  values,
  handleBudgetChange,
  budgetAllocation,
  frequency,
}) => {
  const labels = useMemo(() => {
    return frequency === "Annually" || frequency === "Monthly"
      ? getMonthsAndYear()
      : getQuartersOfYear();
  }, [frequency]);

  return (
    <Box
      bg={Grey600}
      padding="2rem"
      mt="2rem"
      borderRadius={MediumRadius}
      border={SmallGrey300Border}
    >
      <Text fontSize="lg" fontWeight={900} mb={4} color={Navy600}>
        Budget Breakdown
      </Text>
      <Text fontSize="sm" mb={4} color={Grey50}>
        By default, your budget will be equally divided throughout the year. You
        can manually change the budget allocation, either now or later.
      </Text>
      <SimpleGrid
        columns={{
          base: 2,
          md: 3,
          lg: frequency === "Monthly" || frequency === "Annually" ? 6 : 4,
        }}
        spacing={4}
      >
        {values.map((value, index) => (
          <MonthBudget
            key={labels[index]}
            label={labels[index]}
            value={value}
            onChange={(e) => {
              handleBudgetChange(
                index,
                stringWithCommasToNumber(e.target.value),
                frequency === "Monthly" || frequency === "Annually"
                  ? "monthlyValues"
                  : "quarterlyValues"
              );
            }}
            readOnly={budgetAllocation === "Equal"}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default React.memo(BudgetBreakdown);
