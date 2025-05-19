// omo the js

const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const cleanString = (str) => str.replace(/[^a-z0-9]/gi, '').toLowerCase();

function isPalindrome(str) {
	const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
	const reversed = cleaned.split('').reverse().join('');
	return cleaned === reversed;
}

const checkEntry = () => {
	const inputValue = textInput.value;

	if (!inputValue) {
		alert('Please input a value');
	} else {
		if (isPalindrome(inputValue)) {
			result.classList.remove('none');
			result.classList.add('checked');
			result.innerText = `${textInput.value} is a palindrome`;
			textInput.value = '';
		} else {
			result.classList.remove('none');
			result.classList.add('checked');
			result.innerText = `${textInput.value} is not a palindrome`;
			textInput.value = '';
		}
	}
};

checkBtn.addEventListener('click', checkEntry);
