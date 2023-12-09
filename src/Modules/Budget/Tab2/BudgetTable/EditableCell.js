import React, { useState, useEffect } from "react";
import {
  Td,
  Flex,
  Text,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiCheck, FiEdit2, FiX } from "react-icons/fi";
import { Black, MainGreen, MainRed } from "../../../../Styles/Colors";
import { numberToStringWithCommas } from "../../../../Utils/getFormatNumbers";
import { SmallRadius } from "../../../../Styles/Style";

const EditableCell = ({
  value,
  index,
  isEditing,
  onValueChange,
  onEditClick,
}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (!isEditing) {
      setInputValue(value);
    }
  }, [isEditing, value]);

  const handleEdit = () => {
    onEditClick(index);
  };

  const handleCancel = () => {
    onEditClick(null);
  };

  const handleSave = () => {
    onValueChange(index, inputValue);
  };

  return (
    <Td
      _hover={{
        ".edit-pencil-icon": {
          display: "flex"
        }
      }}
    >
      <Flex
        align="center"
        position="relative"
      >
        {isEditing ? (
          <>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize=".9rem"
                children="$"
                top=".4rem"
                left=".4rem"
                display="inline"
              />
              <Input
                display="flex"
                paddingLeft="1.1rem"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                size="sm"
                autoFocus
                width="4rem"
                borderRadius={SmallRadius}
              />
            </InputGroup>
            <IconButton
              icon={<FiCheck />}
              size="xs"
              aria-label="Save"
              colorScheme="green"
              borderRadius="50%"
              bg={MainGreen}
              onClick={handleSave}
              marginRight="1"
              marginLeft="1"
            />
            <IconButton
              icon={<FiX />}
              size="xs"
              colorScheme="red"
              bg={MainRed}
              borderRadius="50%"
              aria-label="Cancel"
              onClick={handleCancel}
              marginRight="1"
            />
          </>
        ) : (
          <Text color={Black} fontWeight={"600"} cursor={"pointer"}>
            ${numberToStringWithCommas(value)}
          </Text>
        )}
        {!isEditing && (
          <IconButton
            icon={<FiEdit2 />}
            size="xs"
            color={Black}
            bg="transparent"
            position="absolute"
            alignItems="center"
            justifyContent="center"
            right="-75%"
            display="none"
            className="edit-pencil-icon"
            borderRadius="50%"
            aria-label="Cancel"
            onClick={handleEdit}
            marginRight="1"
          />
        )}
      </Flex>
    </Td>
  );
};

export default EditableCell;
