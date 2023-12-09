import { Button, Input, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import GenericModal from "../../../../Common/Modal/GenericModal";
import { Grey500 } from "../../../../Styles/Colors";
import { useBudget } from "../../../../Context/BudgetContext";
import { SmallGrey300Border } from "../../../../Styles/Style";

const Channel = () => {
  const { handleAddChannel } = useBudget();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    handleAddChannel(inputValue);
    setInputValue("");
    onClose();
  };

  return (
    <>
      <Button
        color={Grey500}
        fontSize={{ base: ".8rem", md: ".9rem" }}
        alignSelf="start"
        border={SmallGrey300Border}
        onClick={onOpen}
      >
        + Add Channel
      </Button>
      <GenericModal
        isOpen={isOpen}
        onClose={onClose}
        title="Add New Channel"
        primaryAction={handleAdd}
        primaryButtonLabel="Add"
        summary={"Create a new channel and assign a name to it"}
      >
        <Input
          placeholder="Enter channel name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </GenericModal>
    </>
  );
};

export default React.memo(Channel);
