//z2
function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

function person(){
var personArray = [];
var ilosc_rekordow = document.getElementById("rekordy").value ;
const imiona = ["Katarzyna", "Elżbieta" , "Anna", "Mikołaj", "Dawid", "Andrzej"];
const nazwiska = ['Nowak', 'Mazur', "Dobek", "Kiełbowicz", "Basara", "Kazienko"];

for (var i = 0 ;i<ilosc_rekordow;i++){
    var imie = getRandomItem(imiona);
var nazwisko = getRandomItem(nazwiska);
var numer = Math.floor(Math.random() * 8000000) +  5000000;
var wiek =  Math.floor(Math.random() * 80) +  18;
var  osoba = {"Imie":imie , "Nazwisko":nazwisko , "Numer":numer, "Wiek":wiek};
personArray.unshift(osoba);
   //console.log(personArray);
}

const divElement = document.getElementById("generowane_osoby");
divElement.innerHTML = "";
for (let i = 0; i < personArray.length; i++) {
    const pElement = document.createElement("p");
    pElement.textContent = JSON.stringify(personArray[i]);
    divElement.appendChild(pElement);
  }
  

}
//3

function nowy_klient(){
    var baza_bankowa =[];
var n_klient_imie =  document.getElementById("klient_imie").value;
var n_klient_nazwisko =  document.getElementById("klient_nazwisko").value;
var n_klient_kasa =  document.getElementById("klient_kasa").value;
var n_klient_pin =  document.getElementById("klient_pin").value;
var klient = {"Imię ":n_klient_imie, "Nazwisko ":n_klient_nazwisko, "Stan konta ":n_klient_kasa, "PIN ":n_klient_pin}
baza_bankowa.unshift(klient);
document.getElementById("n_klient_lookup").innerHTML = baza_bankowa;
//alert("Dodano klienta");
}