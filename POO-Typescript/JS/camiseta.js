var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase (molde del objeto)
// export class Camiseta 
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color; // Asignamos el valor recibido como parámetro
        this.modelo = modelo; // Asignamos el valor recibido como parámetro
        this.marca = marca; // Asignamos el valor recibido como parámetro
        this.talla = talla; // Asignamos el valor recibido como parámetro
        this.precio = precio; // Asignamos el valor recibido como parámetro
    }
    // Métodos (funciones o acciones del objeto)
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camiseta;
}());
// Uso de la clase
var camiseta = new Camiseta("Rojo", "Tirantes", "Nike", "S", 10);
console.log(camiseta);
// HERENCIA
// clase hija
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var sudadera_nike = new Sudadera();
sudadera_nike.setCapucha(true);
sudadera_nike.setPrecio(15);
console.log(sudadera_nike);
