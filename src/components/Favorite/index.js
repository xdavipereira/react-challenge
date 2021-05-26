import { StarOutlined } from "@ant-design/icons";
import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const StyledButton = styled(StarOutlined)`
  color: ${(props) => (props.starred ? "gold" : "black")};
  font-size: ${(props) => props.size || "35px"};
`;

export function Favorite({ starred, onChange }) {


  function handleOnChange() {
    onChange(!starred);
  }

  return <StyledButton onClick={handleOnChange} starred={starred} />;
}

export default Favorite;
