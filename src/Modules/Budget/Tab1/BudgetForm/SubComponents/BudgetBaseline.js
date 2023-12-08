import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Tooltip,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Indigo500, White } from "../../../../../Styles/Colors";
import { iconStyle } from "./Style";
import { numberToStringWithCommas, stringWithCommasToNumber } from "../../../../../Utils/getFormatNumbers";

const BudgetBaseline = ({
  disableInput,
  frequency,
  handleFormChange,
  budget,
  baselineBudget
}) => {
  const [amount, setAmount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const formattedAmount = numberToStringWithCommas(baselineBudget);
    if (formattedAmount !== amount) {
      setAmount(numberToStringWithCommas(formattedAmount));
    }
  }, [baselineBudget]);



  const handleInputChange = (e) => {
    const newAmount = e.target.value;
    setAmount(newAmount);
    const newAmountNumber = stringWithCommasToNumber(newAmount);
    if (newAmountNumber !== null && newAmountNumber !== budget) {
      handleFormChange("baselineBudget", newAmountNumber);
    }
  };

  return (
    <FormControl id="baseline-budget" flex="2 0 38%">
      <FormLabel display="flex" width="100%" alignItems="center">
        Baseline [{frequency}] Budget
        <Tooltip
          label="Annual budget baseline"
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
      <Input
        isDisabled={disableInput}
        value={amount}
        bg={White}
        fontWeight={600}
        color={Indigo500}
        onChange={handleInputChange}
      />
    </FormControl>
  );
};

export default React.memo(BudgetBaseline);
