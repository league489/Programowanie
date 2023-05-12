//function walidacja_dlugości(inputID) {
    //let max_dlugosc = 30;
   //let pole_do_zwalidowania_d = document.getElementById(inputID);
   //if (pole_do_zwalidowania_d.value <= max_dlugosc ) {
  
    //if(pole_do_zwalidowania_d.isEmpty()){
      //  alert("Pole jest puste");
     // }

   //alert("Poprawna długość pola");

    //return true;

  //} else {
  //  alert("Niepoprawna długość pola");

 //   return false;

 // }
 // }
 
 
 
 
  //function walidacja_maila(input_id) {
   // let pole_do_zwalidowania_m = document.getElementById(input_id);
    //let skladnia_maila = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
  //if(pole_do_zwalidowania_m.isEmpty()){
    //alert("Pole jest puste");
 // }

   // else if (input.value.match(skladnia_maila)) {
  
      //alert("Mail poprawny");
  

  
      //return true;
  
    //} else {
  
     // alert("Mail niepoprawny");
  
      //return false;
  
    //}
  
 // }


 function walidacja_dlugości(inputID) {
  let max_dlugosc = 30;
  let pole_do_zwalidowania_d = document.getElementById(inputID);
  if (pole_do_zwalidowania_d.value.length === 0) {
    alert("Pole jest puste");
    return false;
  } else if (pole_do_zwalidowania_d.value.length <= max_dlugosc) {
    alert("Poprawna długość pola");
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

function zwaliduj_formularz(){
  walidacja_dlugości("imie");
  walidacja_maila("mejl");
}
