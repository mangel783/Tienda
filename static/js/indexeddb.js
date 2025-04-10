const DB_NAME = "ElectroTiendaDB";
const DB_VERSION = 1;
const STORE = "productos";

function abrirDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject("Error al abrir IndexedDB");
  });
}

export async function guardarProductosLocal(productos) {
  const db = await abrirDB();
  const tx = db.transaction(STORE, "readwrite");
  const store = tx.objectStore(STORE);
  productos.forEach(p => store.put(p));
  return tx.complete;
}

export async function obtenerProductosLocal() {
  const db = await abrirDB();
  const tx = db.transaction(STORE, "readonly");
  const store = tx.objectStore(STORE);
  return store.getAll();
}
