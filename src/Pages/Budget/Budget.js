import React, { Suspense, lazy } from "react";
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Skeleton,
} from "@chakra-ui/react";
import { Black, White } from "../../Styles/Colors";
import BudgetHeader from "../../Modules/Budget/Header/BudgetHeader";
import AddChannel from "../../Modules/Budget/Tab1/ChannelActions/AddChannel";
import { MediumRadius } from "../../Styles/Style";

const Tab1 = lazy(() => import("../../Modules/Budget/Tab1/Tab1"));
const Tab2 = lazy(() => import("../../Modules/Budget/Tab2/Tab2"));

const Budget = () => {
  return (
    <Box p={4}>
      <Flex justifyContent="space-between" alignItems="flex-end" mb={4}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="flex-end"
          justify="space-between"
          wrap="wrap"
          padding="1rem"
        >
          <BudgetHeader />
          <Box mt={{ base: "1rem", md: "0" }}>
            <AddChannel />
          </Box>
        </Flex>
      </Flex>
      <Tabs borderColor={White}>
        <TabList>
          <Tab fontWeight={600} color={Black}>
            Tab 1
          </Tab>
          <Tab fontWeight={600} color={Black}>
            Tab 2
          </Tab>
        </TabList>
        <Suspense fallback={<Skeleton width="100%" height="3rem" borderRadius={MediumRadius} mt="1rem" />}>
          <TabPanels mt="2rem">
            <TabPanel pl="0">
              <Tab1 />
            </TabPanel>
            <TabPanel>
              <Tab2 />
            </TabPanel>
          </TabPanels>
        </Suspense>
      </Tabs>
    </Box>
  );
};

export default Budget;
