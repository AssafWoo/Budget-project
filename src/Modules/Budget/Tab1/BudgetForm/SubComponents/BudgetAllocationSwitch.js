import React from "react";
import {
  Flex,
  ButtonGroup,
  useRadioGroup,
  useDisclosure,
  FormControl,
  FormLabel,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import { Grey300, Grey600 } from "../../../../../Styles/Colors";
import RadioCard from "../../../../../Common/Inputs/RadioCard";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { iconStyle } from "./Style";
import { MediumGrey300Border, SmallRadius } from "../../../../../Styles/Style";

export const allocationOptions = ["Equal", "Manual"];

const BudgetAllocationSwitch = ({ budgetAllocation, handleFormChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getRootProps, getRadioProps } = useRadioGroup({
    value: budgetAllocation,
    onChange: (value) => handleFormChange("budgetAllocation", value),
  });

  const group = getRootProps();

  return (
    <FormControl as="fieldset" id="budget-allocation" flex="2 0 25%">
      <FormLabel as="legend" display="flex" alignItems="center">
        Budget Allocation
        <Tooltip
          label="Method of budget allocation"
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        >
          <IconButton
            aria-label="Info"
            icon={<IoMdInformationCircleOutline style={iconStyle} />}
            size="xs"
            onClick={onOpen}
            variant="ghost"
            ml={2}
          />
        </Tooltip>
      </FormLabel>
      <Flex
        border={MediumGrey300Border}
        boxShadow={"md"}
        width="fit-content"
        align="center"
        borderRadius={SmallRadius}
      >
        <ButtonGroup isAttached {...group} bg={Grey600} borderRadius={SmallRadius}>
          {allocationOptions.map((value, index) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard
                key={value}
                {...radio}
                isLast={index === allocationOptions.length - 1}
              >
                {value}
              </RadioCard>
            );
          })}
        </ButtonGroup>
      </Flex>{" "}
    </FormControl>
  );
};

export default React.memo(BudgetAllocationSwitch);
