class Articulo {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }

    getInfoProveedor(proveedor) {
        return `Proveedor: ${proveedor.getNombre}, Teléfono: ${this.telefono}`;
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getEmail() {
        return this.email;
    }

    set setEmail(email) {
        this.email = email;
    }

    get getTelefono() {
        return this.telefono;
    }

    set setTelefono(telefono) {
        this.telefono = telefono;
    }
}

export default Articulo;
