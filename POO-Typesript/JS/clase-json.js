// Una manera "simple" de programacion orientada a objetos
// La clase en este caso es la bicicleta


var bicicleta = {
    color: "Rojo",
    ruedaSize: "28",
    tipo: "MTB",
    frenos: "disco",

    cambiaColor: function(new_color){
        // bicicleta.color = new_color;
        this.color = new_color;
        console.log(bicicleta);
    }

};

bicicleta.cambiaColor("azul");