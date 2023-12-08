import React from "react";
import {
  FormControl,
  FormLabel,
  Select,
  Tooltip,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Indigo500, White } from "../../../../../Styles/Colors";
import { iconStyle } from "./Style";

export const frequencyOptions = ["Annually", "Monthly", "Quarterly"];

const BudgetFrequency = ({ handleFormChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <FormControl id="budget-frequency" flex="2 0 30%">
      <FormLabel display="flex" alignItems="center">
        Budget Frequency
        <Tooltip
          label="Frequency of the budget"
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
      <Select
        fontWeight={600}
        bg={White}
        color={Indigo500}
        onChange={(e) => handleFormChange("frequency", e.target.value)}
      >
        {frequencyOptions.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.memo(BudgetFrequency);
