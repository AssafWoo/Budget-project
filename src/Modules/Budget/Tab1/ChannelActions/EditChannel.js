import { Input, MenuItem, useDisclosure } from "@chakra-ui/react";
import GenericModal from "../../../../Common/Modal/GenericModal";
import React, { useState } from "react";
import { LightBlue, MainBlue } from "../../../../Styles/Colors";

const EditChannel = ({ channel, onUpdate }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newName, setNewName] = useState(channel.name);

  const handleSave = () => {
    onUpdate(channel, newName);
    onClose();
  };

  const handleEditClick = () => {
    onOpen();
  };

  return (
    <>
      <MenuItem
        borderRadius="5px"
        _hover={{ color: MainBlue, background: LightBlue }}
        onClick={handleEditClick}
      >
        Edit
      </MenuItem>
      <GenericModal
        isOpen={isOpen}
        onClose={onClose}
        title="Edit channel"
        primaryAction={handleSave}
        primaryButtonLabel="Save"
        summary={"Change this channel's name"}

      >
        <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </GenericModal>
    </>
  );
};

export default React.memo(EditChannel);
