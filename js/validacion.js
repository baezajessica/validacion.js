
function validarFormulario() {
    console.log("Iniciando validación..."); 
    const nombre = document.getElementById('nombre').value;
    console.log("Nombre ingresado:", nombre); 
    
    if (nombre === '') {
        console.log("Error: nombre vacío"); 
        alert('Por favor, escriba su nombre');
        return false;
    }
    const email = document.getElementById('email').value;
    console.log("Email ingresado:", email);
    
    if (!email.includes('@') || !email.includes('.')) {
        console.log("Error: email inválido"); 
        alert('El email no es válido.');
        return false;
    }
    const mensaje = document.getElementById('mensaje').value;
    console.log("Mensaje ingresado (longitud):", mensaje.length); 
    
    if (mensaje.length < 10) {
        console.log("Error: mensaje muy corto"); 
        alert('El mensaje es muy corto. Escribe minimo 10 letras.');
        return false;
    }
    console.log("✅ Validación exitosa, formulario listo para enviar"); 
    alert('¡Formulario enviado con éxito! Muy pronto recibiras tu respuesta, gracias!🌱');
    return true;
}

// Probando la función desde la consola 
console.log("Función 'validarFormulario' lista para usar."); 
console.log ("aaaaahh")