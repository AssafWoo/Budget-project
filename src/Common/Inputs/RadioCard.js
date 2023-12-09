import { Box, useRadio } from "@chakra-ui/react";
import React from "react";
import { Indigo500, Grey300, Grey500, Grey600, White } from "../../Styles/Colors";
import { MediumGrey300Border, SmallRadius } from "../../Styles/Style";

const RadioCard = (props) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);
    const input = getInputProps();
    const checkbox = getCheckboxProps();
  
    const checkedBorderStyle = props.isChecked
      ? props.isLast
        ? { borderLeft: MediumGrey300Border }
        : { borderRight: MediumGrey300Border }
      : {};
  
    return (
      <Box as="label">
        <input {...input} />
        <Box
          {...checkbox}
          cursor="pointer"
          color={Grey500}
          bg={Grey600}
          borderRadius={SmallRadius}
          fontWeight="600"
          _checked={{
            fontWeight:600,
            bg: White,
            color: Indigo500,
            borderColor: Grey300,
            borderRadius: {SmallRadius},
            ...checkedBorderStyle,
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={2}
        >
          {props.children}
        </Box>
      </Box>
    );
  };

  export default React.memo(RadioCard)