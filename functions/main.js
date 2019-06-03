'use strict';
// Task 1
function getSolutions(a, b, c) {
	let D = b ** 2 - 4 * a * c;
	if (D < 0) {
		return {
			D: D
		};
	} else if (D === 0) {
		let x0 = -b / (2 * a);
		return {
			roots: [ x0 ],
			D: D
		};
	} else {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);
		return {
			roots: [ x1, x2 ],
			D: D
		};
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(1, 2, 3);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if (result.roots.length === 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
	} else {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}
showSolutionsMessage(1, 2, 3);
console.log('THE END');

// Task 2
function getAverageArray(arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	result /= arr.length;
	return result;
}
function getAverageScore(data) {
	let averageGrades = {};
	for (let key in data) {
		averageGrades[key] = getAverageArray(data[key]);
	}
	let average = 0;
	for (let key in averageGrades) {
		average += averageGrades[key];
	}
	average /= Object.keys(averageGrades).length;
	averageGrades.average = average;
	return averageGrades;
}
console.log(
	getAverageScore({
		algebra: [ 2, 4, 5, 2, 3, 4 ],
		geometry: [ 2, 4, 5 ],
		russian: [ 3, 3, 4, 5 ],
		physics: [ 5, 5 ],
		music: [ 2, 2, 6 ],
		english: [ 4, 4, 3 ],
		poetry: [ 5, 3, 4 ],
		chemistry: [ 2 ],
		french: [ 4, 4 ]
	})
);

// Task 3
function getName(number) {
	if (number === 0) {
		return 'Родриго';
	} else {
		return 'Эмильо';
	}
}
function getPersonData(secretData) {
	let personalData = {
		firstName: getName(secretData.aaa),
		lastName: getName(secretData.bbb)
	};
	return personalData;
}
console.log(
	getPersonData({
		aaa: 0,
		bbb: 0
	})
);
console.log(
	getPersonData({
		aaa: 1,
		bbb: 0
	})
);
console.log(
	getPersonData({
		aaa: 0,
		bbb: 1
	})
);
console.log(
	getPersonData({
		aaa: 1,
		bbb: 1
	})
);
