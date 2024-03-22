console.log("Hola Mundo con TypeScript");
console.log("Compilacion Automatica: tsc -w *.ts");
console.log("Compilacion Automatica: tsc -w *.ts");


function getNumero(numero:number = 12):string{
    return "El numero es: "+ numero;
};
console.log(getNumero(55));

// Arrays
var lenguajes: Array<string> = ["php", "js", "css"];

let years: any[] = ["doce", 3, 4]; 