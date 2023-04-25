//Zadanie 1
class Prostokat {
    //a
    constructor (wysokosc, szerokosc,nazwa){
        this.height = wysokosc;
        this.width = szerokosc;
        this.name = nazwa;
    }
    //c
    obwod(){
            return("Obwod tego prostokata wynosi: " + (2*this.height + 2*this.width));
        
        }
    //d
   pole(){
            return("Pole tego prostokata wynosi: " + (this.height * this.width));
        
        }
}
//e
function porownaj (prostokat1,prostokat2){
    if (prostokat1.pole() > prostokat2.pole()){
        console.log("Pole pierwszego prostokąta  jest większe");
        console.log(prostokat1.pole());
    }
    else{
        console.log("Pole drugiego prostokąta  jest większe");
         console.log(prostokat2.pole());
    }
}
//b
 const p1 = new Prostokat(2,4,"P1");
 const p2 = new Prostokat(1,4,"P1");
  const p3 = new Prostokat(2,1,"P1");
  porownaj(p2,p3);
 //Zadanie 2