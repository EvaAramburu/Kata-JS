// RECURSOS GENERALES
let myName=('Eva');
let myText=('Mika');
let comida = ['ramen', 'okonomiyaki', 'sushi' , 'takoyaki' , 'yakisoba' , 'katsudon'];
let randomName = [prompt("Please enter a name"), prompt("Please enter another name"), prompt("Please enter another name"), prompt("Please enter another name")]; 
let myNumber=8; 
let myNumber2=5; 
let myNumber3=13;
let myNumber4= -35; 
let myNumber5= 76; 
let myNumber6= 111; 
let myNumber7= 27;
let myNumber8= 89; 
let myNumber9=41; 
let array=[3, 5, 18, -20, 45, -100, 39, -51];
let randomNumber= [prompt("Please enter a number"), prompt("Please enter a number"), prompt("Please enter a number"), prompt("Please enter a number")];





// 1 Muestre un “¡Hola Mundo!” por consola.
console.log('Hola mundo'); 

// 10 Lea tu nombre por consola y devuelva un “¡Hola tuNombre!”.

console.log(myName);

// 11 Lea un número por consola y devuelva el doble.

console.log(myNumber*2); 

// 100 Lea dos números por consola y devuelva su suma.

console.log(myNumber + myNumber2); 

// 101 Lea un número por consola y devuelva la mitad.

console.log(myNumber - myNumber2);

// 110 Lea dos números por consola y devuelva el mayor.

console.log(Math.max(myNumber, myNumber2));

// 111 Lea tres números por consola y devuelva el mayor.

console.log(Math.max(myNumber, myNumber2,myNumber3));

//1000 Lea dos números por consola e indique si son iguales.

console.log(myNumber == myNumber3); 

//1001 Lea dos nombres por consola e indique si son iguales.

console.log('myName'=='myText');

//1010 Lea dos números por consola y devuelva “Verdadero” si los dos son positivos o los
//dos son negativos. En caso contrario, que devuelva “Falso”.

if((myNumber>0&&myNumber4>0)||(myNumber<0&&myNumber4<0)){
    console.log("True");
}else{
console.log("False");}

//1011 Lea dos números por consola y devuelva “Verdadero” si uno es negativo y el otro
//positivo. En caso contrario, que devuelva “Falso”.

if((myNumber>0&&myNumber4<0)||(myNumber>0&&myNumber4<0)){
    console.log("True");
}else{
console.log("False");}

// 1100 Lea 10 números por consola y devuelva el mayor.

console.log(Math.max(myNumber, myNumber2, myNumber3, myNumber4, myNumber5, myNumber6, myNumber7, myNumber8, myNumber9)); 

// 1101 Lea tu nombre y devuelva “¡Hola tuNombre! Tu nombre tiene n caracteres.” Donde
//n sea la cantidad de caracteres de tuNombre.

console.log("Hola "+myName+"! "+"Tu nombre tiene "+myName.length+" caracteres");

// 1110 Lea 10 nombres y los devuelva ordenados alfabéticamente.

console.log(comida.sort());

//11111 Lea 10 números por consola y devuelva los negativos.

let negNumbers = array.filter(number => number < 0 );
console.log(negNumbers);

//10000 Lea una cantidad arbitraria de nombres y devuelva cuántos son.

console.log(comida.length);

//10001) Lea una cantidad arbitraria de nombres y devuelva la suma de todos sus
//caracteres.

let randomNameCaracteres =randomName.join('');
// el método .join te une todo el texto en un string y luego imprimimos la longitud de caracteres
console.log(randomNameCaracteres.length);

//10010 Lea 10 números por consola y devuelva el tercero mayor.

array.sort(function(a, b){return b-a});
let higherThird = array[2];
console.log(higherThird);

//10011 Bonus track: ¡Invente su propio “Elige tu propia aventura” por consola! En la
//consola se irá narrando una historia, en función de lo que el usuario vaya escogiendo, el
//desenlace será uno u otro. Deberá evitarse errores por mal uso de la consola. Debe
//capturarse la mayor cantidad posible de errores, indicando al usuario cómo proceder para
//evitarlos.

let esPrimo = numero => {
	// Casos especiales
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}

randomNumber.forEach(numero => {
	console.log("¿%d es primo? %s", numero, esPrimo(numero));
});



