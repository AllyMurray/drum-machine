interface IDrumPad {
  id: string;
  keyCode: number;
  url: string;
}

export const drumPads: IDrumPad[] = [
  {
    id: "Heater-1",
    keyCode: 81,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    id: "Heater-2",
    keyCode: 87,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    id: "Heater-3",
    keyCode: 69,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    id: "Heater-4",
    keyCode: 65,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    id: "Clap",
    keyCode: 83,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id: "Open-HH",
    keyCode: 68,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id: "Kick-n'-Hat",
    keyCode: 90,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id: "Kick",
    keyCode: 88,
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id: "Closed-HH",
    keyCode: 67,
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];
