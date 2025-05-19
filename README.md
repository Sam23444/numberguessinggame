
Number Guessing Game

Description

The Number Guessing Game is an interactive and engaging web-based game built using React. Players are tasked with guessing a random number between 1 and 200. After each guess, the game provides feedback, tracks the number of attempts, and calculates the player's success rate.


---

Features

Interactive Gameplay: Players receive feedback such as "Too high" or "Too low" after each guess.

Score Tracking: Displays the number of correct guesses, total attempts, and success percentage.

Toasts for Notifications: User-friendly toast notifications for errors, success, and hints.

Responsive Design: Works seamlessly on devices of all sizes.



---

Technologies Used

React: JavaScript library for building user interfaces.

React Toastify: For beautiful toast notifications.

FontAwesome Icons: For meaningful and attractive icons.

CSS: For styling.



---

Installation and Setup

Prerequisites

Ensure you have the following installed on your machine:

Node.js (version 14 or higher)

npm or yarn


Steps to Run

1. Clone this repository:

git clone <repository-url>


2. Navigate to the project directory:

cd number-guessing-game


3. Install dependencies:

npm install

or

yarn install


4. Start the development server:

npm start

or

yarn start


5. Open your browser and navigate to:

http://localhost:3000




---

How to Play

1. Enter a number between 1 and 200 in the input box.


2. Click on the Guess button.


3. Receive feedback on whether your guess is too high, too low, or correct.


4. Continue guessing until you find the correct number.


5. A new number is generated automatically when you guess correctly.




---

Files and Structure

NumberGuessingGame.jsx: Main component containing the game logic and UI.

styles.css: Contains the styling for the game interface.



---

Features in Code

Highlights

1. Random Number Generation:

const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 200 + 1));


2. Feedback and Toast Notifications:

toast.success(
    <>
        <FontAwesomeIcon icon={faCheckCircle} /> Correct! A new number has been generated.
    </>
);


3. Success Percentage Calculation:

const successPercentage = attempts === 0 ? 0 : ((score / attempts) * 100).toFixed(2);




---

Dependencies

React

React Toastify

FontAwesome


Install Dependencies

npm install react-toastify @fortawesome/react-fontawesome


---

Future Enhancements

Add difficulty levels (easy, medium, hard).

Include a timer for added challenge.

Enhance UI with animations.

Save high scores and track player history.



---

License

This project is licensed under the MIT License. See the LICENSE file for details.


---

Author

Developed by [Your Name]. Contributions are welcome! Feel free to reach out via email or GitHub.

