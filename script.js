/*==================================================
    PONZDZ SHOP
    Premium Gaming Website
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================
        LOADING SCREEN
    ==============================*/

    const loading = document.getElementById("loading");

    if (loading) {

        setTimeout(() => {

            loading.style.opacity = "0";

            loading.style.visibility = "hidden";

            loading.style.transition = "0.6s";

        }, 1200);

    }

    /*==============================
        HEADER SCROLL
    ==============================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /*==============================
        BACK TO TOP
    ==============================*/

    const backTop = document.getElementById("backTop");

    if (backTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 350) {

                backTop.style.opacity = "1";

                backTop.style.pointerEvents = "auto";

            } else {

                backTop.style.opacity = "0";

                backTop.style.pointerEvents = "none";

            }

        });

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*==============================
        ACTIVE MENU
    ==============================*/

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            const height = section.offsetHeight;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*==============================
        CURRENT YEAR
    ==============================*/

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});
/*==============================
    SEARCH SERVICE
==============================*/

const searchInput = document.querySelector(".search-box input");

const serviceCards = document.querySelectorAll(".service-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const keyword = searchInput.value.toLowerCase().trim();

        serviceCards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(keyword)) {

                card.style.display = "";

                card.style.opacity = "1";

                card.style.transform = "scale(1)";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/*==============================
    SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(

".service-card,.about-card,.contact-card,.hero-card"

);

const reveal = () => {

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 80) {

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

/*==============================
    BUTTON RIPPLE
==============================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left =

        (e.clientX - rect.left) + "px";

        ripple.style.top =

        (e.clientY - rect.top) + "px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});
/*==================================================
    INTERSECTION OBSERVER ANIMATION
==================================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

".service-card,.about-card,.contact-card,.hero-card"

).forEach(el => observer.observe(el));

/*==================================================
    FLOATING ZALO
==================================================*/

const zaloBtn = document.querySelector(".floating-zalo");

if (zaloBtn) {

    let lastScroll = 0;

    window.addEventListener("scroll", () => {

        const current = window.scrollY;

        if (current > lastScroll && current > 200) {

            zaloBtn.style.transform = "translateY(90px)";

        } else {

            zaloBtn.style.transform = "translateY(0)";

        }

        lastScroll = current;

    });

}

/*==================================================
    BUTTON HOVER SCALE
==================================================*/

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.animate([

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.05)"

            },

            {

                transform: "scale(1)"

            }

        ], {

            duration: 350

        });

    });

});

/*==================================================
    HERO PARALLAX
==================================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    if (!hero) return;

    const offset = window.scrollY * 0.3;

    hero.style.backgroundPositionY = `${offset}px`;

});

/*==================================================
    RANDOM GLOW
==================================================*/

setInterval(() => {

    document.querySelectorAll(".service-card").forEach(card => {

        card.classList.remove("active-glow");

    });

    const cards = document.querySelectorAll(".service-card");

    if (!cards.length) return;

    const random = Math.floor(Math.random() * cards.length);

    cards[random].classList.add("active-glow");

}, 2500);
/*==================================================
    MOBILE MENU
==================================================*/

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });

}

/*==================================================
    ACCORDION
==================================================*/

document.querySelectorAll(".accordion-header").forEach(header => {

    header.addEventListener("click", () => {

        const item = header.parentElement;

        item.classList.toggle("open");

    });

});

/*==================================================
    MOUSE SPOTLIGHT
==================================================*/

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);

        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);

    });

});

/*==================================================
    HERO BUTTON EFFECT
==================================================*/

document.querySelectorAll(".hero .btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.classList.add("pulse");

    });

    btn.addEventListener("mouseleave", () => {

        btn.classList.remove("pulse");

    });

});

/*==================================================
    LAZY IMAGE EFFECT
==================================================*/

const lazyImages = document.querySelectorAll("img[data-src]");

if ("IntersectionObserver" in window) {

    const imageObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const img = entry.target;

            img.src = img.dataset.src;

            img.removeAttribute("data-src");

            observer.unobserve(img);

        });

    });

    lazyImages.forEach(img => imageObserver.observe(img));

}
/*==================================================
    PAGE LOADER FADE
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/*==================================================
    COPY CONTACT
==================================================*/

document.querySelectorAll("[data-copy]").forEach(item => {

    item.addEventListener("click", () => {

        const text = item.dataset.copy;

        navigator.clipboard.writeText(text);

        item.classList.add("copied");

        setTimeout(() => {

            item.classList.remove("copied");

        }, 1200);

    });

});

/*==================================================
    ACTIVE SECTION
==================================================*/

const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY + 200;

    allSections.forEach(sec => {

        if (

            scroll >= sec.offsetTop &&

            scroll < sec.offsetTop + sec.offsetHeight

        ) {

            document.body.setAttribute(

                "data-section",

                sec.id

            );

        }

    });

});

/*==================================================
    PARALLAX GLOW
==================================================*/

const aurora = document.querySelector(".aurora");

window.addEventListener("mousemove", (e) => {

    if (!aurora) return;

    const x = (e.clientX / window.innerWidth) * 30;

    const y = (e.clientY / window.innerHeight) * 30;

    aurora.style.transform =

        `translate(${x}px, ${y}px)`;

});

/*==================================================
    RANDOM HERO ICON
==================================================*/

const heroIcons = [

    "fa-gamepad",

    "fa-shield-halved",

    "fa-bolt",

    "fa-rocket",

    "fa-fire"

];

const heroIcon = document.querySelector(".hero-icon i");

if (heroIcon) {

    let index = 0;

    setInterval(() => {

        heroIcon.className =

            "fa-solid " + heroIcons[index];

        index++;

        if (index >= heroIcons.length) {

            index = 0;

        }

    }, 2500);

}

/*==================================================
    PERFORMANCE
==================================================*/

console.log(

"%cPONZDZ SHOP",

"color:#00E5FF;font-size:22px;font-weight:bold;"

);

console.log(

"Premium Gaming Store"

);