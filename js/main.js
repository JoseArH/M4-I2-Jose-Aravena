import Proveedor from './Proveedor.js';
import Articulo from './Articulo.js';

document.getElementById('form-datos').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const nombreArticulo = document.getElementById('nombreArticulo').value;
    const precioArticulo = document.getElementById('precioArticulo').value;
    const emailProveedor = document.getElementById('emailProveedor').value;
    const telefonoProveedor = document.getElementById('telefonoProveedor').value;

    const proveedor = new Proveedor(nombreProveedor, nombreArticulo, precioArticulo);
    const articulo = new Articulo(nombreArticulo, emailProveedor, telefonoProveedor);

    const mensaje = articulo.getInfoProveedor(proveedor);
    document.getElementById('resultado').innerText = mensaje;
});

function calcularImpuesto(proveedor) {
    const tasaImpuesto = 0.19; 
    return proveedor.getPrecio * tasaImpuesto;
}
