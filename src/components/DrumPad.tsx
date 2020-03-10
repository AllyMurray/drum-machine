import React, { useCallback, useEffect, useRef } from "react";

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

  return (
    <button
      id={props.id}
      className="drum-pad"
      onClick={handlePlaySoundCallback}
      onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) =>
        handleKeyDownCallback(e)
      }
    >
      {keyText}
      <audio
        id={keyText}
        className="clip"
        src={props.url}
        ref={audioElement}
      ></audio>
    </button>
  );
};

export default DrumPad;
