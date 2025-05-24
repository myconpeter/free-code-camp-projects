const input = document.getElementById('user-input');
const check = document.getElementById('check-btn');
const clear = document.getElementById('clear-btn');
const results = document.getElementById('results-div');

function telephoneCheck(str) {
	const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
	return regex.test(str);
}

const checkValue = () => {
	const value = input.value;

	const each = document.createElement('p');
	results.appendChild(each);
	if (!value) {
		alert('Please provide a phone number');
	} else {
		if (telephoneCheck(value)) {
			each.innerText += `Valid US number: ${value}`;
		} else {
			each.innerText += `Invalid US number: ${value}`;
		}

		input.value = '';
	}
};

const clearAll = () => {
	results.textContent = '';
};

check.addEventListener('click', checkValue);
input.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		checkValue();
	}
});

clear.addEventListener('click', clearAll);
