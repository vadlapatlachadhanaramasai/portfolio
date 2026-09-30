document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. TYPING ANIMATION LOGIC
    // ==========================================

    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = [
        "Chadhana",
        "a Developer",
        "a Problem Solver",
        "a Full-Stack Engineer"
    ];

    const typingSpeed = 100;
    const erasingSpeed = 60;
    const newTextDelay = 2000;

    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (!typedTextSpan || !cursorSpan) return;

        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing")) {
                cursorSpan.classList.add("typing");
            }

            typedTextSpan.textContent +=
                textArray[textArrayIndex].charAt(charIndex);

            charIndex++;

            setTimeout(type, typingSpeed);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (!typedTextSpan || !cursorSpan) return;

        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing")) {
                cursorSpan.classList.add("typing");
            }

            typedTextSpan.textContent =
                textArray[textArrayIndex].substring(0, charIndex - 1);

            charIndex--;

            setTimeout(erase, erasingSpeed);
        } else {
            cursorSpan.classList.remove("typing");

            textArrayIndex++;

            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }

            setTimeout(type, typingSpeed + 500);
        }
    }

    if (textArray.length && typedTextSpan && cursorSpan) {
        setTimeout(type, newTextDelay + 250);
    }


    // ==========================================
    // 2. SCROLL REVEAL ANIMATION LOGIC
    // ==========================================

    const revealElements = document.querySelectorAll(
        ".about-card, .skill-item, .timeline-item, .project-card"
    );

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;

        for (let i = 0; i < revealElements.length; i++) {
            const elementTop =
                revealElements[i].getBoundingClientRect().top;

            const elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].classList.add("active");
            }
        }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    // ==========================================
    // 3. LIGHT / DARK THEME TOGGLE CONTROLLER
    // ==========================================

    const themeToggleBtn = document.getElementById("theme-toggle");
    const modeIcon = document.querySelector(".mode-icon");

    if (themeToggleBtn && modeIcon) {
        themeToggleBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-theme");

            if (document.body.classList.contains("dark-theme")) {
                modeIcon.textContent = "☀️";
            } else {
                modeIcon.textContent = "🌙";
            }

        });
    }

});