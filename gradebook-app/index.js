function getAverage(scores) {
	// 	const num = 0;

	return scores.reduce((a, b) => a + b, 0) / scores.length;
}

// function getAverage(scores) {
// 	let num = 0;
// 	for (let score of scores) {
// 		num += score;
// 	}

// 	return num / scores.length;
// }

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
	if (score === 100) return 'A++';
	else if (score >= 90 && score <= 99) return 'A';
	else if (score >= 90 && score <= 99) return 'A';
	else if (score >= 80 && score <= 89) return 'B';
	else if (score >= 70 && score <= 79) return 'C';
	else if (score >= 60 && score <= 69) return 'D';
	else return 'F';
}

// function getGrade(score) {
//     if (score === 100) return 'A++';
//     if (score >= 90) return 'A';
//     if (score >= 80) return 'B';
//     if (score >= 70) return 'C';
//     if (score >= 60) return 'D';
//     return 'F';
//   }

// console.log(getGrade(100));
// console.log(getGrade(82));
// console.log(getGrade(56));

function hasPassingGrade(score) {
	let grade = getGrade(score);
	return grade === 'F' ? false : true;
}

// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));

function studentMsg(totalScores, studentScore) {
	const isPassed = hasPassingGrade(studentScore);

	if (isPassed) {
		return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(
			studentScore
		)}. You passed the course.`;
	} else {
		return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(
			studentScore
		)}. You failed the course.`;
	}
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 70));
