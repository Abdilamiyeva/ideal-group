document.addEventListener("DOMContentLoaded", function () {
  
  // order accordion
  const buttons = document.querySelectorAll(
    ".order__accordion__content__next--btn"
  );
  const contents = document.querySelectorAll(".order__accordion__content");
  let currentIndex = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex < contents.length) {
        contents[currentIndex].classList.add("active");
      }
    });
  });

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
