// Interface
interface CamisetaBase {
    setPrecio(precio:number):void;
    getPrecio():number;
} //estos dos metodos tienen que estar en la clase, es una especie de requisito


// Clase (molde del objeto)
// export class Camiseta 
class Camiseta implements CamisetaBase{

    // Propiedades (Caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    constructor(color: string, modelo: string, marca: string, talla: string, precio: number) { // Agregamos un constructor
        this.color = color; // Asignamos el valor recibido como parámetro
        this.modelo = modelo; // Asignamos el valor recibido como parámetro
        this.marca = marca; // Asignamos el valor recibido como parámetro
        this.talla = talla; // Asignamos el valor recibido como parámetro
        this.precio = precio; // Asignamos el valor recibido como parámetro
    }

    // Métodos (funciones o acciones del objeto)
    public setPrecio(precio: number) { // Corregimos el tipo de parámetro
        this.precio = precio;
    }

    public getPrecio():number { // Corregimos el nombre del método
        return this.precio;
    }
}

// Uso de la clase
var camiseta = new Camiseta("Rojo", "Tirantes", "Nike", "S", 10);
console.log(camiseta);

// HERENCIA
// clase hija
class Sudadera extends Camiseta {
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var sudadera_nike = new Sudadera();
sudadera_nike.setCapucha(true);
sudadera_nike.setPrecio(15);  //Metodo heredado
console.log(sudadera_nike);