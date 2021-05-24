import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% auto 25%;
  grid-template-rows: 30% auto;
  height: 100%;
  width: 100%;

`;

export function WrapperContainer({ children }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}

export default WrapperContainer;
