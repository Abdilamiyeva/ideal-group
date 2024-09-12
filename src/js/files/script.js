document.addEventListener("DOMContentLoaded", function () {
  // Popup
  const openSearchButton = document.querySelector(".js-open-search");
  if (openSearchButton) {
    openSearchButton.addEventListener("click", () =>
      document.body.classList.toggle("open-search")
    );
  }

  // Intro dots
  const introDots = document.querySelectorAll(".item-points__dot");
  if (introDots.length) {
    introDots.forEach((dot) => {
      const dotParent = dot.parentElement;
      dot.addEventListener("mouseover", () => {
        dotParent.classList.add("_hover");
      });
      dotParent.addEventListener("mouseleave", () =>
        dotParent.classList.remove("_hover")
      );
    });
  }

  // Dropdown
  const headerDropdown = document.getElementById("headerDropdown");
  const dropdownContent = document.getElementById("dropdownContent");
  if (headerDropdown && dropdownContent) {
    headerDropdown.addEventListener("mouseup", () => {
      dropdownContent.classList.toggle("active");
    });
  }

  // Sidebar
  const filterBtn = document.querySelector(".system__filter-btn");
  if (filterBtn) {
    filterBtn.addEventListener("click", function () {
      const content = document.querySelector(".system__left__content");
      const arrow = document.querySelector(".arrow");
      if (content) {
        content.classList.toggle("active-sidebar");
      }
      if (content.classList.contains("active-sidebar")) {
        arrow.style.transform = "rotate(-135deg)";
      } else {
        arrow.style.transform = "rotate(45deg)";
      }
    });
  }

  // Clear filter
  const clearBtn = document.querySelector("#clear__btn");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const rangeStart = document.querySelector("#value-start");
  const rangeEnd = document.querySelector("#value-end");
  const priceInputs = document.querySelectorAll(
    ".retail__price__values__wrapper input"
  );

  const defaultStart = "0 ₽";
  const defaultEnd = "147 000 ₽";

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });

      if (rangeStart) rangeStart.textContent = defaultStart;
      if (rangeEnd) rangeEnd.textContent = defaultEnd;

      priceInputs.forEach((input) => (input.value = ""));
    });
  }

  // Popup
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const popup = document.querySelector("#popup");
      if (popup) {
        popup.classList.add("popup_show");
        document.body.classList.add("popup-show");
      }
    });
  });

  document.querySelectorAll("[data-close]").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
      const popup = document.querySelector("#popup");
      if (popup) {
        popup.classList.remove("popup_show");
        document.body.classList.remove("popup-show");
      }
    });
  });

  // Order accordion
  const headers = document.querySelectorAll(".order__accordion__header");
  const contents = document.querySelectorAll(".order__accordion__content");

  headers.forEach((header, index) => {
    header.addEventListener("click", () => {
      contents[index].classList.toggle("active");
    });
  });

  const nextButtons = document.querySelectorAll(
    ".order__accordion__content__next--btn"
  );
  const prevButtons = document.querySelectorAll(
    ".order__accordion__content__prev--btn"
  );
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

  // Check input
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

  // map
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("map", {
      center: [55.7558, 37.6176], 
      zoom: 10,
    });

    var geocoder = ymaps.geocode("Москва, ул. Жебрунова д.6 стр. 1 офис 351", {
      results: 1,
    });

    geocoder.then(function (res) {
      var firstGeoObject = res.geoObjects.get(0);
      var coords = firstGeoObject.geometry.getCoordinates();

      myMap.setCenter(coords, 15);
      myMap.geoObjects.add(
        new ymaps.Placemark(coords, {
          balloonContent: "Москва, ул. Жебрунова д.6 стр. 1 офис 351",
        })
      );
    });
  }
  
  // rating
  document.querySelectorAll(".rating__input").forEach((input) => {
    input.addEventListener("change", function () {
      const ratingValue = this.value;

      fetch("/submit-rating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: ratingValue }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Успешно отправлено:", data);
        })
        .catch((error) => {
          console.error("Ошибка отправки:", error);
        });
    });
  });
});
