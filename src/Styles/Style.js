import styled from "styled-components";
import { Grey200, Grey300 } from "./Colors";

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
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
    border-top:0.063rem solid ${Grey200}
  }
`;

export const SmallRadius = "0.313rem";
export const MediumRadius = "0.625rem";

export const SmallGrey300Border = `0.063rem solid ${Grey300}`;
export const MediumGrey300Border = `0.125rem solid ${Grey300}`;
