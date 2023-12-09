import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Grey200, Grey500, White } from "../../Styles/Colors";
import { numberToStringWithCommas } from "../../Utils/getFormatNumbers";
import { SmallGrey300Border } from "../../Styles/Style";

export const CurrencyInput = ({ element, readOnly, onChange }) => {
    return (
      <Box>
        <InputGroup>
          <InputLeftAddon
            fontWeight="600"
            children="$"
            background={White}
            border={SmallGrey300Border}
            borderRight="none"
          />
          <Input
            border={SmallGrey300Border}
            borderLeft="none"
            background={White}
            value={numberToStringWithCommas(element.value)}
            readOnly={readOnly}
            onChange={onChange}
            color={readOnly ? Grey200 : Grey500}
          />
        </InputGroup>{" "}
      </Box>
    );
  };