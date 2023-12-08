import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { MainGreen, Navy600 } from "../../Styles/Colors";

const GenericModal = ({
  isOpen,
  onClose,
  title,
  children,
  primaryAction,
  primaryButtonLabel,
  secondaryAction,
  secondaryButtonLabel,
  disableMainButton,
  summary,
  primaryButtonColor = MainGreen,
  primaryButtonColorScheme ="green"
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>

        <ModalCloseButton />
        <ModalBody>
          <Text fontSize={"1rem"} mb="1rem" color={Navy600}>
            {summary}{" "}
          </Text>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button
            mr={3}
            onClick={secondaryAction || onClose}
          >
            {secondaryButtonLabel || "Cancel"}
          </Button>
          <Button
            colorScheme={primaryButtonColorScheme}
            bg={primaryButtonColor}
            onClick={primaryAction}
            isDisabled={disableMainButton}
          >
            {primaryButtonLabel}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GenericModal;
