import { Box, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Grey200, Grey300, Grey500, White } from "../../Styles/Colors";
import { numberToStringWithCommas } from "../../Utils/getFormatNumbers";

export const CurrencyInput = ({ element, readOnly, onChange }) => {
    return (
      <Box>
        <InputGroup>
          <InputLeftAddon
            fontWeight="600"
            children="$"
            background={White}
            border={`1px solid ${Grey300}`}
            borderRight="none"
          />
          <Input
            border={`1px solid ${Grey300}`}
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