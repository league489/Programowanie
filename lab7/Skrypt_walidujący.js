


 function walidacja_dlugości(inputID) {
  let max_dlugosc = 30;
  let pole_do_zwalidowania_d = document.getElementById(inputID);
  if (pole_do_zwalidowania_d.value.length === 0) {
    alert("Pole jest puste");
    return false;
  } else if (pole_do_zwalidowania_d.value.length <= max_dlugosc) {
    alert("Poprawna długość pola " + inputID);
    return true;
  } else {
    alert("Niepoprawna długość pola");
    return false;
  }
}

function walidacja_maila(input_id) {
  let pole_do_zwalidowania_m = document.getElementById(input_id);
  let skladnia_maila = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (pole_do_zwalidowania_m.value.length === 0) {
    alert("Pole jest puste");
    return false;
  } else if (pole_do_zwalidowania_m.value.match(skladnia_maila)) {
    alert("Mail poprawny");
    return true;
  } else {
    alert("Mail niepoprawny");
    return false;
  }
}

function czyDorosly(data_f) {
  const dzisiejsza = new Date();
  const data_podana = new Date(document.getElementById("urodziny").value);
  const dzisiejszy_rok = dzisiejsza.getFullYear();
  const data_podana_rok = data_podana.getFullYear();
  const wiek = dzisiejszy_rok - data_podana_rok;
  if (wiek >= 18){
    alert("Pełnoletni" + wiek);
    return true;
  }
  else{
    alert("Niepełnoletni");
    return false;
  }
}

function czHaslaZgodne(has1,has2){
  const haslo1 = document.getElementById(has1).value;
  const haslo2 = document.getElementById(has2).value;
  if(haslo1 == haslo2){
    document.getElementById("wynik_walidacji").innerHTML += "Hasła zgodne";
    return true;
  }
  else{
    document.getElementById("wynik_walidacji").innerHTML += "Hasła niezgodne";
    return false;
  }
}
function sila_hasla(has){
const hass = document.getElementById("haslo");
const kryteria= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
if (hass.length === 0) {
  alert("Pole jest puste");
  return false;
} else if (hass.value.match(kryteria)) {
  alert("Silne hasło");
  return true;
} else {
  alert("Słabe hasło");
  return false;
}


}

function zwaliduj_formularz(){
const V_imie = walidacja_dlugości("imie");
const V_nazwisko = walidacja_dlugości("nazwisko");
const V_mail =  walidacja_maila("mejl");
const V_czy18 = czyDorosly("urodziny");
const V_hassP = sila_hasla("haslo");
const V_zgodnosc_hasel = czHaslaZgodne("haslo","powtorz_haslo");
 if (V_imie && V_nazwisko && V_mail && V_czy18 && V_hassP &&V_zgodnosc_hasel){
  document.getElementById("wynik_walidacji").innerHTML += "Poprawnie wypełniony formularz";
 }
 else{
  document.getElementById("wynik_walidacji").innerHTML += "Formularz zawiera błąd";
 }

}
