const buttons = document.querySelectorAll('.order__accordion--content__next--btn');
const contents = document.querySelectorAll('.order__accordion--content');
let currentIndex = -1;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < contents.length) {
            contents[currentIndex].classList.add('active');
        }
    });
});


