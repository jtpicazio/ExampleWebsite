function Addition() {
	var x, y;
	x = parseFloat(document.getElementById("firstNumber").value);
	y = parseFloat(document.getElementById("secondNumber").value);
	document.getElementById("answer").innerHTML = x + y;
}
function Subtraction() {
	var x, y;
	x = parseFloat(document.getElementById("firstNumber").value);
	y = parseFloat(document.getElementById("secondNumber").value);
	document.getElementById("answer").innerHTML = x - y;
}
function Multiplication() {
	var x, y;
	x = parseFloat(document.getElementById("firstNumber").value);
	y = parseFloat(document.getElementById("secondNumber").value);
	document.getElementById("answer").innerHTML = x * y;
}
function Division() {
	var x, y;
	x = parseFloat(document.getElementById("firstNumber").value);
	y = parseFloat(document.getElementById("secondNumber").value);
	document.getElementById("answer").innerHTML = x / y;
}