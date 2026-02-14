# 🌹 For Hazel - Valentine's Day Animation

A romantic, animated web experience created with HTML, CSS, and JavaScript. This project features a sequential animation that starts with a heartfelt message and reveals a glowing bouquet of red flowers with floating hearts.

## Features

* **Cinematic Intro:** A "black curtain" overlay that presents a personalized message before fading away.
* **CSS Art Flowers:** A procedurally animated bouquet of red tulips/roses created entirely with CSS (no images!).
* **Particle Effects:** JavaScript-generated floating hearts that drift infinitely in the background.
* **Responsive Design:** Works on desktop and mobile screens.
* **Smooth Transitions:** Uses `requestAnimationFrame` and CSS transitions for a lag-free experience.

## Project Structure

* `index.html`: Contains the HTML structure, the personalized text, and the container for the flowers.
* `style.css`: Handles all the visual styling, the deep red gradient background, and the complex CSS animations for the blooming flowers.
* `script.js`: Manages the timeline of events (Intro -> Text Fade -> Reveal -> Particles) to ensure everything plays in the perfect order.

## How to Run

1.  Download or clone this repository.
2.  Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
3.  Double-click `index.html` to open it in your default web browser.
4.  **Optional:** For a better mobile experience, you can host it on GitHub Pages or Netlify.

## Customization

If you want to change the name or the message, open `index.html` in any text editor (like VS Code or Notepad).

**To change the name:**
Look for this line and change "Hazel":
```html
<h1 id="t1">Hi, Hazel</h1>

```

**To change the message:**
Look for this block and type your own letter:

```html
<p id="t2">
    I'm sorry I can't afford a real flower yet,<br>
    but for now, please accept this flower of mine.
</p>

```

**To change the top quote:**
Find this div:

```html
<div id="valentine-text">Happy Valentine's!</div>

```

