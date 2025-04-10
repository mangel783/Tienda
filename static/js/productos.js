
  // productos.js

// Lista de productos con precios en MXN
const productos = [
  { id: 1, nombre: 'Laptop HP', descripcion: 'Laptop con procesador i7 y 16GB de RAM', precio: 15000, imagen: 'https://via.placeholder.com/300x200?text=Laptop+HP' },
  { id: 2, nombre: 'Smartphone Samsung Galaxy', descripcion: 'Smartphone con cámara de 48MP y pantalla AMOLED', precio: 7000, imagen: 'https://via.placeholder.com/300x200?text=Smartphone+Samsung+Galaxy' },
  { id: 3, nombre: 'Audífonos Bose', descripcion: 'Audífonos con cancelación de ruido', precio: 4000, imagen: 'https://via.placeholder.com/300x200?text=Audífonos+Bose' },
  { id: 4, nombre: 'Tablet Samsung Galaxy Tab', descripcion: 'Tablet con pantalla de 10.4" y 64GB de almacenamiento', precio: 6000, imagen: 'https://via.placeholder.com/300x200?text=Tablet+Samsung+Galaxy+Tab' },
  { id: 5, nombre: 'Reloj Garmin Forerunner', descripcion: 'Reloj deportivo con GPS y monitor de ritmo cardíaco', precio: 5000, imagen: 'https://via.placeholder.com/300x200?text=Reloj+Garmin+Forerunner' },
  { id: 6, nombre: 'Smartwatch Apple Watch Series 6', descripcion: 'Reloj inteligente con monitorización de oxígeno en sangre', precio: 8000, imagen: 'https://via.placeholder.com/300x200?text=Smartwatch+Apple+Watch+Series+6' },
  { id: 7, nombre: 'Cámara Canon EOS Rebel', descripcion: 'Cámara digital réflex con lente de 18-55mm', precio: 12000, imagen: 'https://via.placeholder.com/300x200?text=Cámara+Canon+EOS+Rebel' },
  { id: 8, nombre: 'AirPods Pro', descripcion: 'Auriculares inalámbricos con cancelación de ruido', precio: 5000, imagen: 'https://via.placeholder.com/300x200?text=AirPods+Pro' },
  { id: 9, nombre: 'Monitor LG UltraWide', descripcion: 'Monitor ultrapanorámico 34" para productividad', precio: 7000, imagen: 'https://via.placeholder.com/300x200?text=Monitor+LG+UltraWide' },
  { id: 10, nombre: 'Teclado mecánico Logitech', descripcion: 'Teclado mecánico retroiluminado para gamers', precio: 2000, imagen: 'https://via.placeholder.com/300x200?text=Teclado+mecánico+Logitech' },
  { id: 11, nombre: 'Mouse inalámbrico Logitech', descripcion: 'Mouse inalámbrico ergonómico y preciso', precio: 800, imagen: 'https://via.placeholder.com/300x200?text=Mouse+inalámbrico+Logitech' },
  { id: 12, nombre: 'Auriculares JBL', descripcion: 'Auriculares Bluetooth con sonido de alta calidad', precio: 1500, imagen: 'https://via.placeholder.com/300x200?text=Auriculares+JBL' },
  { id: 13, nombre: 'Bocina Bluetooth Bose', descripcion: 'Bocina inalámbrica resistente al agua', precio: 3500, imagen: 'https://via.placeholder.com/300x200?text=Bocina+Bluetooth+Bose' },
  { id: 14, nombre: 'Laptop Dell XPS 13', descripcion: 'Laptop ultra delgada con procesador Intel Core i7', precio: 18000, imagen: 'https://via.placeholder.com/300x200?text=Laptop+Dell+XPS+13' },
  { id: 15, nombre: 'Smartphone Xiaomi Mi 11', descripcion: 'Smartphone con cámara de 108MP y 5G', precio: 10000, imagen: 'https://via.placeholder.com/300x200?text=Smartphone+Xiaomi+Mi+11' },
  { id: 16, nombre: 'Pantalla 4K Samsung', descripcion: 'Pantalla LED 4K con HDR10+ y 120Hz de tasa de refresco', precio: 12000, imagen: 'https://via.placeholder.com/300x200?text=Pantalla+4K+Samsung' },
  { id: 17, nombre: 'Laptop MacBook Air', descripcion: 'Laptop con chip M1 y 8GB de RAM', precio: 25000, imagen: 'https://via.placeholder.com/300x200?text=Laptop+MacBook+Air' },
  { id: 18, nombre: 'Cámara GoPro Hero 9', descripcion: 'Cámara deportiva 4K resistente al agua', precio: 9000, imagen: 'https://via.placeholder.com/300x200?text=Cámara+GoPro+Hero+9' },
  { id: 19, nombre: 'Proyector BenQ', descripcion: 'Proyector de cine en casa 1080p', precio: 7000, imagen: 'https://via.placeholder.com/300x200?text=Proyector+BenQ' },
  { id: 20, nombre: 'Nintendo Switch', descripcion: 'Consola de videojuegos portátil con juegos incluidos', precio: 8000, imagen: 'https://via.placeholder.com/300x200?text=Nintendo+Switch' },
  { id: 21, nombre: 'Reloj Casio G-Shock', descripcion: 'Reloj digital resistente al agua', precio: 1500, imagen: 'https://via.placeholder.com/300x200?text=Reloj+Casio+G-Shock' },
  { id: 22, nombre: 'Vino Tinto Cabernet Sauvignon', descripcion: 'Vino tinto de 750ml, 12% de alcohol', precio: 300, imagen: 'https://via.placeholder.com/300x200?text=Vino+Cabernet+Sauvignon' },
  { id: 23, nombre: 'Café Gourmet', descripcion: 'Café molido premium 250g', precio: 200, imagen: 'https://via.placeholder.com/300x200?text=Café+Gourmet' },
  { id: 24, nombre: 'Cámara de seguridad Arlo', descripcion: 'Cámara de seguridad inalámbrica HD', precio: 4000, imagen: 'https://via.placeholder.com/300x200?text=Cámara+de+seguridad+Arlo' },
  { id: 25, nombre: 'Smartphone Motorola Moto G', descripcion: 'Smartphone de gama media con buena cámara', precio: 4000, imagen: 'https://via.placeholder.com/300x200?text=Smartphone+Motorola+Moto+G' },
  { id: 26, nombre: 'Auriculares Sony WH-1000XM4', descripcion: 'Auriculares inalámbricos con cancelación de ruido', precio: 7000, imagen: 'https://via.placeholder.com/300x200?text=Auriculares+Sony+WH-1000XM4' },
  { id: 27, nombre: 'Mini Drone DJI', descripcion: 'Drone compacto con cámara 4K', precio: 9000, imagen: 'https://via.placeholder.com/300x200?text=Mini+Drone+DJI' },
  { id: 28, nombre: 'Smartphone Huawei P40', descripcion: 'Smartphone con cámara Leica y 5G', precio: 9500, imagen: 'https://via.placeholder.com/300x200?text=Smartphone+Huawei+P40' },
  { id: 29, nombre: 'Cámara Fujifilm Instax', descripcion: 'Cámara instantánea para fotos retro', precio: 3000, imagen: 'https://via.placeholder.com/300x200?text=Cámara+Fujifilm+Instax' },
  { id: 30, nombre: 'Auriculares Beats Studio', descripcion: 'Auriculares con sonido premium y cancelación activa de ruido', precio: 6500, imagen: 'https://via.placeholder.com/300x200?text=Auriculares+Beats+Studio' },
  { id: 31, nombre: 'Toner HP LaserJet', descripcion: 'Cartucho de tinta compatible con impresoras HP LaserJet', precio: 800, imagen: 'https://via.placeholder.com/300x200?text=Toner+HP+LaserJet' },
  { id: 32, nombre: 'Pantalla LG 27"', descripcion: 'Pantalla de 27" Full HD con tecnología IPS', precio: 5000, imagen: 'https://via.placeholder.com/300x200?text=Pantalla+LG+27"' },
  { id: 33, nombre: 'Lentes Ray-Ban Aviator', descripcion: 'Gafas de sol con diseño clásico', precio: 3000, imagen: 'https://via.placeholder.com/300x200?text=Lentes+Ray-Ban+Aviator' },
  { id: 34, nombre: 'Silla Gamer DXRacer', descripcion: 'Silla ergonómica para gamers', precio: 7500, imagen: 'https://via.placeholder.com/300x200?text=Silla+Gamer+DXRacer' }
];


function obtenerCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  return carrito;
}


function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}


function agregarAlCarrito(idProducto, cantidad) {
  let carrito = obtenerCarrito();
  const producto = productos.find(p => p.id === idProducto);
  
  if (producto) {
      const index = carrito.findIndex(item => item.id === idProducto);
      
      
      if (index !== -1) {
          carrito[index].cantidad += cantidad;
      } else {
          
          carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad });
      }

      
      guardarCarrito(carrito);
      return true;
  }

  return false;
}


function eliminarDelCarrito(idProducto) {
  let carrito = obtenerCarrito();
  carrito = carrito.filter(item => item.id !== idProducto);
  guardarCarrito(carrito);
}

function actualizarCantidad(idProducto, cantidad) {
  let carrito = obtenerCarrito();
  const index = carrito.findIndex(item => item.id === idProducto);

  if (index !== -1) {
      carrito[index].cantidad = cantidad;
      if (carrito[index].cantidad <= 0) {
          carrito.splice(index, 1); // Si la cantidad es 0 o menos, lo eliminamos
      }
      guardarCarrito(carrito);
      return true;
  }

  return false;
}


export { productos, obtenerCarrito, guardarCarrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad };