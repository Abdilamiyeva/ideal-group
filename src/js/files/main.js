document.addEventListener("DOMContentLoaded", function () {
  
  // order accordion
// Заголовки и контент
const headers = document.querySelectorAll('.order__accordion__header');
const contents = document.querySelectorAll('.order__accordion__content');

// Добавляем обработчик на каждый заголовок
headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    // Переключаем класс 'active' для отображения или скрытия контента
    contents[index].classList.toggle('active');
  });
});

// Код для кнопок 'Далее'
const nextButtons = document.querySelectorAll(".order__accordion__content__next--btn");
const prevButtons = document.querySelectorAll(".order__accordion__content__prev--btn");
let currentIndex = 0;

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentIndex < contents.length - 1) {
      contents[currentIndex].classList.remove("active");
      currentIndex++;
      contents[currentIndex].classList.add("active");
    }
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentIndex > 0) {
      contents[currentIndex].classList.remove("active");
      currentIndex--;
      contents[currentIndex].classList.add("active");
    }
  });
});

// =================================

  // check input
  const checkAllBtn = document.querySelector(".basket__all--checkbtn");
  if (checkAllBtn) {
    checkAllBtn.addEventListener("change", function () {
      const allChecked = this.checked;
      const checkboxes = document.querySelectorAll(".basket__checkbtn");

      checkboxes.forEach((checkbox) => {
        checkbox.checked = allChecked;
      });
    });
  }

  // counter
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("counter__increment--btn")) {
      const wrapper = event.target.closest(".counter__wrapper");
      const input = wrapper.querySelector(".counter__btn--value");
      input.value = parseInt(input.value) + 1;
    }

    if (event.target.classList.contains("counter__decrement--btn")) {
      const wrapper = event.target.closest(".counter__wrapper");
      const input = wrapper.querySelector(".counter__btn--value");
      input.value = Math.max(0, parseInt(input.value) - 1);
    }
  });

  // accordion
//   document.querySelectorAll(".item .title").forEach((title) => {
//     title.addEventListener("click", function () {
//       const item = this.parentElement;
//       item.classList.toggle("active");
//     });
//   });
});
