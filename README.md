# Web-APIs-Code-Quiz-4# JavaScript Code Quiz

## Description

This JavaScript Code Quiz is an interactive web application designed to test users' knowledge of JavaScript fundamentals. It features a timed quiz with multiple-choice questions, dynamically updated HTML and CSS powered by JavaScript, and a high score tracking system.

## Features

- Timed quiz with multiple-choice questions
- Dynamic updates to HTML and CSS
- Responsive design for various screen sizes
- High score tracking and storage
- Penalty for incorrect answers (time reduction)

## How to Use

1. Open the `code-quiz.html` file in a web browser.
2. Click the "Start Quiz" button to begin.
3. Answer the multiple-choice questions before the timer runs out.
4. For each incorrect answer, 10 seconds will be deducted from the timer.
5. After completing all questions or when the timer reaches 0, the quiz ends.
6. Enter your initials to save your score.
7. View high scores and optionally clear them.

## File Structure

- `code-quiz.html`: The main HTML file containing the structure of the quiz.
- `code-quiz-styles.css`: CSS file for styling the quiz interface.
- `code-quiz-script.js`: JavaScript file containing the quiz logic and functionality.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Local Storage for score persistence

## Installation

No installation is required. Simply clone or download the repository and open the `code-quiz.html` file in a web browser.
git clone https://github.com/Vivinyu/Web-APIs-Code-Quiz-4.git
cd Web-APIs-Code-Quiz-4
Copy
## Customization

To modify the quiz questions or add more:

1. Open the `code-quiz-script.js` file.
2. Locate the `questions` array at the beginning of the file.
3. Add, remove, or modify the question objects in the array.

Each question object should follow this structure:

```javascript
{
    question: "Your question here",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: 0 // Index of the correct answer in the choices array
}

