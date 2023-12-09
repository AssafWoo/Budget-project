import { ChakraProvider } from "@chakra-ui/react";
import Budget from "./Pages/Budget/Budget";
import { InnerWrapper, Wrapper } from "./Styles/Style";
import { BudgetProvider } from "./Context/BudgetContext";

function App() {
  return (
    <ChakraProvider>
      <BudgetProvider>
        <Wrapper>
          <InnerWrapper>
            <Budget />
          </InnerWrapper>
        </Wrapper>
      </BudgetProvider>
    </ChakraProvider>
  );
}

export default App;
