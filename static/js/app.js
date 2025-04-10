import { actualizarContador } from './productos.js';

// ✅ Registrar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/static/service-worker.js')
    .then(reg => console.log('✅ Service Worker registrado:', reg.scope))
    .catch(err => console.error('❌ Error al registrar SW:', err));
}

// ✅ Actualizar contador del carrito al cargar cualquier página
document.addEventListener("DOMContentLoaded", () => {
  actualizarContador();
});