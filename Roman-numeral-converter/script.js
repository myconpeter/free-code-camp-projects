// we are starting

const inputNumber = document.getElementById('number');
const result = document.getElementById('output');
const convert = document.getElementById('convert-btn');
const resultContainer = document.getElementById('result-container');

console.log(inputNumber, result, convert);

// when i click convert element without anything || negative || > 4000
const romanMap = [
	{ value: 1000, symbol: 'M' },
	{ value: 900, symbol: 'CM' },
	{ value: 500, symbol: 'D' },
	{ value: 400, symbol: 'CD' },
	{ value: 100, symbol: 'C' },
	{ value: 90, symbol: 'XC' },
	{ value: 50, symbol: 'L' },
	{ value: 40, symbol: 'XL' },
	{ value: 10, symbol: 'X' },
	{ value: 9, symbol: 'IX' },
	{ value: 5, symbol: 'V' },
	{ value: 4, symbol: 'IV' },
	{ value: 1, symbol: 'I' },
];

const romanConverter = (num) => {
	let result = '';
	romanMap.forEach(({ value, symbol }) => {
		while (num >= value) {
			result += symbol;
			num -= value;
		}
	});

	return result;
};

const checkUserInput = () => {
	const number = parseInt(inputNumber.value);

	resultContainer.classList.remove('hidden');
	if (!inputNumber.value) {
		result.innerText = 'Please enter a valid number';
		return;
	} else if (number <= 1) {
		result.innerText = 'Please enter a number greater than or equal to 1.';
		return;
	} else if (number >= 4000) {
		result.innerText = 'Please enter a number less than or equal to 3999';
	} else {
		result.innerText = romanConverter(number);
		inputNumber.value = '';
	}
};

convert.addEventListener('click', checkUserInput);

inputNumber.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		checkUserInput();
	}
});
