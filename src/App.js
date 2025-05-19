import React, { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

const showToast = (type, message, icon) => {
  const content = (
    <>
      <FontAwesomeIcon icon={icon} /> {message}
    </>
  );
  if (type === "success") toast.success(content);
  else if (type === "error") toast.error(content);
  else toast.info(content);
};

const NumberGuessingGame = () => {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState("");
  const [range, setRange] = useState({ min: 1, max: 200 });
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * (range.max - range.min + 1) + range.min)
  );
  const [feedback, setFeedback] = useState("");
  const inputRef = useRef(null);

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setRange((prevRange) => ({
      ...prevRange,
      [name]: Number(value),
    }));
  };

  const applyNewRange = () => {
    if (range.min >= range.max) {
      showToast("error", "Minimum range must be less than maximum range!", faTimesCircle);
      return;
    }
    setRandomNumber(
      Math.floor(Math.random() * (range.max - range.min + 1) + range.min)
    );
    setScore(0);
    setAttempts(0);
    setFeedback("Range updated! Start guessing.");
    showToast("success", "Range updated successfully!", faCheckCircle);
  };

  const checkNumber = () => {
    const userGuess = Number(guess);

    if (!guess || userGuess < range.min || userGuess > range.max) {
      showToast(
        "error",
        `Please enter a number between ${range.min} and ${range.max}`,
        faTimesCircle
      );
      return;
    }

    setAttempts((prevAttempts) => prevAttempts + 1);

    if (userGuess === randomNumber) {
      setScore((prevScore) => prevScore + 1);
      setFeedback("Correct! Starting a new round...");
      showToast(
        "success",
        "Correct! A new number has been generated.",
        faCheckCircle
      );
      setRandomNumber(
        Math.floor(Math.random() * (range.max - range.min + 1) + range.min)
      );
    } else if (userGuess < randomNumber) {
      setFeedback("Too low. Try again!");
      showToast("info", "Too low! Try again.", faInfoCircle);
    } else {
      setFeedback("Too high. Try again!");
      showToast("info", "Too high! Try again.", faInfoCircle);
    }

    setGuess("");
    inputRef.current.focus();
  };

  const successPercentage =
    attempts === 0 ? 0 : ((score / attempts) * 100).toFixed(2);

  return (
    <div className="container">
      <h1 className="title">Number Guessing Game</h1>
      <p className="description">
        Guess the number I’m thinking of within the specified range!
      </p>

      <div className="range-inputs">
        <label>
          Min:
          <input
            type="number"
            name="min"
            value={range.min}
            onChange={handleRangeChange}
            aria-label="Minimum range value"
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            name="max"
            value={range.max}
            onChange={handleRangeChange}
            aria-label="Maximum range value"
          />
        </label>
        <button className="btn" onClick={applyNewRange}>
          Update Range
        </button>
      </div>

      <div className="input-group">
        <input
          type="number"
          min={range.min}
          max={range.max}
          className="input"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          ref={inputRef}
          aria-label="Enter your guess"
        />
        <button className="btn" onClick={checkNumber}>
          Guess
        </button>
      </div>

      <p className={`feedback ${feedback.includes("Correct") ? "success" : ""}`}>
        {feedback}
      </p>
      <p className="score">
        Score: {score} | Attempts: {attempts} | Success: {successPercentage}%
      </p>
      <ToastContainer />
    </div>
  );
};

export default NumberGuessingGame;
