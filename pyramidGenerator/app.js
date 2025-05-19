// let myName = 'Micheal';

// console.log(myName.at(2));
// console.log(myName.charAt(2));
// console.log(myName.charCodeAt(1));
// console.log(myName.charCodeAt(3));
// console.log(myName.codePointAt(3));
// console.log(myName.concat(' Peter', ' Ekanem'));
// console.log(myName.endsWith('l', 10));
// console.log(myName.includes('M', 1));
// console.log(myName.indexOf('c'));
// console.log(myName.lastIndexOf('c'));
// // console.log(myName.localeCompare('Mich'));
// // console.log(myName.match('Micheal'));
// // console.log(myName.matchAll('Mic'));
// // console.log(myName.normalize('m'));
// console.log(myName.padEnd(2, 'q')); // this
// console.log(myName.repeat(10));
// console.log(myName.replace('M', 'Q'));
// console.log(myName.replaceAll('M', 'P'));
// console.log(myName.search('M'));
// console.log(myName.slice(2, 6));
// console.log(myName.split('h'));
// console.log(myName.startsWith('M'));
// console.log(myName.substring(1, 2));
// console.log(myName.toLocaleLowerCase());
// console.log(myName.toLowerCase());
// console.log(myName.trim());
// console.log(myName.valueOf());

// letmyNum = 10;

// myNum;

console.log('####################');

// set up ur const
const character = '#';
const count = 10;
const rows = [];
let inverted = true;

function padRow(rowNumber, rowCount) {
	return (
		' '.repeat(rowCount - rowNumber) +
		character.repeat(2 * rowNumber - 1) +
		' '.repeat(rowCount - rowNumber)
	);
}

for (let i = 1; i <= count; i++) {
	inverted ? rows.unshift(padRow(i, count)) : rows.push(padRow(i, count));
}

let result = '';
for (const row of rows) {
	result = result + row + '\n';
}

console.log(result);
