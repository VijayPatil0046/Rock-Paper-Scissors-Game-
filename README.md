# Rock Paper Scissor ✊🖐️✌️

A simple Rock–Paper–Scissor browser game built with plain HTML, CSS and JavaScript. Play locally — no build tools required. 🎯

## Preview
Open `index.html` in your browser or use the Live Server extension in VS Code to play instantly. 🖥️

## Contents
- `index.html` — game UI and markup
- `style.css` — styling, dark/light theme classes (`.darkModes`, `.lightModes`) 🎨
- `app.js` — game logic and DOM interactions ⚙️
- `images/` — icon assets (`Rock.png`, `Paper.png`, `Scissor.png`) 🖼️
- `LICENSE` — project license (MIT) 📜

## Features
- Click a choice (Rock / Paper / Scissor) to play a round. 👆
- Scoreboard updates for user and computer. 📊
- Dark / Light theme toggle. 🌙☀️
- Smooth CSS transitions and hover effects. ✨

## How to run (Windows, VS Code)
1. Open the project folder:
   code "c:\Users\Vijay Patil\Desktop\HTML\Rock-Paper-Scissor Game"
2. Open `index.html`:
   - Double-click `index.html` to open in default browser, or
   - In VS Code, right-click `index.html` -> Open with Live Server (recommended).
3. Play! Click a choice to start a round.

## Implementation notes
- Key functions in `app.js`:
  - `playGame()` — handles user choice and round flow.
  - `genCompChoice()` — randomly selects the computer's move.
  - `showWinner()` / `drawGame()` — update UI and scores.
  - Theme toggle — toggles `body` classes `.darkModes` / `.lightModes`.
- Styles in `style.css` handle layout, circular choice buttons, hover states, and theme colors.

## Suggestions / TODO
- Persist scores using localStorage to survive page reloads. 💾
- Add keyboard support and ARIA attributes for accessibility. ♿
- Add a "Reset" button and subtle win/lose animations. 🎉

## Contributing
Feel free to fork and submit PRs. Small improvements (accessibility, tests, animations) are welcome. 🔧

## License
This project is licensed under the MIT License.

---
Made with ❤️ by Vijay Patil (2025)
