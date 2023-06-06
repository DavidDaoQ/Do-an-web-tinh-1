//change navbar styles on scroll

window.addEventListener("scroll", () => { <<
    << << < HEAD
    document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 0); ===
    === =
    document
        .querySelector("nav")
        .classList.toggle("window-scroll", window.scrollY > 0); >>>
    >>> > b49843b0d0be97c5b39c22bf07b718469208ddb1
});
//show/hide faq answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");

        //change icon
        const icon = faq.querySelector(".faq__icon i");
        if (icon.className === "uil uil-plus") {
            icon.className = "uil uil-minus";
        } else {
            icon.className = "uil uil-plus";
        }
    });
});
// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => { <<
    << << < HEAD
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none"; ===
    === =
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none"; >>>
    >>> > b49843b0d0be97c5b39c22bf07b718469208ddb1
});
//close nav menu

const closeNav = () => { <<
    << << < HEAD
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav); ===
=== =
menu.style.display = "none";
closeBtn.style.display = "none";
menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav); >>>
>>> > b49843b0d0be97c5b39c22bf07b718469208ddb1