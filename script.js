function suma(num1,num2){
	document.getElementById("resultado").innerHTML='La suma es igual a '+(num1+num2);
}

function resta(num1,num2){
	document.getElementById("resultado").innerHTML='La resta es igual a '+(num1-num2);
}

function divide(num1,num2){
	document.getElementById("resultado").innerHTML='La división es igual a '+(num1/num2);
}

function multiplica(num1,num2){
	document.getElementById("resultado").innerHTML='La multiplicación es igual a '+(num1*num2);
}

function concatena(num1,num2){
	document.getElementById("resultado").innerHTML='La concatenación es igual a '+(num1+num2);
}

function par(num1,num2){
	document.getElementById("resultado").innerHTML=((num1+num2)%2==0);
}



