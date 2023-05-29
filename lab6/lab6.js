//Zadanie 1
class Prostokat {
    //a
    constructor (wysokoscP, szerokoscP,nazwaP){
        this.Pheight = wysokoscP;
        this.Pwidth = szerokoscP;
        this.Pname = nazwaP;
    }
    //c
    obwodP(){
            return("Obwod tego prostokata wynosi: " + (2*this.Pheight + 2*this.Pwidth));
        
        }
    //d
   poleP(){
            return parseInt((this.Pheight * this.Pwidth));
        
        }
        porownajP (prostokat2){
    if (this.poleP() > prostokat2.poleP()){
        console.log("Pole pierwszego prostokąta  jest większe");
        console.log(this.poleP());
    }
    else{
        console.log("Pole drugiego prostokąta  jest większe");
         console.log(prostokat2.poleP());
    }
}
}

 
//b
 const p1 = new Prostokat(2,4,"P1");
 const p2 = new Prostokat(1,4,"P2");
  const p3 = new Prostokat(2,1,"P3");
  p2.porownajP(p1);
 //Zadanie 2
 class Trojkat {
    //a
    constructor (wysokoscT, dlugosc_podstawyT,nazwaT){
        this.heightT = wysokoscT;
        this.baseLengthT = dlugosc_podstawyT ;
        this.nameT = nazwaT;
    }
 
    //c
   poleT(){
            return  parseInt(((this.heightT * this.baseLengthT))/2);
        
        }
    //d
        porownajT (trojkat2){
    if (this.poleT() > trojkat2.poleT()){
        console.log("Pole pierwszego trójkąta  jest większe");
        console.log(this.poleT());
    }
    else{
        console.log("Pole drugiego trójkąta  jest większe");
         console.log(trojkat2.poleT());
    }
}
}

 
//b
 const t1 = new Trojkat(2,4,"T1");
 const t2 = new Trojkat(1,4,"T2");
  const t3 = new Trojkat(2,1,"T3");
  t1.porownajT(t3);
  
  //Zadanie 3 
   class Trapez {
    constructor(wysokoscTP, podstawa1, podstawa2, nazwaTP) {
        this.TPheight = wysokoscTP;
        this.TPfirstBase = podstawa1;
        this.TPsecondBase = podstawa2;
        this.TPname = nazwaTP;
    }

    pole_trapezu() {
        return parseInt(((this.TPfirstBase + this.TPsecondBase) * this.TPheight) / 2);
    }

   }

const tp1 = new Trapez(2, 4, 3, "TP1");
const tp2 = new Trapez(1, 4, 2, "TP2");
const tp3 = new Trapez(2, 1, 5, "TP3");

//Zadanie 4
const trap = new Trapez(2, 4, 3, "Trap");
const prost = new Prostokat(2,4,"Prost");
const troj = new Trojkat(2,4,"Troj");
function NajwiekszaFigura ( pr, trp , tr){
    let figury_nazwy = [pr.Pname,trp.TPname,tr.nameT]
    let figury_pola = [pr.poleP(),trp.pole_trapezu(),tr.poleT()]
    let najwieksza_figura = Math.max(...figury_pola);
    if(najwieksza_figura == pr.poleP()){
        console.log("Największą figurą jest prostokat o polu "  + pr.poleP() + " i nazwie" + pr.Pname );
    }
    else if(najwieksza_figura == trp.pole_trapezu())  {
       console.log("Największą figurą jest trapez o polu "  + trp.pole_trapezu() + " i nazwie" + trp.TPname); 
    }
    else  {
       console.log("Największą figurą jest trójkąt o polu "  + tr.poleT() + " i nazwie" + tr.nameT ); 
    }
        
}

NajwiekszaFigura(prost, trap , troj);

//Zadanie 5 
function DwaProstokaty(pro1,pro2){
     if (pro1.obwodP > pro2.obwodP()){
        console.log("Obwód pierwszego prostokąta  jest większy");
         console.log(pro1);
    }
    else{
        console.log("Obwód drugiego prostokąta  jest większy");
         console.log(pro2);
    }
}
 const ps1 = new Prostokat(2,4,"Ps1");
 const ps2 = new Prostokat(1,4,"Ps2");
 DwaProstokaty(ps1,ps2);
 //Zadanie 6
function ZmienImieProstokata(pros,nowe_imie){
    pros.Pname = nowe_imie;
    console.log(pros);
}
ZmienImieProstokata(ps1,"Hot Dog z Żabki");
