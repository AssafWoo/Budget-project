import styled from "styled-components";
import { Grey200 } from "./Colors";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  font-family: "Mulish", sans-serif;
  padding: 1rem;
  position: relative;
  overflow-y: auto;
`;

export const InnerWrapper = styled.div`
  margin: auto;
  max-width: 75rem;
  width: 100%;

  .chakra-collapse {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top:1px solid ${Grey200}
  }


`;
