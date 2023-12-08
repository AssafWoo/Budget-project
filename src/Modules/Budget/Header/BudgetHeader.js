import { Box, Heading, Text } from "@chakra-ui/react";
import {  Grey50, Navy600 } from "../../../Styles/Colors";

const BudgetHeader = () => {

  return (
    <Box flex={{ base: "1 0 100%", md: "2" }} paddingRight={{ md: "10rem" }}>
      <Heading
        as="h1"
        fontSize={{ base: "1.5rem", md: "2rem" }}
        fontWeight="bold"
        color={Navy600}
      >
        Build your budget plan
      </Heading>
      <Text
        fontSize={{ base: "1.2rem", md: "1.5rem" }}
        mt="1.5rem"
        fontWeight="bold"
        color={Navy600}
      >
        Setup channels
      </Text>
      <Text fontSize={{ base: "0.8rem", md: "1rem" }} mt="1rem" color={Grey50}>
        Setup your added channels by adding baseline budgets out of your total
        budget. See the forecast impact with the help of tips and insights.
      </Text>
    </Box>
  );
};

export default BudgetHeader;
