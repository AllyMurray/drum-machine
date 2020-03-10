import * as React from "react";

interface IDisplayProps {
  text: string;
}

const Display: React.FunctionComponent<IDisplayProps> = props => {
  return <div id="display">{props.text}</div>;
};

export default Display;
