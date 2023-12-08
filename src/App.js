import { ChakraProvider } from "@chakra-ui/react";
import Budget from "./Pages/Budget/Budget";
import { InnerWrapper, Wrapper } from "./Styles/Style";
import { BudgetProvider } from "./Context/BudgetContext";

function App() {
  return (
    <ChakraProvider>
      <Wrapper>
        <InnerWrapper>
          <BudgetProvider>
            <Budget />
          </BudgetProvider>
        </InnerWrapper>
      </Wrapper>
    </ChakraProvider>
  );
}

export default App;
