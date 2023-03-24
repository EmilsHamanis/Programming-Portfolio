let calculations = [];
let input = '';
let result =[];

function display(val) {
	document.getElementById('C1').value += val;
	//alert('C1')
}

function clearInputs(){
input = '';
document.getElementById('C1').value= '';
document.getElementById('ResP').innerHTML = '';
}

function solve() {
	// save input value in a variable
var num = document.getElementById('C1').value; 
//alert('solve')
var result = eval(num);
//console.log(num) 
document.getElementById('ResP').innerHTML = result;
 calculations.push(num + " = " + result);
 document.getElementById('C1').value = result;
 displayCalculations();
 //console.log(solve)
  }
 
 function displayCalculations() {
 document.getElementById('PrevCalc').innerHTML = calculations.join("    |    ");
 //console.log(calculations) 
 }