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
var numer = Math.floor(Math.random() * (8000000 - 5000000 + 1)) + 5000000;
var wiek = Math.floor(Math.random() * (80 - 18 + 1)) + 18;
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
