# YouTube Music Animations

This project is a web-based animation demo inspired by the YouTube Music interface. It showcases smooth transitions and interactive elements using HTML, CSS, and GSAP (GreenSock Animation Platform).

## 🚀 Online Demo

Check out the live demo here: **[https://youtube-music-animations.vercel.app/](https://youtube-music-animations.vercel.app/)**

## ℹ️ Important Note

**Figma Design & Documentation:**
You can find the link to the original Figma design and further documentation hidden within the application.
1.  Click on the **Search Bar** at the top of the page.
2.  The search bar will expand into its "active state".
3.  The links are located within this expanded view.

## 🛠️ Technologies Used

*   **HTML5**: Structure of the application.
*   **CSS3**: Styling, variables, and layout (Flexbox).
*   **JavaScript (ES6+)**: Logic for interactions.
*   **GSAP (GreenSock Animation Platform)**:
    *   `gsap.timeline()` for sequencing complex animations.
    *   `ScrollTrigger` (included in imports, ready for scroll-based effects).

## ✨ Features

*   **Onboarding Animation**: A sequence involving a progress bar, logo transformation, and element reveals upon loading.
*   **Interactive Music Player**: A mini-player that expands on click, featuring playback controls and track info.
*   **Dynamic Search Bar**: A search input that expands with a smooth clip-path animation to reveal "recent searches" (or links).
*   **Responsive Design**: Adapts to different screen sizes (desktop focused).

## 📂 Project Structure

```
├── index.html      # Main HTML file
├── style.css       # Stylesheet
├── script.js       # Animation and interaction logic
└── Images/         # Assets (SVGs and PNGs)
```

## 💿 How to Run Locally

1.  Clone the repository:
    ```bash
    git clone https://github.com/RamanFDIT/YouTube-Music-Animations.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd YouTube-Music-Animations
    ```
3.  Open `index.html` in your preferred web browser.
    *   *Tip: Use a live server extension in VS Code for the best experience.*

---
*Created by RamanFDIT*
