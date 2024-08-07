const submitFunction = (event) => {
    event.preventDefault(); //prevenir que se haga la actualizacion de la web
    if(validarFormulario()){
        
        alert(
            'Los datos enviados son los siguientes:\n'+
            'Nombre:' + nombre.value + '\n'+
            'Apellido:' + apellido.value + '\n'+
            'Documento:' + documento.value + '\n'+
            'E-mail:' + email.value + '\n'+
            'Edad:' + edad.value + '\n'+
            'Actividad:' + actividad.value + '\n'+
            'Nivel de Estudio:' + nivelEstudio.value
        );
    }
    /*else{
        event.preventDefault(); //prevenir que se haga la actualizacion de la web
    }*/
};

//escucha el envío del formulario
document.getElementById('formulario').addEventListener('submit', submitFunction);

function validarFormulario() {

    //ESTO VALIDA LOS CAMPOS DE TEXTO
    const camposTexto = document.querySelectorAll('input[type="Text"]');
    let validacionCorrecta = true;
    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1));
        if (campo.value.length == '') {
            mostrarError(errorCampo, '¡Este campo es requerido!');
            validacionCorrecta = false;
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, '¡Este campo debe tener al menos 3 caracteres!');
            validacionCorrecta = false;
        } else {
            ocultarError(errorCampo);
        }
    });

    //ESTO VALIDA EL CAMPO DE CORREO
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail');

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        ocultarError(errorEmail);
    } else {
        mostrarError(errorEmail, '¡Ingrese un correo electrónico válido!');
        validacionCorrecta = false;
    }

    //ESTO VALIDA LA EDAD
    const edad = document.getElementById('edad');
    let errorEdad = document.getElementById('errorEdad');

    if (edad.value>17){
        ocultarError(errorEdad);
    }else{
        mostrarError(errorEdad,'¡Debes ser mayor de edad para registrarte!');
        validacionCorrecta=false;
    }

    //ESTO VALIDA LA ACTIVIDAD
    const actividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');
    if(actividad.value==''){
        mostrarError(errorActividad,'Por favor, selecciona una actividad.');
        validacionCorrecta=false;
    }else{
        ocultarError(errorActividad);
    }

    //ESTO VALIDA EL NIVEL DE ESTUDIO
    const nivelEstudio = document.getElementById('nivelEstudio');
    let errorNivelEstudio = document.getElementById('errorNivelEstudio');

    if(nivelEstudio.value ==''){
        mostrarError(errorNivelEstudio,'Por favor, selecciona un nivel de estudio.');
        validacionCorrecta=false;
    }else{
        ocultarError(errorNivelEstudio);
    }

    //VALIDAR TERMINOS Y CONDICIONES
    const aceptoTerminos = document.getElementById('aceptoTerminos');
    let errorAceptoTerminos = document.getElementById('errorAceptoTerminos');

    if(aceptoTerminos.checked){
        ocultarError(errorAceptoTerminos);
    }else{
        mostrarError(errorAceptoTerminos,'¡Debes aceptar los términos y condiciones!');
        validacionCorrecta=false;
    }

    return validacionCorrecta; //esto define si todo el formulado esta bien llenado.
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
};

const ocultarError = (elemento) => {
    elemento.textContent = "";
    elemento.style.display = "none";
}
