var A, firstData, B, secondData, click

click = document.querySelector("#button")
click.addEventListener("click", calculate)

function calculate() {
	catchNumbers()
	sum(A, B)
	subtraction(A, B)
	multiplication(A, B)
	division(A, B)
	power(A, B)
	squareRoot(A, B)
	factorial(A, B)
	percentage(A, B)
	average(A, B)
}

catchNumbers = () => {
	firstData = document.querySelector("#firstData")
	A = parseFloat(firstData.value)
	secondData = document.querySelector("#secondData")
	B = parseFloat(secondData.value)
}

sum = (a, b) => {
	var sum = document.getElementById("sum")
	sum.innerHTML = a + b
}

subtraction = (a, b) => {
	var subtractionAB = document.getElementById("subtractionAB")
	var subtractionBA = document.getElementById("subtractionBA")
	subtractionAB.innerHTML = a - b
	subtractionBA.innerHTML = b - a
}

multiplication = (a, b) => {
	var multiplication = document.getElementById("multiplication")
	multiplication.innerHTML = a * b
}

division = (a, b) => {
	var divisionAB = document.getElementById("divisionAB")
	var divisionBA = document.getElementById("divisionBA")
	divisionAB.innerHTML = Math.round((a / b) * 100) / 100
	divisionBA.innerHTML = Math.round((b / a) * 100) / 100
}

power = (a, b) => {
	var powerAB = document.getElementById("powerAB")
	var powerBA = document.getElementById("powerBA")
	powerAB.innerHTML = a ** b
	powerBA.innerHTML = b ** a
}

squareRoot = (a, b) => {
	var sqrtA = document.getElementById("sqrtA")
	var sqrtB = document.getElementById("sqrtB")
	sqrtA.innerHTML = Math.round(Math.sqrt(a) * 100) / 100
	sqrtB.innerHTML = Math.round(Math.sqrt(b) * 100) / 100
}

factorial = (a, b) => {
	var factorialA = document.getElementById("factorialA")
	var factorialB = document.getElementById("factorialB")
	factorialA.innerHTML = factorialCalculation(a)
	factorialB.innerHTML = factorialCalculation(b)
	function factorialCalculation(x) {
		var factorial = x
		for (i = 1; i < x; i++) {
			factorial = factorial * (x - i)
		}
		return factorial
	}
}

percentage = (a, b) => {
	var percentageAB = document.getElementById("percentageAB")
	var percentageBA = document.getElementById("percentageBA")
	percentageAB.innerHTML = Math.round((b / a) * 100) + "%"
	percentageBA.innerHTML = Math.round((a / b) * 100) + "%"
}

average = (a, b) => {
	var average = document.getElementById("average")
	average.innerHTML = Math.round(((b + a) / 2) * 100) / 100
}
