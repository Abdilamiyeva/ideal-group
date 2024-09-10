// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import Swiper from "swiper";

//========================================================================================================================================================
const openSearchButton = document.querySelector('.js-open-search');

if (openSearchButton) {
    openSearchButton.addEventListener('click', () => document.body.classList.toggle('open-search'))
}

//========================================================================================================================================================
const introDots = document.querySelectorAll('.item-points__dot');

if (introDots.length) {
    introDots.forEach(dot => {
        const dotParent = dot.parentElement;
        dot.addEventListener('mouseover', () => {
            dotParent.classList.add('_hover')
        });
        dotParent.addEventListener('mouseleave', () => dotParent.classList.remove('_hover'))

    })
}

// dropdown
const headerDropdown = document.getElementById("headerDropdown");
const dropdownContent = document.getElementById("dropdownContent");

headerDropdown.addEventListener("mouseup", () => {
    dropdownContent.classList.toggle("active");
});

// sidebar 
// active-sidebar
document.querySelector('.system__filter-btn').addEventListener('click', function() {
    const content = document.querySelector('.system__left__content');
    content.classList.toggle('active-sidebar');
  });

// clear filter
const clearBtn = document.querySelector("#clear__btn");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const rangeStart = document.querySelector("#value-start");
const rangeEnd = document.querySelector("#value-end");
const priceInputs = document.querySelectorAll('.retail__price__values__wrapper input');

// Set default range values
const defaultStart = "0 ₽";
const defaultEnd = "147 000 ₽";

// Function to reset checkboxes and range values
clearBtn.addEventListener("click", () => {
  // Uncheck all checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  // Reset the range values
  rangeStart.textContent = defaultStart;
  rangeEnd.textContent = defaultEnd;

  // Clear the price input fields
  priceInputs.forEach(input => input.value = '');
});

// popup
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
      button.addEventListener('click', function () {
          const popup = document.querySelector('#popup');
          popup.classList.add('popup_show');
          document.body.classList.add('popup-show'); 
      });
  });

  document.querySelectorAll('[data-close]').forEach(closeBtn => {
      closeBtn.addEventListener('click', function () {
          const popup = document.querySelector('#popup');
          popup.classList.remove('popup_show');
          document.body.classList.remove('popup-show');
      });
  });
});

// swiper

  // let first_swiper = new Swiper('#swiper-first', {
  //   slidesPerView: 4,
  //   direction: getDirection(),
  //   navigation: {
  //       nextEl: "#next-btn",
  //       prevEl: "#prev-btn", 
  //   },
  //   on: {
  //     resize: function () {
  //       first_swiper.changeDirection(getDirection());
  //     },
  //   },
  // });

  // function getDirection() {
  //   var windowWidth = window.innerWidth;
  //   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  //   return direction;
  // }


