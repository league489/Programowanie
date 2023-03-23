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
    console.log("Jeszcze raz ");
}
//4
let liczba1=parseFloat(prompt('Podaj pierwszą  liczbę'));
let liczba2=parseFloat(prompt('Podaj drugą liczbę'));
let liczba3=parseFloat(prompt('Podaj trzecią liczbę'));

if(liczba1==liczba2 && liczba2==liczba3){
    console.log("Liczby są równe");
    document.getElementById("NajLiczba").innerHTML = "Liczby są równe ";
}
else if(liczba1>liczba2 && liczba1>liczba3)
{
console.log("Liczba " + liczba1 + "jest największa");
document.getElementById("NajLiczba").innerHTML = "Liczba " + liczba1  + " jest największa";
}
else if(liczba2>liczba1 && liczba2>liczba3)
{
console.log("Liczba " + liczba2 + "jest największa");
document.getElementById("NajLiczba").innerHTML = "Liczba " + liczba2  + " jest największa";
}
else if(liczba3>liczba1 && liczba3>liczba2)
{
console.log("Liczba " + liczba3 + "jest największa");
document.getElementById("NajLiczba").innerHTML = "Liczba " + liczba3  + " jest największa";
}
else
{
    console.log("Błąd");
    document.getElementById("NajLiczba").innerHTML = "Błąd";
}



