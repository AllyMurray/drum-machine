import "./App.css";

import React, { useState } from "react";
import { border, colors } from "./utils/cssVariables";

import Display from "./components/Display";
import DrumPad from "./components/DrumPad";
import { drumPads } from "./drumPads";
import styled from "styled-components";

const AppContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const DrumContainer = styled.div`
  background-color: ${colors.lightPrimary};
  border-radius: ${border.defaultRadius};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
`;

const DrumPads = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(3, 4rem);
  padding: 1rem;
`;

function App() {
  const [displayText, setDisplayText] = useState("");

  return (
    <AppContainer id="drum-machine" className="App">
      <DrumContainer>
        <Display text={displayText} style={{ gridColumn: "span 3" }} />
        <DrumPads>
          {drumPads.map(drumPad => (
            <DrumPad
              key={drumPad.id}
              id={drumPad.id}
              keyCode={drumPad.keyCode}
              url={drumPad.url}
              onChange={setDisplayText}
            />
          ))}
        </DrumPads>
      </DrumContainer>
    </AppContainer>
  );
}

export default App;
