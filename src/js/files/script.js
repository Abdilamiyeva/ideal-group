// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

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