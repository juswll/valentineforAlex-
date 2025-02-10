import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Alex, are you sure?",
  "Really sure, darling?",
  "Pooookie pls",
  "I'll be sad",
  "Awww I'm sad",
  "PLEAAASE",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 23;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="kittens kissing"
            src="https://i.pinimg.com/originals/af/3f/66/af3f66c717a59ff330dae783025da0f2.gif"
          />
          <h1 className="my-4 text-4xl">YAAAAAY!! I KNEW YOU WOULD SAY YES</h1>
        </>
      ) : (
        <>
          <img
            alt="kittens hugging"
            src="https://media.tenor.com/ZX77WQzACQUAAAAC/cute-cat.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine, Alex?</h1>
          <div className="flex items-center">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
