// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss
// Підключення стилів з node_modules
import 'nouislider/dist/nouislider.css';



document.addEventListener('DOMContentLoaded', function () {
    function rangeInit() {
        const priceSlider = document.querySelector('#range');
        const valueStart = document.querySelector('#value-start');
        const valueEnd = document.querySelector('#value-end');
        const inputFrom = document.querySelector('.from');
        const inputTo = document.querySelector('.to');    

        if (priceSlider) {
            noUiSlider.create(priceSlider, {
                start: [0, 147000],
                connect: true,
                range: {
                    'min': [0],
                    'max': [200000]
                },
                tooltips: false
            });

            priceSlider.noUiSlider.on('update', function (values) {
                valueStart.innerHTML = `${Math.round(values[0])}₽`;
                valueEnd.innerHTML = `${Math.round(values[1])}₽`;

                inputFrom.value = Math.round(values[0]);
                inputTo.value = Math.round(values[1]);
            });

            inputFrom.addEventListener('input', function () {
                priceSlider.noUiSlider.set([this.value, null]);
            });

            inputTo.addEventListener('input', function () {
                priceSlider.noUiSlider.set([null, this.value]);
            });
        } else {
            console.error('Не удалось найти элемент #range в DOM');
        }
    }

    rangeInit();
});

