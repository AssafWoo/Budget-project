import { Box, HStack, Skeleton } from "@chakra-ui/react";
import { MediumRadius } from "../../Styles/Style";

const BudgetFormSkeleton = () => (
  <Box p={4}>
    <HStack spacing={4} width="80%" wrap={"wrap"}>
      <Skeleton width="32%" height="3rem" borderRadius={MediumRadius} />
      <Skeleton width="32%" height="3rem" borderRadius={MediumRadius} />
      <Skeleton width="31%" height="3rem" borderRadius={MediumRadius} />
      <Skeleton width="100%" height="8rem" borderRadius={MediumRadius} />
    </HStack>
  </Box>
);

export default BudgetFormSkeleton;
