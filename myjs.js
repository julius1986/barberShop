/*slider */
let mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

let mySwiper2 = new Swiper(".examples-swiper-container", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

let clientsSwiper = new Swiper(".clients-swiper-container", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    slideShadows: true,
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

clientsSwiper.height = "100px";

if (window.screen.availWidth < 768) {
  let burgerButton = document.querySelector(".header__burger-button");
  let headerMenu = document.querySelector(".header__menu");
  let body = document.querySelector("body");

  let menuElements = headerMenu.querySelectorAll("li");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("header__burger-button--active");
    headerMenu.classList.toggle("header__menu--active");
    body.classList.toggle("body-deactive");
  });

  menuElements.forEach((el) => {
    el.addEventListener("click", () => {
      burgerButton.classList.toggle("header__burger-button--active");
      headerMenu.classList.toggle("header__menu--active");
      body.classList.toggle("body-deactive");
    });
  });
}

/*Menu */
let listLink = document.querySelectorAll(".header__menu li a");

listLink.forEach((el) => {
  el.addEventListener("click", function () {
    let section = document
      .querySelector(this.getAttribute("data-menu-id"))
      .getBoundingClientRect();

    if (section.y == 0) {
      move = 0;
    } else {
      move = window.pageYOffset + section.y;
    }

    window.scrollTo({
      top: move,
      behavior: "smooth",
    });
  });
});

/*Fade in, fade out */
let hiddenEl = document.querySelectorAll(".hide-el");

let showHideEls = function (elArr) {
  let windowHeight = window.innerHeight;
  let windowYOffset = window.pageYOffset;
  hiddenEl.forEach((el) => {
    let elBorderTop = (el.getBoundingClientRect().top + windowYOffset) * 1.1; // 1.1 можно убрать
    let elBorderBottom =
      (el.getBoundingClientRect().bottom + windowYOffset) * 1.1; //1.1 немного уменьшают границы срабатывания для элемента

    if (
      windowYOffset + windowHeight > elBorderTop &&
      windowYOffset < elBorderBottom
    ) {
      el.classList.add("show-el");
    } else {
      el.classList.remove("show-el");
    }
  });
};

showHideEls(hiddenEl);

window.addEventListener("scroll", () => {
  showHideEls(hiddenEl);
});
