'use strict';

function calculateQuadraticEquation() {
	let a = +window.a.value;
	let b = +window.b.value;
	let c = +window.c.value;
	let result = getResult(a, b, c);
	window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
	let span = window.result;
	span.textContent = 'х = ' + result;
}

function getResult(a, b, c) {
	// код для задачи №1 писать здесь
	//return x;
	let d = b ** 2 - 4 * a * c;
	let root;
	let roots = [];
	if (d < 0) {
		console.log('Корней нет');
	} else if (d === 0) {
		root = -b / 2 * a;
		console.log(`Корень кравнения: ${root}`);
		return root;
	} else {
		roots[0] = (-b + Math.sqrt(d)) / 2 * a;
		roots[1] = (-b - Math.sqrt(d)) / 2 * a;
		console.log(`Корни уравнения: ${roots[0]} и ${roots[1]}`);
		return roots;
	}
}

function calculateDrinkTask() {
	let name = window.personName.value;
	let dateOfBirthday = new Date(window.dateOfBirthday.value);
	let drink = askDrink(name, dateOfBirthday);
	window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
	// код для задачи №3 писать здесь
	//console.log(result)
	//return result;
	let nowDate = new Date();
	let age = nowDate.getFullYear() - dateOfBirthday.getFullYear();
	if (age >= 18) {
		console.log(`Не желаете ли олд-фэшн, ${name}?`);
		return `Не желаете ли олд-фэшн, ${name}?`;
	} else {
		console.log(
			`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
		);
		return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	}
}

function calculateAverageRating() {
	let marks = window.marks.value.split('').map(Number).filter((n) => !isNaN(n) && n > 0);
	let averageMark = getAverageMark(marks);
	window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
	// код для задачи №2 писать здесь
	//return averageMark;
	marks.length = 5;
	let averageMark = 0;
	for (let i = 0; i < marks.length; i++) {
		averageMark += marks[i];
	}
	averageMark /= marks.length;
	console.log(`Средняя оценка : ${averageMark}`);
	return averageMark;
}
