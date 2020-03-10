import React, { CSSProperties } from "react";
import { border, colors } from "../utils/cssVariables";

import styled from "styled-components";

interface IDisplayProps {
  text: string;
  style?: CSSProperties;
}

const DisplayContainer = styled.div`
  align-items: center;
  background-color: ${colors.primary};
  border-bottom: ${colors.divider};
  border-top-left-radius: ${border.defaultRadius};
  border-top-right-radius: ${border.defaultRadius};
  color: ${colors.lightText};
  display: flex;
  height: 3rem;
  justify-content: center;
`;

const Display: React.FunctionComponent<IDisplayProps> = props => {
  return (
    <DisplayContainer id="display" style={props.style}>
      {props.text}
    </DisplayContainer>
  );
};

export default Display;
