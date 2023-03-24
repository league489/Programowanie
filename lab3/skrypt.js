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
//5
function NWD(a,b) {
    if(a>b){
        while(a%b!=0){
var nwd = a%b;
a=b;
b = nwd;
        }
    }
    else if(a==b){
console.log("Liczby są równe , ich NWD wynosi 1");
document.getElementById("nwd").innerHTML = "Liczby są równe , ich NWD wynosi 1";
    }
    else{
        while(b%a!=0){
            var nwd = b%a;
            b=a;
            a = nwd;
                    }  
    }
  return nwd;
}

var x = NWD(12,40);
console.log("NWD podanych liczb wynosi "+ x);
document.getElementById("nwd").innerHTML = "NWD podanych liczb wynosi "+ x;
//6
let student1 = {imie:"Rafał",nazwisko:"Kiełbowicz", wiek:20};
let student2 = {imie:"Jan",nazwisko:"Kowalski", wiek:22};
let student3 = {imie:"Adam",nazwisko:"Nowak", wiek:21};
console.log(student1);
console.log(student2);
console.log(student3);
//7
let name = prompt("Podaj imię: ");
let surname = prompt("Podaj nazwisko: ");
let age = prompt("Podaj wiek: ");
let uczeń =  {imie:name,nazwisko:surname, wiek:age};
console.log(uczeń);
//8
function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.getElementById("zegar").innerHTML=(h + ":" + m + ":" + s);
}

setInterval(time,1000);