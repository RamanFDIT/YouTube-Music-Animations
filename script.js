gsap.to(
    ".progressCircle",
    {
        x: 760,
        duration: 2,
    }
);
gsap.to(
    ".progressBar",
    {
        width: "100%",
        duration: 2,
        onComplete: () => {
            gsap.to(
                ".playerProgress, .controlIconHide",
                {
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                        const playerControls = document.querySelector(".playerControls");
                        const playerProgress = document.querySelector(".playerProgress");
                        playerControls.style.display = "none";
                        playerProgress.style.display = "none";
                    }
                }
            );
            gsap.to(
                ".logoBuild",
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    onComplete: () => {
                        gsap.to(
                            ".logoBuild",
                            {
                                width: "100%",
                                height: "100vh",
                                borderRadius: 0,
                                duration: 1,
                                onComplete: () => {
                                    gsap.to(
                                        ".startButton",
                                        {
                                            y: -100,
                                            opacity: 1,
                                            duration: 1,
                                        }
                                    );
                                }
                            }
                        );
                    }
                }
            );
        }
    }
);
const startButton = document.querySelector(".startButton");
startButton.addEventListener("click", () => {
    gsap.from(
        ".startButton",
        {
            opacity: 0,
            duration: 0.1,
            onComplete: () => {
                startButton.style.display = "none";
            }
        }
    );
    gsap.to(
        ".logoBuild",
        {
           width: "8.5785rem",
           height: "8.5785rem",
           duration: 1,
           borderRadius: "50%",
           onComplete: () => {
                const logoBuild =  document.querySelector(".logoBuild");
                logoBuild.style.position = "absolute";
                const playSmall = document.querySelector(".controlIcon");
                playSmall.src = "Images/playSmall.svg";
                gsap.to(
                    ".logoStyle",
                    {
                        width: "2.5785rem",
                        height: "2.5785rem",
                    }
                );
                gsap.to(
                    ".logoBuild",
                    {
                        width: "3.5785rem",
                        height: "3.5785rem",
                        top: "20px",
                        left: "40px",
                        duration: 1,
                        onComplete: () => {
                            gsap.to(
                                ".navigation", 
                                {
                                    opacity: 1,
                                    duration: 1,
                                }
                            );
                        }
                    }
                );
           }
        }    
    );
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
