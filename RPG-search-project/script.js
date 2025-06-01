const search = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const creatureName = document.getElementById('creature-name');
const creatureId = document.getElementById('creature-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const specialName = document.getElementById('special-name');
const specialDescription = document.getElementById('special-description');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const detail = document.getElementById('details');
const typeDiv = document.getElementById('types-div');

const validCreatureApi = 'https://rpg-creature-api.freecodecamp.rocks/api/creatures';
const singleCreatureApi = 'https://rpg-creature-api.freecodecamp.rocks/api/creature/';

function action() {
	detail.classList.add('show');
	hp.classList.add('show');
	attack.classList.add('show');
	defense.classList.add('show');
	specialAttack.classList.add('show');
	specialDefense.classList.add('show');
	speed.classList.add('show');
}

function removeAction() {
	detail.classList.remove('show');
	hp.classList.remove('show');
	attack.classList.remove('show');
	defense.classList.remove('show');
	specialAttack.classList.remove('show');
	specialDefense.classList.remove('show');
	speed.classList.remove('show');
}

const updateInterface = (data) => {
	creatureName.innerText = `${data.name.toUpperCase()}`;
	creatureId.innerText = `#${data.id}`;
	weight.innerText = `${data.weight}`;
	height.innerText = `${data.height}`;

	const typesHTML = data.types.map((type) => `<span class="power">${type.name}</span>`).join(' ');

	typeDiv.innerHTML = typesHTML;
	specialName.innerText = `${data.special.name}`;

	specialDescription.innerText = `${data.special.description}`;

	hp.innerText = `${data.stats[0].base_stat}`;
	attack.innerText = `${data.stats[1].base_stat}`;
	defense.innerText = `${data.stats[2].base_stat}`;
	specialAttack.innerText = `${data.stats[3].base_stat}`;
	specialDefense.innerText = `${data.stats[4].base_stat}`;
	speed.innerText = `${data.stats[5].base_stat}`;
};

const fetchData = async (value) => {
	try {
		const res = await fetch(validCreatureApi);
		const data = await res.json();

		const isMatch = data.some(
			({ id, name }) => value.toLowerCase() === name.toLowerCase() || Number(value) === id
		);
		if (isMatch) {
			action();

			const singleCreatureDetails = `${singleCreatureApi}${value}`;

			const details = await fetch(singleCreatureDetails);
			const singleData = await details.json();

			updateInterface(singleData);
		} else {
			removeAction();
			alert('Creature not found');
		}
	} catch (error) {
		console.error(error);
	}
};

const validateSearch = (e) => {
	const value = search.value.replace(/\s+/g, '').toLowerCase();
	if (!value) {
		search.reportValidity();
		return;
	}
	fetchData(value);
};

searchButton.addEventListener('click', validateSearch);

search.addEventListener('keydown', ({ key }) => {
	if (key === 'Enter') {
		validateSearch();
	}
});
