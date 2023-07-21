// menu show and hide toggle 
const menuIcon = document.getElementById("menu-icon");
const headerNav = document.getElementById("header-nav-list");
const headerNavItems = document.querySelectorAll('.header-nav-list li')

// @ts-ignore
menuIcon.addEventListener("click", () => {
    // @ts-ignore
    headerNav.classList.toggle("open");
    // @ts-ignore
    if (menuIcon.classList.contains("bx-grid-alt")) {
        // @ts-ignore
        menuIcon.className = "bx bx-chevrons-right";
        headerNavItems.forEach((item, index) => {
            item.classList.toggle("open");
            // @ts-ignore
            item.style.transitionDelay = `${index * 0.5}s`;
        })
    } else {
        // @ts-ignore
        menuIcon.className = "bx bx-grid-alt";
        // @ts-ignore
        headerNavItems.forEach((item, index) => {
            item.classList.toggle("open");
            // @ts-ignore
            item.style.transitionDelay = "0s";
        })
    }
})

// show scroll icon 
const scrollTopIcon = document.getElementById('scroll-top-icon');

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    // @ts-ignore
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)
    // scroll to top 
    // @ts-ignore
scrollTopIcon.addEventListener("click", () => {
    const scrollToTop = () => {
        if (window.pageYOffset > 0) {
            window.scroll(0, window.pageYOffset - 50);
            requestAnimationFrame(scrollToTop);
        }
    };
    scrollToTop();
})

//scroll reveal animation 
// scroller reveal 
// @ts-ignore
animateElement = (element, origin, delay, distance) => {
    // Initialize ScrollReveal with options
    // @ts-ignore
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: 1000,
        easing: 'ease',
        origin: origin
    });

    // Reveal the element
    sr.reveal(element);
}

// section header 
// @ts-ignore
animateElement('.section-header', 'left', 500, '250px');
// hero section 
// @ts-ignore
animateElement('.hero-img', 'top', 500, '250px');
// @ts-ignore
animateElement('.hero-content', 'bottom', 500, '100px');
// @ts-ignore
animateElement('.social-icon-list', 'right', 700, '250px');
// project section 
// @ts-ignore
animateElement('.project-1', 'left', 700, '250px');
// @ts-ignore
animateElement('.project-2', 'right', 900, '250px');
// about section 
// @ts-ignore
animateElement('.about-img', 'left', 700, '250px');
// @ts-ignore
animateElement('.about-info', 'right', 900, '250px');
// contact section 
// @ts-ignore
animateElement('.contact-form', 'right', 700, '250px');

// footer section 
// @ts-ignore
animateElement('.footer-section', 'bottom', 500, '250px');

// light and dark mode toggle 
const modeChangeIcon = document.getElementById("mode-change-icon");

// @ts-ignore
modeChangeIcon.addEventListener("click", () => {
    // @ts-ignore
    if (modeChangeIcon.classList.contains("bx-moon")) {
        // @ts-ignore
        modeChangeIcon.classList.remove("bx-moon");
        // @ts-ignore
        modeChangeIcon.classList.add("bx-sun");

        // toggle light and dark mode 
        document.body.classList.toggle('dark-theme');
    } else {
        // @ts-ignore
        modeChangeIcon.classList.remove("bx-sun");
        // @ts-ignore
        modeChangeIcon.classList.add("bx-moon");
        // toggle light and dark mode 
        document.body.classList.toggle('dark-theme');
    }
})