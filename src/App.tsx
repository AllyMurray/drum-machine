import "./App.css";

import React, { useState } from "react";

import Display from "./components/Display";
import DrumPad from "./components/DrumPad";
import { drumPads } from "./drumPads";

function App() {
  const [displayText, setDisplayText] = useState("");

  return (
    <div id="drum-machine" className="App">
      <Display text={displayText} />
      {drumPads.map(drumPad => (
        <DrumPad
          key={drumPad.id}
          id={drumPad.id}
          keyCode={drumPad.keyCode}
          url={drumPad.url}
          onChange={setDisplayText}
        />
      ))}
    </div>
  );
}

export default App;
