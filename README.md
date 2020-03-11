# Drum Machine

This project was built as part of the [FreeCodeCamp curriculum](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).

https://allymurray.github.io/drum-machine

## Objective

Create a web app that allows a user to click drum pad elements that trigger audio clips, they can also be triggered using keyboard keys. See the [user stories](#user-stories) for more details.

## Built with

- [React](https://reactjs.org)
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
- [Styled Components](https://styled-components.com)
- [TypeScript](https://www.typescriptlang.org)

## User stories

1. I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
2. Within #drum-machine I can see an element with a corresponding id="display".
3. Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
4. Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
5. When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
6. When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
7. When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
