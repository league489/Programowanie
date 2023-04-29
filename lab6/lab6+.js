//Zadanie 1
const tablica = [1,2,3,4,5,6];
console.log("1.   " + tablica.reduce((a, b) => a + b, 0));
console.log("2.   " + tablica.filter(element => element % 2 === 0));
console.log("3.   " + tablica.map(element => element * 3));
console.log("4.   " + tablica.push(67243) + tablica.indexOf(67243));
console.log("5.   " + tablica.reduce((a, b) => a + b, 0)/tablica.length);
console.log("6.   " + Math.max(...tablica));
console.log("7.   " + tablica.filter(element => element  === 1).length);
//Zadanie 2 
function fib( n ,tab){
    if (n == 0){
         tab[n] = 0;
        return 0;
    }
    else if(n == 1){
         tab[n] = 1;
        return 1;
    }
    else{
        tab[n] =  fib(n-1,tab) + fib(n-2,tab);
        return fib(n-1,tab) + fib(n-2,tab);
    }
}


    let a = 10;
    let tabela = new Array(a+1);
fib(a,tabela);
console.log(tabela);
 