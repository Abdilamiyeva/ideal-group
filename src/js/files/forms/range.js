// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss
// Підключення стилів з node_modules
import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	const valueStart = document.querySelector('#value-start'); 
    const valueEnd = document.querySelector('#value-end'); 
	
	if (priceSlider) {
		let textFrom = priceSlider.getAttribute('data-from');
		let textTo = priceSlider.getAttribute('data-to');
		noUiSlider.create(priceSlider, {
			start: [0, 147000],
      		connect: true,

			range: {
				'min': [0],
				'max': [200000]
			},
			tooltips:false,
			/*
			format: wNumb({
				decimals: 0
			})
			*/
			
		});
		
		priceSlider.noUiSlider.on('update', function (values) {
            valueStart.innerHTML = `${Math.round(values[0])}₽`;
            valueEnd.innerHTML = `${Math.round(values[1])}₽`;
        });

		// function setPriceValues() {
		// 	let priceStartValue;
		// 	let priceEndValue;
		// 	if (priceStart.value != '') {
		// 		priceStartValue = priceStart.value;
		// 	}
		// 	if (priceEnd.value != '') {
		// 		priceEndValue = priceEnd.value;
		// 	}
		// 	priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		// }
	}else{
		console.error('Не вдалося знайти елементи value-start або value-end в DOM');
	}
}
rangeInit();



