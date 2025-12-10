# Milestone 2 Report — IT 3203 (Tavion)

## Overview
This milestone extends Milestone 1 (HTTP evolution site) by adding a dynamic quiz page, improving styling and layout, and documenting implementation.

## Requirements satisfied
- **Quiz page (separate):** `quiz.html` included and linked in main nav.
- **Form controls:** includes 1 fill-in-the-blank, 3 single-answer multiple-choice, and 1 multi-selection.
- **Styling:** single CSS file `style.css`. Demonstrates hover effects, paddings, margins, borders, color, and font settings.
- **Selectors:** uses element selectors (e.g., `body`), class selectors (e.g., `.container`, `.card`), and id selector (`#results`).
- **Layout requirement:** uses CSS Grid for main layout and Flex for navigation.
- **Functionality:** `quiz.js` grades answers on submit, displays overall PASS/FAIL, total score, per-question result (correct/incorrect), and user answer. Colors indicate pass/fail and per-question correctness. Reset clears inputs and results.
- **Documentation:** comments in `quiz.js` and in `style.css` explain implementation.
- **Deployment:** site ready for GitHub Pages (place files in repo root and enable Pages).

## How to test (locally)
1. Open `index.html` in browser.
2. Navigate to Quiz → answer questions → click Submit.
3. Verify results, per-question feedback, and Reset.

## Notes for instructor
- Passing threshold set at 60% (3/5).
- The multi-select requires both HTTPS and SSL to be selected to count as correct.

## Files to submit
- All HTML pages, `style.css`, `quiz.js`, this report, and screenshots of quiz results (capture using browser screenshot tool).

