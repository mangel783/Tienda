from flask import Flask, render_template, request, jsonify, session,  redirect, url_for, flash
from flask_mail import Mail, Message

app = Flask(__name__)
app.secret_key = 'clave-super-secreta'

# Configuración de Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'tu_email@gmail.com'
app.config['MAIL_PASSWORD'] = 'tu_contraseña_de_app'
app.config['MAIL_DEFAULT_SENDER'] = 'tu_email@gmail.com'

mail = Mail(app)

# Lista completa de productos
PRODUCTOS = [
    {"id": 1, "nombre": "Laptop HP", "descripcion": "Laptop con procesador i7 y 16GB de RAM", "precio": 15000, "imagen": "https://via.placeholder.com/300x200?text=Laptop+HP"},
    {"id": 2, "nombre": "Smartphone Samsung Galaxy", "descripcion": "Smartphone con cámara de 48MP y pantalla AMOLED", "precio": 7000, "imagen": "https://via.placeholder.com/300x200?text=Smartphone+Samsung+Galaxy"},
    {"id": 3, "nombre": "Audífonos Bose", "descripcion": "Audífonos con cancelación de ruido", "precio": 4000, "imagen": "https://via.placeholder.com/300x200?text=Audífonos+Bose"},
    {"id": 4, "nombre": "Tablet Samsung Galaxy Tab", "descripcion": "Tablet con pantalla de 10.4\" y 64GB de almacenamiento", "precio": 6000, "imagen": "https://via.placeholder.com/300x200?text=Tablet+Samsung+Galaxy+Tab"},
    {"id": 5, "nombre": "Reloj Garmin Forerunner", "descripcion": "Reloj deportivo con GPS y monitor de ritmo cardíaco", "precio": 5000, "imagen": "https://via.placeholder.com/300x200?text=Reloj+Garmin+Forerunner"},
    {"id": 6, "nombre": "Smartwatch Apple Watch Series 6", "descripcion": "Reloj inteligente con monitorización de oxígeno en sangre", "precio": 8000, "imagen": "https://via.placeholder.com/300x200?text=Smartwatch+Apple+Watch+Series+6"},
    {"id": 7, "nombre": "Cámara Canon EOS Rebel", "descripcion": "Cámara digital réflex con lente de 18-55mm", "precio": 12000, "imagen": "https://via.placeholder.com/300x200?text=Cámara+Canon+EOS+Rebel"},
    {"id": 8, "nombre": "AirPods Pro", "descripcion": "Auriculares inalámbricos con cancelación de ruido", "precio": 5000, "imagen": "https://via.placeholder.com/300x200?text=AirPods+Pro"},
    {"id": 9, "nombre": "Monitor LG UltraWide", "descripcion": "Monitor ultrapanorámico 34\" para productividad", "precio": 7000, "imagen": "https://via.placeholder.com/300x200?text=Monitor+LG+UltraWide"},
    {"id": 10, "nombre": "Teclado mecánico Logitech", "descripcion": "Teclado mecánico retroiluminado para gamers", "precio": 2000, "imagen": "https://via.placeholder.com/300x200?text=Teclado+mecánico+Logitech"},
    {"id": 11, "nombre": "Mouse inalámbrico Logitech", "descripcion": "Mouse inalámbrico ergonómico y preciso", "precio": 800, "imagen": "https://via.placeholder.com/300x200?text=Mouse+inalámbrico+Logitech"},
    {"id": 12, "nombre": "Auriculares JBL", "descripcion": "Auriculares Bluetooth con sonido de alta calidad", "precio": 1500, "imagen": "https://via.placeholder.com/300x200?text=Auriculares+JBL"},
    {"id": 13, "nombre": "Bocina Bluetooth Bose", "descripcion": "Bocina inalámbrica resistente al agua", "precio": 3500, "imagen": "https://via.placeholder.com/300x200?text=Bocina+Bluetooth+Bose"},
    {"id": 14, "nombre": "Laptop Dell XPS 13", "descripcion": "Laptop ultra delgada con procesador Intel Core i7", "precio": 18000, "imagen": "https://via.placeholder.com/300x200?text=Laptop+Dell+XPS+13"},
    {"id": 15, "nombre": "Smartphone Xiaomi Mi 11", "descripcion": "Smartphone con cámara de 108MP y 5G", "precio": 10000, "imagen": "https://via.placeholder.com/300x200?text=Smartphone+Xiaomi+Mi+11"},
    {"id": 16, "nombre": "Pantalla 4K Samsung", "descripcion": "Pantalla LED 4K con HDR10+ y 120Hz de tasa de refresco", "precio": 12000, "imagen": "https://via.placeholder.com/300x200?text=Pantalla+4K+Samsung"},
    {"id": 17, "nombre": "Laptop MacBook Air", "descripcion": "Laptop con chip M1 y 8GB de RAM", "precio": 25000, "imagen": "https://via.placeholder.com/300x200?text=Laptop+MacBook+Air"},
    {"id": 18, "nombre": "Cámara GoPro Hero 9", "descripcion": "Cámara deportiva 4K resistente al agua", "precio": 9000, "imagen": "https://via.placeholder.com/300x200?text=Cámara+GoPro+Hero+9"},
    {"id": 19, "nombre": "Proyector BenQ", "descripcion": "Proyector de cine en casa 1080p", "precio": 7000, "imagen": "https://via.placeholder.com/300x200?text=Proyector+BenQ"},
    {"id": 20, "nombre": "Nintendo Switch", "descripcion": "Consola de videojuegos portátil con juegos incluidos", "precio": 8000, "imagen": "https://via.placeholder.com/300x200?text=Nintendo+Switch"},
    {"id": 21, "nombre": "Reloj Casio G-Shock", "descripcion": "Reloj digital resistente al agua", "precio": 1500, "imagen": "https://via.placeholder.com/300x200?text=Reloj+Casio+G-Shock"},
    {"id": 22, "nombre": "Vino Tinto Cabernet Sauvignon", "descripcion": "Vino tinto de 750ml, 12% de alcohol", "precio": 300, "imagen": "https://via.placeholder.com/300x200?text=Vino+Cabernet+Sauvignon"},
    {"id": 23, "nombre": "Café Gourmet", "descripcion": "Café molido premium 250g", "precio": 200, "imagen": "https://via.placeholder.com/300x200?text=Café+Gourmet"},
    {"id": 24, "nombre": "Cámara de seguridad Arlo", "descripcion": "Cámara de seguridad inalámbrica HD", "precio": 4000, "imagen": "https://via.placeholder.com/300x200?text=Cámara+de+seguridad+Arlo"},
    {"id": 25, "nombre": "Smartphone Motorola Moto G", "descripcion": "Smartphone de gama media con buena cámara", "precio": 4000, "imagen": "https://via.placeholder.com/300x200?text=Smartphone+Motorola+Moto+G"},
    {"id": 26, "nombre": "Auriculares Sony WH-1000XM4", "descripcion": "Auriculares inalámbricos con cancelación de ruido", "precio": 7000, "imagen": "https://via.placeholder.com/300x200?text=Auriculares+Sony+WH-1000XM4"},
    {"id": 27, "nombre": "Mini Drone DJI", "descripcion": "Drone compacto con cámara 4K", "precio": 9000, "imagen": "https://via.placeholder.com/300x200?text=Mini+Drone+DJI"},
    {"id": 28, "nombre": "Smartphone Huawei P40", "descripcion": "Smartphone con cámara Leica y 5G", "precio": 9500, "imagen": "https://via.placeholder.com/300x200?text=Smartphone+Huawei+P40"},
    {"id": 29, "nombre": "Cámara Fujifilm Instax", "descripcion": "Cámara instantánea para fotos retro", "precio": 3000, "imagen": "https://via.placeholder.com/300x200?text=Cámara+Fujifilm+Instax"},
    {"id": 30, "nombre": "Auriculares Beats Studio", "descripcion": "Auriculares con sonido premium y cancelación activa de ruido", "precio": 6500, "imagen": "https://via.placeholder.com/300x200?text=Auriculares+Beats+Studio"},
    {"id": 31, "nombre": "Toner HP LaserJet", "descripcion": "Cartucho de tinta compatible con impresoras HP LaserJet", "precio": 800, "imagen": "https://via.placeholder.com/300x200?text=Toner+HP+LaserJet"},
    {"id": 32, "nombre": "Pantalla LG 27\"", "descripcion": "Pantalla de 27\" Full HD con tecnología IPS", "precio": 5000, "imagen": "https://via.placeholder.com/300x200?text=Pantalla+LG+27%22"},
    {"id": 33, "nombre": "Lentes Ray-Ban Aviator", "descripcion": "Gafas de sol con diseño clásico", "precio": 3000, "imagen": "https://via.placeholder.com/300x200?text=Lentes+Ray-Ban+Aviator"},
    {"id": 34, "nombre": "Silla Gamer DXRacer", "descripcion": "Silla ergonómica para gamers", "precio": 7500, "imagen": "https://via.placeholder.com/300x200?text=Silla+Gamer+DXRacer"}
]

@app.route('/')
def index():
    return render_template('index.html', productos=PRODUCTOS)

@app.route('/carrito')
def carrito():
    carrito = session.get('carrito', [])
    return render_template('carrito.html', carrito=carrito)



@app.route('/agregar_carrito', methods=['POST'])
def agregar_carrito():
    data = request.get_json()
    producto_id = data.get('id')
    cantidad = int(data.get('cantidad', 1))  # Asegúrate que sea entero

    producto = next((p for p in PRODUCTOS if p['id'] == producto_id), None)
    if not producto:
        return jsonify({'success': False, 'message': 'Producto no encontrado'}), 404

    carrito = session.get('carrito', [])
    for item in carrito:
        if item['id'] == producto_id:
            item['cantidad'] += cantidad  # Suma directamente como número
            break
    else:
        carrito.append({
            'id': producto_id,
            'nombre': producto['nombre'],
            'precio': float(producto['precio']),  # Convierte a float explícitamente
            'cantidad': cantidad
        })

    session['carrito'] = carrito
    return jsonify({'success': True, 'message': f"{producto['nombre']} agregado al carrito ✅"})


@app.route('/actualizar/<int:id>', methods=['POST'])
def actualizar_cantidad(id):
    nueva_cantidad = int(request.form.get('cantidad', 1))
    carrito = session.get('carrito', [])

    for item in carrito:
        if item['id'] == id:
            item['cantidad'] = nueva_cantidad
            flash(f'Se actualizó la cantidad de "{item["nombre"]}" a {nueva_cantidad}.')
            break

    session['carrito'] = carrito
    return redirect(url_for('carrito'))


@app.route('/eliminar/<int:id>', methods=['POST'])
def eliminar_producto(id):
    carrito = session.get('carrito', [])
    carrito = [item for item in carrito if item['id'] != id]
    session['carrito'] = carrito
    return redirect(url_for('carrito'))


@app.route('/finalizar-compra', methods=['POST'])
def finalizar_compra():
    datos = request.get_json()
    carrito = datos.get('carrito', [])
    email = datos.get('email')

    if not carrito or not email:
        return jsonify({'error': 'Carrito o email faltante'}), 400

    productos = '\n'.join([f"- {item['nombre']}: ${item['precio']} MXN" for item in carrito])
    total = sum(item['precio'] for item in carrito)
    mensaje = f"\u00a1Gracias por tu compra!\n\nProductos:\n{productos}\n\nTotal: ${total} MXN"

    try:
        msg = Message('Confirmación de tu compra - ElectroTienda', recipients=[email])
        msg.body = mensaje
        mail.send(msg)
        return jsonify({'mensaje': 'Compra finalizada, correo enviado ✅'})
    except Exception as e:
        print(e)
        return jsonify({'error': 'No se pudo enviar el correo'}), 500
    

if __name__ == '__main__':
    app.run(debug=True)
