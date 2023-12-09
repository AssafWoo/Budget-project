import { Input, MenuItem, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../../../Common/Modal/GenericModal";
import { LightRed, MainRed } from "../../../../Styles/Colors";
import React, { useState } from "react";
import { SmallRadius } from "../../../../Styles/Style";

const DeleteChannel = ({ channel, onDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disableButton, setDisableButton] = useState(true);
  const handleDelete = () => {
    onDelete(channel);
    onClose();
  };

  const handleValidation = (val) => {
    if (channel.name === val) return setDisableButton(false);
    return setDisableButton(true);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onOpen();
  };

  return (
    <>
      <MenuItem
        borderRadius={SmallRadius}
        _hover={{ color: MainRed, background: LightRed }}
        onClick={handleDeleteClick}
      >
        Remove
      </MenuItem>

      <GenericModal
        isOpen={isOpen}
        onClose={onClose}
        title="Delete channel"
        primaryAction={(e) => handleDelete(e)}
        primaryButtonLabel="Delete"
        primaryButtonColor={MainRed}
        primaryButtonColorScheme={"red"}
        disableMainButton={disableButton}
        summary={`To delete this channel, please enter the channel name (${channel.name})`}
      >
        <Input onChange={(e) => handleValidation(e.target.value)} />
      </GenericModal>
    </>
  );
};

export default React.memo(DeleteChannel);
