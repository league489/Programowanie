/*
zadanie 1 - kalkulator
*/
var a = 20;
var b = 10;

var add = a+b;
var sub = a-b;
var mul = a*b;
var div = a/b;
var mod = a%b;
//a)
console.log(add);
console.log("Wynik odejmowania to "+sub);
//b)
document.getElementById("wynik").innerHTML ="Wynik odejmowania to "+sub;
//2
var a = 2;
var b = 3;
var c = 4;
var p = (a+b+c)/2;
var pole = Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(pole);
document.getElementById("poleT").innerHTML = "Pole tego trójkąta wynosi:  "+pole;

//3
var liczbaLosowa = Math.ceil(Math.random*10);
var liczbaUsera = prompt("Podaj liczbe ");
if (liczbaUsera == liczbaLosowa){
    console.log("Dobra robota");
}
else{
    var liczbaUsera = prompt("Podaj liczbe ");
}
//4
let liczba1=parseFloat(prompt('Podaj pierwszą  liczbę'));
let liczba2=parseFloat(prompt('Podaj drugą liczbę'));
let liczba3=parseFloat(prompt('Podaj trzecią liczbę'));

if(liczba1=liczba2 && liczba2==liczba3;){
    console.log("Liczby są równe");
}else if{

}


