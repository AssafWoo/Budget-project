import React, { useState, useMemo, useRef, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, IconButton } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getMonthsAndYear } from "../../../../Utils/getMonthsAndYear";
import { Grey700 } from "../../../../Styles/Colors";
import EditableCell from "./EditableCell";

const BudgetTable = ({
  handleValueChange,
  data,
  editingIndex,
  setEditingIndex,
}) => {
  const headers = useMemo(() => getMonthsAndYear(), []);
  const scrollContainerRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < maxScrollLeft);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    setCanScrollRight(true);

    scrollContainer.addEventListener("scroll", checkScroll, { passive: true });
    return () => {
      scrollContainer.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const scrollTable = (direction) => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef;
      const scrollAmount = container.offsetWidth / 2;
      const newScrollPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box position="relative" flex="1" marginLeft="0" overflowX="hidden">
      {canScrollLeft && (
        <IconButton
          aria-label="Scroll left"
          icon={<FiChevronLeft />}
          position="absolute"
          left="0%"
          bg="transparent"
          top="3%"
          color={Grey700}
          transform="translateY(-3%)"
          zIndex="2"
          _hover={{ background: "transparent" }}
          onClick={() => scrollTable("left")}
        />
      )}

      <Box
        display="grid"
        position="relative"
        gridTemplateColumns="1fr"
        overflow="hidden"
        maxHeight={{ base: "auto", md: "calc(100vh - 1.5rem)" }}
      >
        <Box
          ref={scrollContainerRef}
          overflowX="auto"
          maxWidth="80%"
          marginLeft="7%"
          sx={{
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <Table variant="simple">
            <Thead>
              <Tr>
                {headers.map((monthYear) => (
                  <Th
                    key={monthYear}
                    sx={{ whiteSpace: "nowrap", color: Grey700 }}
                  >
                    {monthYear}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {data.map((value, index) => (
                  <EditableCell
                    key={index}
                    value={value}
                    index={index}
                    isEditing={editingIndex === index}
                    onValueChange={handleValueChange}
                    onEditClick={setEditingIndex}
                  />
                ))}
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
      {canScrollRight && (
        <IconButton
          aria-label="Scroll right"
          icon={<FiChevronRight />}
          position="absolute"
          bg="transparent"
          right="0%"
          top="3%"
          color={Grey700}
          _hover={{ background: "transparent" }}
          transform="translateY(-3%)"
          zIndex="2"
          onClick={() => scrollTable("right")}
        />
      )}
    </Box>
  );
};

export default BudgetTable;
