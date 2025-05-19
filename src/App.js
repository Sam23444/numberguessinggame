import "./styles.css";
import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NumberGuessingGame = () => {
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 200 + 1)
  );
  const [feedback, setFeedback] = useState("");
  const inputRef = useRef(null);

  const checkNumber = () => {
    const userGuess = Number(guess);

    if (!guess || userGuess < 1 || userGuess > 200) {
      toast.error(
        <>
          <FontAwesomeIcon icon={faTimesCircle} /> Please enter a number between
          1 and 200
        </>
      );
      return;
    }

    if (userGuess === randomNumber) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correct! Starting a new round...");
      toast.success(
        <>
          <FontAwesomeIcon icon={faCheckCircle} /> Correct! A new number has
          been generated.
        </>
      );
      setRandomNumber(Math.floor(Math.random() * 200 + 1));
    } else if (userGuess < randomNumber) {
      setFeedback("Too low. Try again!");
      toast.info(
        <>
          <FontAwesomeIcon icon={faInfoCircle} /> Too low! Try again.
        </>
      );
    } else {
      setFeedback("Too high. Try again!");
      toast.info(
        <>
          <FontAwesomeIcon icon={faInfoCircle} /> Too high! Try again.
        </>
      );
    }

    setGuess("");
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <h1 className="title">Number Guessing Game</h1>
      <p className="description">
        What number (between 1 and 200) am I thinking of?
      </p>
      <div className="input-group">
        <input
          type="number"
          min="1"
          max="200"
          className="input"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          ref={inputRef}
        />
        <button className="btn" onClick={checkNumber}>
          Guess
        </button>
      </div>
      <p className="feedback">{feedback}</p>
      <p className="score">Score: {score}</p>
      <ToastContainer />
    </div>
  );
};

export default NumberGuessingGame;
