
//REST
function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("fruta 1: ", fruta1);
    console.log("fruta 2: ", fruta2);
    console.log(restoDeFrutas);

}
listadoFrutas("Naranja", "limon", "pera", "sandia", "Coco");

//SPREAD
var frutas = ["Naranja", "limon"];
listadoFrutas( ...frutas, "pera", "sandia", "Coco");



//ANONYMUS
var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}
//CALLBACK
function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;
}

sumame(5, 7, function(dato){
    console.log("la suma es: ", dato);
},
function(dato){
    console.log("la suma por dos es: ",(dato*2));
});
