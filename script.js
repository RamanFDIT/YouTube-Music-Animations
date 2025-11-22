const tl = gsap.timeline();

tl.to(".progressCircle", { x: 760, duration: 1 })
  .to(".progressBar", { width: "100%", duration: 1 }, "<")
  .to(".playerProgress, .controlIconHide", {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
          document.querySelector(".playerControls").style.display = "none";
          document.querySelector(".playerProgress").style.display = "none";
      }
  })
  .to(".logoBuild", { y: 0, opacity: 1, duration: 0.5 })
  .to(".logoBuild", { width: "100%", height: "100vh", borderRadius: 0, duration: 0.5 })
  .to(".startButton", { y: -100, opacity: 1, duration: 0.6 });
const startButton = document.querySelector(".startButton");
startButton.addEventListener("click", () => {
    const tl2 = gsap.timeline();

    tl2.to(".startButton", { 
        opacity: 0, 
        duration: 0.01, 
        onComplete: () => { startButton.style.display = "none"; } 
    })
    .to(".logoBuild", {
        width: "8.5785rem",
        height: "8.5785rem",
        duration: 0.7,
        borderRadius: "50%"
    })
    .call(() => {
        const logoBuild = document.querySelector(".logoBuild");
        logoBuild.style.position = "absolute";
        document.querySelector(".controlIcon").src = "Images/playSmall.svg";
    })
    .to(".logoStyle", { width: "2.5785rem", height: "2.5785rem" }, "move")
    .to(".logoBuild", {
        width: "3.5785rem",
        height: "3.5785rem",
        top: "20px",
        left: "40px",
        duration: 0.7,
    }, "move")
    .to(".navigation, .topNav", { opacity: 1, duration: 0.7});
});
const navLinks = document.querySelectorAll(".navLinks");
navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        // Logic written using AI
        const yPosition = index * 140;
        gsap.to(
            ".activeIndicator",
            {
                y: yPosition,
                duration: 0.4,
                ease: "power2.out"
            }
        );
    });
});
const searchBar = document.querySelector(".searchContainer");
const searchActive = document.querySelector(".searchActive");
searchBar.addEventListener("click", () => {
    searchActive.style.display = "flex";
    searchBar.style.borderBottomLeftRadius = "0";
    searchBar.style.borderBottomRightRadius = "0";
    searchBar.style.borderBottom = "none";
    searchActive.style.borderTop = "none";
    gsap.to(
        ".searchActive",
        {
            opacity: 1,
            duration: 0.3,
        }
    );
});
