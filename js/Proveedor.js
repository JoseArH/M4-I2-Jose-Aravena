class Proveedor {
    constructor(nombre, articulo, precio) {
        this.nombre = nombre;
        this.articulo = articulo;
        this.precio = precio;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getArticulo() {
        return this.articulo;
    }

    set setArticulo(articulo) {
        this.articulo = articulo;
    }

    get getPrecio() {
        return this.precio;
    }

    set setPrecio(precio) {
        this.precio = precio;
    }
}

export default Proveedor;
