import React, { useCallback, useEffect, useRef } from "react";
import { border, colors } from "../utils/cssVariables";

import styled from "styled-components";

interface IDumpPadProps {
  id: string;
  keyCode: number;
  url: string;
  onChange: (text: string) => void;
}

const DrumPad: React.FunctionComponent<IDumpPadProps> = props => {
  const audioElement = useRef<HTMLAudioElement>(null);

  const handlePlaySoundCallback = useCallback(() => {
    if (audioElement?.current) {
      audioElement.current.play();
      props.onChange(audioElement.current.id);
    }
  }, [props]);

  const handleKeyDownCallback = useCallback(
    e => {
      if (e.keyCode === props.keyCode) {
        handlePlaySoundCallback();
      }
    },
    [props.keyCode, handlePlaySoundCallback]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDownCallback);

    return () => {
      document.removeEventListener("keydown", handleKeyDownCallback);
    };
  }, [handleKeyDownCallback]);

  const keyText = String.fromCharCode(props.keyCode);

  const Button = styled.button`
    background-color: ${colors.accent};
    border-radius: ${border.defaultRadius};
    color: ${colors.lightText};
    height: 4rem;
    width: 4rem;
  `;

  return (
    <Button
      id={props.id}
      className="drum-pad"
      onClick={handlePlaySoundCallback}
      onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) =>
        handleKeyDownCallback(e)
      }
    >
      {keyText}
      <audio id={keyText} className="clip" src={props.url} ref={audioElement} />
    </Button>
  );
};

export default DrumPad;
