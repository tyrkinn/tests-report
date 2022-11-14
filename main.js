import 'bootstrap/dist/css/bootstrap.min.css';

const $ = id => document.getElementById(id);
const getControls = prefix => ({
	input: $(`${prefix}`),
	result: $(`${prefix}-result`),
	button: $(`${prefix}-btn`),
});

// Test 1
(() => {
	const {input, result} = getControls('test1');

	input.onblur = e => {
		const num = String(e.target.value);
		result.textContent = num.split('').reduce((acc, v) => acc + parseInt(v, 10), 0);
	};
})();

(() => {
	const {input, result} = getControls('test2');

	input.onblur = e => {
		const text = e.target.value;
		result.textContent = Math.max(...text.split(' ').map(w => w.length)) || 0;
	};
})();

(() => {
	const {input, result, button} = getControls('test3');
	button.onclick = () => {
		const year = input.value;
		const now = new Date();
		const curYear = now.getFullYear();
		if (curYear <= year) {
			return;
		}

		result.textContent = curYear - year;
	};
})();

(() => {
	const {input, result} = getControls('test4');
	const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
	input.onblur = e => {
		const inpValue = e.target.value;
		const date = new Date(inpValue);
		const day = date.getDay();
		result.textContent = days[day];
	};
})();

(() => {
	const {input, button} = getControls('test5');
	let letters = '0123456789qwertyuiopasdfghjklzxcvbnm'.split('');

	button.onclick = () => {
		letters.sort(() => Math.random() - 0.5);
		input.value = letters.slice(0, 8).join('');
	};
})();

(() => {
	const {input, result} = getControls('test6');

	input.onblur = e => {
		const text = e.target.value;
		if (text.trim().length > 0) {
			result.textContent = text.trim().split(' ').length;
		} else {
			result.textContent = 0;
		}
	};
})();

(() => {
	const isPali = word => word.split('').reverse().join('') === word;
	const {input, result, button} = getControls('test7');
	button.onclick = () => {
		const trimmedValue = input.value.trim().toLowerCase();
		if (trimmedValue.length === 0) {
			return;
		}

		result.textContent = isPali(trimmedValue) ? 'Палиндром' : 'Не палиндром';
	};
})();

(() => {
	const {input} = getControls('test8');
	input.onblur = e => {
		const value = Number(e.target.value);
		if (value > 0 && value < 101) {
			input.style.backgroundColor = 'green';
		} else {
			input.style.backgroundColor = 'red';
		}
	};
})();
