let price = 19.5;
let cid = [
	['PENNY', 1.01],
	['NICKEL', 2.05],
	['DIME', 3.1],
	['QUARTER', 4.25],
	['ONE', 90],
	['FIVE', 55],
	['TEN', 20],
	['TWENTY', 60],
	['ONE HUNDRED', 100],
];

const denom = {
	PENNY: 0.01,
	NICKEL: 0.05,
	DIME: 0.1,
	QUARTER: 0.25,
	ONE: 1,
	FIVE: 5,
	TEN: 10,
	TWENTY: 20,
	'ONE HUNDRED': 100,
};

document.getElementById('purchase-btn').addEventListener('click', () => {
	const cash = parseFloat(document.getElementById('cash').value);
	const changeDueElem = document.getElementById('change-due');

	if (isNaN(cash)) {
		alert('Please enter a valid cash amount');
		return;
	}

	if (cash < price) {
		alert('Customer does not have enough money to purchase the item');
		return;
	}

	if (cash === price) {
		changeDueElem.textContent = 'No change due - customer paid with exact cash';
		return;
	}

	const changeNeeded = +(cash - price).toFixed(2);
	const originalCid = [...cid.map((c) => [c[0], c[1]])]; // Save original for 'CLOSED'
	const register = [...cid].reverse();

	let changeArr = [];
	let totalCid = +register.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);
	let remainingChange = changeNeeded;

	for (let [unit, amt] of register) {
		let unitValue = denom[unit];
		let used = 0;

		while (remainingChange >= unitValue && amt >= unitValue) {
			remainingChange = +(remainingChange - unitValue).toFixed(2);
			amt = +(amt - unitValue).toFixed(2);
			used = +(used + unitValue).toFixed(2);
		}

		if (used > 0) changeArr.push([unit, used]);
	}

	const totalUsed = +changeArr.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);

	if (totalUsed < changeNeeded) {
		changeDueElem.textContent = 'Status: INSUFFICIENT_FUNDS';
		return;
	}

	if (totalCid === changeNeeded) {
		const closedChange = originalCid
			.filter((c) => c[1] > 0)
			.map((c) => `${c[0]}: $${c[1].toFixed(2)}`);

		changeDueElem.textContent = `Status: CLOSED ${closedChange.join(' ')}`;
		return;
	}

	const formattedChange = changeArr.map((c) => `${c[0]}: $${c[1].toFixed(2)}`).join(' ');
	changeDueElem.textContent = `Status: OPEN ${formattedChange}`;
});
