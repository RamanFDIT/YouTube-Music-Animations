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
  .to(".logoBuild", { width: "100%", height: "110vh", borderRadius: 0, duration: 0.5 })
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
        onComplete: () => {
            document.querySelector(".songPlayer").style.display = "flex";
        }
    }, "move")
    .to(".navigation, .topNav, .songPlayer , .songSection", { opacity: 1, duration: 0.7, onComplete: () => {
        document.querySelector(".onboarding").style.height = "10vh";
        document.querySelector(".logoBuild").style.position = "fixed";
    }});
});
const navLinks = document.querySelectorAll(".navLinks");
navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
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
const searchIcon = document.querySelector(".searchIcon");
const topNav = document.querySelector(".topNav");

searchBar.addEventListener("click", () => {
    if(!searchActive.classList.contains("isOpen")){
        searchActive.classList.add("isOpen");
        searchIcon.src = "Images/cross.svg";
        topNav.style.alignItems = "flex-start";
        searchBar.style.borderRadius = "10px 10px 0 0";
        searchBar.style.borderBottom = "none";
    }
    else{
        searchActive.classList.remove("isOpen");
        searchIcon.src = "Images/search.svg";
        topNav.style.alignItems = "center";
        searchBar.style.borderRadius = "10px";
        searchBar.style.borderBottom = "2px solid #fff";
    }
});

const songPlayer = document.querySelector(".songPlayer");
songPlayer.addEventListener("click", () => {
    gsap.to(".songPlayer", {
        width: "90%",
        duration: 0.3
    });
    gsap.to(".songLinks", {
        opacity: 1,
        duration: 0.3
    });
});
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    gsap.to(".songPlayer", {
        width: "20%",
        duration: 0.3
    });
    gsap.to(".songLinks", {
        opacity: 0,
        duration: 0.3
    });
});