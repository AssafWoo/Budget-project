import React from "react";
import {
  Box,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  MenuList,
  MenuButton,
  Menu,
  IconButton,
} from "@chakra-ui/react";
import { IoIosMore } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuFileSearch } from "react-icons/lu";
import { Grey100, Grey200, Grey300, White } from "../../../Styles/Colors";
import DeleteChannel from "./ChannelActions/DeleteChannel";
import EditChannel from "./ChannelActions/EditChannel";
import BudgetForm from "./BudgetForm/BudgetForm";
import { useBudget } from "../../../Context/BudgetContext";

function CustomAccordionIcon({ isOpen }) {
  return (
    <Box
      transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
      transition="transform 0.2s"
    >
      <IoMdArrowDropdown color={Grey300} />
    </Box>
  );
}

const Tab1 = () => {
  const { channels, handleUpdateChannel, handleDeleteChannel } = useBudget();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Accordion allowToggle>
      {channels.map((channel, index) => (
        <AccordionItem
          key={index}
          bg={Grey100}
          border={`1px solid ${Grey200}`}
          borderRadius={"10px"}
          mb=".5rem"
        >
          <h2>
            <AccordionButton onClick={onToggle} _focus={{ boxShadow: "none" }}>
              <CustomAccordionIcon isOpen={isOpen} />
              <Box
                flex="1"
                textAlign="left"
                ml="1rem"
                display={"flex"}
                alignItems={"center"}
              >
                <Box
                  display={"inline-block"}
                  position="relative"
                  width="2rem"
                  height="2rem"
                  bg={"orange"}
                  padding=".2rem"
                  borderRadius="5px"
                  mr="1rem"
                >
                  <LuFileSearch
                    size="1.3rem"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    color={White}
                  />{" "}
                </Box>{" "}
                {channel.name}
              </Box>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  bg="transparent"
                  icon={<IoIosMore size="1.2rem" color={Grey300} />}
                  onClick={(e) => e.stopPropagation()}
                />
                <MenuList padding=".5rem" borderRadius="10px">
                  <EditChannel
                    channel={channel}
                    onUpdate={handleUpdateChannel}
                  />
                  <DeleteChannel
                    channel={channel}
                    onDelete={handleDeleteChannel}
                  />
                </MenuList>
              </Menu>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg={White}>
            <BudgetForm channel={channel} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Tab1;
