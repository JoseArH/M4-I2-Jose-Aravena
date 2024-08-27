// Clases unificadas

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

class ProveedorEspecial extends Proveedor {
    constructor(nombre, articulo, precio, descuento) {
        super(nombre, articulo, precio);
        this.descuento = descuento;
    }

    calcularPrecioConDescuento() {
        return this.precio - (this.precio * this.descuento / 100);
    }
}

class Articulo {
    constructor(nombre, email, telefono, proveedor) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.proveedor = proveedor;
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

    getInfoProveedor() {
        return `Proveedor: ${this.proveedor.getNombre}, Teléfono: ${this.telefono}`;
    }
}

// Variables globales
const proveedores = [];

// Función para manejar la sumisión del formulario
document.getElementById('proveedor-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const nombreArticulo = document.getElementById('nombreArticulo').value;
    const precioArticulo = parseFloat(document.getElementById('precioArticulo').value);
    const emailProveedor = document.getElementById('emailProveedor').value;
    const telefonoProveedor = document.getElementById('telefonoProveedor').value;

    // Crear objetos de proveedor y artículo
    const proveedor = new Proveedor(nombreProveedor, nombreArticulo, precioArticulo);
    const articulo = new Articulo(nombreArticulo, emailProveedor, telefonoProveedor, proveedor);

    // Guardar en el array global
    proveedores.push({ proveedor, articulo });

    // Agregar opción al combobox si no existe
    const filtroProveedor = document.getElementById('filtroProveedor');
    if (![...filtroProveedor.options].some(option => option.value === nombreProveedor)) {
        const nuevaOpcion = document.createElement('option');
        nuevaOpcion.value = nombreProveedor;
        nuevaOpcion.text = nombreProveedor;
        filtroProveedor.add(nuevaOpcion);
    }

    // Actualizar la tabla
    actualizarTabla();

    // Limpiar el formulario
    document.getElementById('proveedor-form').reset();
});

document.getElementById('filtroProveedor').addEventListener('change', actualizarTabla);

function actualizarTabla() {
    const filtroProveedor = document.getElementById('filtroProveedor').value;
    const tbody = document.querySelector('#tabla-proveedores tbody');
    tbody.innerHTML = ''; // Limpiar tabla

    const proveedoresFiltrados = filtroProveedor === 'todos' ? proveedores : proveedores.filter(item => item.proveedor.getNombre === filtroProveedor);

    proveedoresFiltrados.forEach(item => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.proveedor.getNombre}</td>
            <td>${item.articulo.getNombre}</td>
            <td>$${item.proveedor.getPrecio.toFixed(2)}</td>
            <td>${item.articulo.getEmail}</td>
            <td>${item.articulo.getTelefono}</td>
        `;
        tbody.appendChild(fila);
    });
}
