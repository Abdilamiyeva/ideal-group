/* Маски для полів (у роботі) */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input[type=tel]');
if (inputMasks.length > 0) {
	var im = new Inputmask("+7 (999) 999-99-99");
	im.mask(inputMasks);
}