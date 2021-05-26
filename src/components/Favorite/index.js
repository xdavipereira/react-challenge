import { StarOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const StyledButton = styled(StarOutlined)`
  color: ${(props) => (props.starred ? "gold" : "black")};
  font-size: ${(props) => props.size || "35px"};
  position: absolute;
  top: 10px;
  right: 0;
`;

export function Favorite({ starred, onChange }) {


  function handleOnChange() {
    if(onChange) {
      onChange(!starred);
    }
  }

  return <StyledButton onClick={handleOnChange} starred={starred} />;
}

export default Favorite;
