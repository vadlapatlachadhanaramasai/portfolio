document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. TYPING ANIMATION LOGIC
    // ==========================================
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    // The titles you want to rotate through
    // The sequence of phrases that will type out in order
const textArray = [
    "Chadhana", 
    "a Developer", 
    "a Problem Solver", 
    "a Full-Stack Engineer"
];
    const typingSpeed = 100;
    const erasingSpeed = 60;
    const newTextDelay = 2000; // Time gap between words
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingSpeed + 500);
        }
    }

    // Start the typing effect loop
    if(textArray.length) setTimeout(type, newTextDelay + 250);


    // ==========================================
    // 2. SCROLL REVEAL ANIMATION LOGIC
    // ==========================================
    const revealElements = document.querySelectorAll(".about-card, .skill-item, .timeline-item, .project-card");

    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = revealElements[i].getBoundingClientRect().top;
            let elementVisible = 100; // Triggers when element is 100px into view

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add("active");
            }
        }
    };

    // Run once on load and every time user scrolls
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); 
});
// ==========================================
// 3. LIGHT / DARK THEME TOGGLE CONTROLLER
// ==========================================
const themeToggleBtn = document.getElementById("theme-toggle");
const modeIcon = document.querySelector(".mode-icon");

themeToggleBtn.addEventListener("click", () => {
    // Toggle the .dark-theme class on the HTML body wrapper
    document.body.classList.toggle("dark-theme");
    
    // Switch icon styling states based on active theme
    if (document.body.classList.contains("dark-theme")) {
        modeIcon.textContent = "☀️"; // Sun icon during dark mode
    } else {
        modeIcon.textContent = "🌙"; // Moon icon during default light mode
    }
});