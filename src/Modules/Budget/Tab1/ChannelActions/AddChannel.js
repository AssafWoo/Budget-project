import { Button, Input, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import GenericModal from "../../../../Common/Modal/GenericModal";
import { Grey300, Grey500 } from "../../../../Styles/Colors";
import { useBudget } from "../../../../Context/BudgetContext";

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
        border={`1px solid ${Grey300}`}
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
        summary={"Add a new Channel and set it's name"}
      >
        <Input
          placeholder="Enter Channel name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </GenericModal>
    </>
  );
};

export default React.memo(Channel);
