
//Modal

let modal = document.getElementById('id01');

// Cerrar Modal
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
        registroform.reset();
        loginform.reset();
    }
}

//Formacion de los objetos y sus propiedades dentro del array de errores

let ErroresLista = JSON.parse(localStorage.getItem('listadoAnimales')) ?? []

class Error {
    constructor(id, tipo, titulo, detalle, prioridad, usuario, fecha, estado) {
        this.id = id;
        this.tipo = tipo;
        this.titulo = titulo;
        this.detalle = detalle;
        this.prioridad = prioridad;
        this.usuario = usuario;
        this.fecha = fecha;
        this.estado = estado
    }

}

// Carga listado de Errores sin loguearse

ErroresLista.forEach(animalesenArray => {
    listadoDisponible.innerHTML += `
<div class="card animalListado animalListado${animalesenArray.prioridad} m-3" id="animalListado${animalesenArray.id}">
    <div class="card-body">
        <h5 class="card-title">ID#${animalesenArray.id}</h5>
        <p class="card-text">Titulo: ${animalesenArray.titulo}</p>
        <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
        <p class="card-text">Prioridad: ${animalesenArray.prioridad}</p>
        <p class="card-text">Detalle: ${animalesenArray.detalle}</p>
        <p class="card-text">Fecha: ${animalesenArray.fecha}</p>
        <p class="card-text">Reportado por: ${animalesenArray.usuario}</p>
        <p class="card-text">Estado: ${animalesenArray.estado}</p>
    </div>
</div>
`
});



//Formacion de los objetos y sus propiedades dentro del array de resueltos

let ResueltosLista = JSON.parse(localStorage.getItem('listaResuelta')) ?? []

class Resuelto {
    constructor(id, tipo, titulo, detalle, prioridad, usuario, fecha, estado) {
        this.id = id;
        this.tipo = tipo;
        this.titulo = titulo;
        this.detalle = detalle;
        this.prioridad = prioridad;
        this.usuario = usuario;
        this.fecha = fecha;
        this.estado = estado
    }

}

// Carga Inicial Errores resueltos

let listadoListo = document.getElementById("listadoResuelto")

    ResueltosLista.forEach(resueltoenArray => {
    listadoListo.innerHTML += `
        <div class="card animalListado-Resuelto animalListado${resueltoenArray.prioridad} m-3" id="animalListado${resueltoenArray.id}">
            <div class="card-body">
                <h5 class="card-title">ID#${resueltoenArray.id}</h5>
                <p class="card-text">Titulo: ${resueltoenArray.titulo}</p>
                <p class="card-text">Tipo: ${resueltoenArray.tipo}</p>
                <p class="card-text">Prioridad: ${resueltoenArray.prioridad}</p>
                <p class="card-text">Detalle: ${resueltoenArray.detalle}</p>
                <p class="card-text">Fecha: ${resueltoenArray.fecha}</p>
                <p class="card-text">Reportado por: ${resueltoenArray.usuario}</p>
                <p class="card-text">Estado: ${resueltoenArray.estado}</p>
                        
            </div>
        </div>
        `
    });

// Variables para login y registracion

let registro = document.getElementById('inicia-registro');

let registroform = document.getElementById('form-registro');

let loginform = document.getElementById('form-login');

let formListas = document.getElementById('form-listas');

let btnLogin = document.getElementById('btn-login');

let btnRegistro = document.getElementById('btn-registro');

let btnRegistroSalida = document.getElementById('btn-registro-salida');

let btnregistros = document.getElementById('registros');

let mensajeLogin = document.getElementById('mensajeLogin');

let btnLogOut = document.getElementById('logout');

let tituloSaludo = document.getElementById("titulo-revisar");


let Usuarios = JSON.parse(localStorage.getItem('listadoUsuarios')) ?? [];

// constructor de usuarios

class Usuario {
    constructor (usuario, nombre, email, contrase??a) {
        this.user = usuario;
        this.nombre = nombre;
        this.email = email;
        this.contrase??a = contrase??a;
    }
} 


// formulario de registro

const campos = {
    usario: false,
    nombre: false,
    mail: false,
    password: false,
}

function registerForm(){
    
    registro.innerHTML = `
    <div class="container">
    <h1>Sign Up</h1>
    <p>Complete el formulario para registrarse.</p>
    <hr>

    <div class="formulario__grupo" id="grupo__usuario">
        <label for="usuario"><b>Nombre de Usuario</b></label>
        <div class="form__grupo-input">        
            <input type="text" placeholder="johndoe123" name="usuario" id="formUserName">
            <i class="fa-solid fa-circle-xmark form__validacion-estado" id="iusuario"></i>
        </div>
        <p class="form__input-error">El usuario tiene que ser de 4 a 16 digitos y solo puede contener n??meros, letras o guion bajo.</p>
    </div>

    <div class="formulario__grupo" id="grupo__nombre">    
        <label for="nombre"><b>Nombre</b></label>
        <div class="form__grupo-input">        
            <input type="text" placeholder="John Doe" name="nombre" id="formUserNom">
            <i class="fa-solid fa-circle-xmark form__validacion-estado" id="inombre"></i>
        </div>
        <p class="form__input-error">El nombre no admite n??meros ni caracteres especiales.</p>
    </div>

    <div class="formulario__grupo " id="grupo__mail">    
        <label for="mail"><b>Email</b></label>
        <div class="form__grupo-input">        
            <input type="text" placeholder="correo@correo.com" name="mail" id="formUserMail" >
            <i class="fa-solid fa-circle-xmark form__validacion-estado" id="imail"></i>
        </div>
        <p class="form__input-error">El correo solo puede contener letras, n??meros, puntos, guiones y guion bajo.</p>
    </div>

    <div class="formulario__grupo " id="grupo__password">    
        <label for="password"><b>Contrase??a</b></label>
        <div class="form__grupo-input">        
            <input type="password" placeholder="" name="password" id="formUserPass">
            <i class="fa-solid fa-circle-xmark form__validacion-estado" id="ipassword"></i>
        </div>
        <p class="form__input-error">La contrase??a tiene que ser de 4 a 12 d??gitos.</p>
    </div>

    <div class="formulario__grupo" id="grupo__password2">
        <label for="password2"><b>Repetir Contrase??a</b></label>
        <div class="form__grupo-input">
            <input type="password" placeholder="" name="password2" id="formUserRePass2">
            <i class="fa-solid fa-circle-xmark form__validacion-estado" id="ipassword2"></i>
        </div>
        <p class="form__input-error">Ambas contrase??as deben ser iguales.</p>
    </div>

    <div class="formulario__grupo " id="grupo__terminos">
        <label class="formulario__grupo-terminos" for="terminos">
            <input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos" style="margin-bottom:15px"> Acepto Terminos y Condiciones
        </label>
    </div>

    <div class="formulario__mensaje" id="formulario__mensaje">
        <p><i class="fa-solid fa-triangle-exclamation"></i> <b>Error:</b> Por favor rellena el formulario correctamente</p>
    </div>

    <div class="formulario__grupo formulario__grupo-btn-registrar">
        <button type="submit" id="btn-registrar">Enviar!</button>
        <p class="formulario__mensaje-exito" id="formulario__mensaje-exito"></p>
    </div>

    `
    let inputs = document.querySelectorAll('#form-registro input');

    let expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
        nombre: /^[a-zA-Z??-??\s]{1,40}$/, 
        password: /^.{4,12}$/, 
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    

    const validarInputs =  (expresion, input, campo) => {
        if (expresion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#i${campo}`).classList.remove('fa-circle-xmark');
            document.querySelector(`#i${campo}`).classList.add('fa-circle-check');
            document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#i${campo}`).classList.add('fa-circle-xmark');
            document.querySelector(`#i${campo}`).classList.remove('fa-circle-check');
            document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-activo');
            campos[campo] = false;
        }
    
    }



    const validarPassword2 = () => {
        const inputPassword1 = document.getElementById('formUserPass');
        const inputPassword2 = document.getElementById('formUserRePass2');

        if (inputPassword1.value !== inputPassword2.value) {
            document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#ipassword2`).classList.add('fa-circle-xmark');
            document.querySelector(`#ipassword2`).classList.remove('fa-circle-check');
            document.querySelector(`#grupo__password2 .form__input-error`).classList.add('form__input-error-activo');
            campos[password] = false;
        } else {
            document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#ipassword2`).classList.remove('fa-circle-xmark');
            document.querySelector(`#ipassword2`).classList.add('fa-circle-check');
            document.querySelector(`#grupo__password2 .form__input-error`).classList.remove('form__input-error-activo');
            campos[password] = true;
        }
    }

    let validarFormulario = (e) => {
        switch(e.target.name) {
            case "usuario":
                validarInputs(expresiones.usuario, e.target, 'usuario');
            break;
            case "nombre":
                validarInputs(expresiones.nombre, e.target, 'nombre');
            break;
            case "mail":
                validarInputs(expresiones.correo, e.target, 'mail');
            break;
            case "password":
                validarInputs(expresiones.password, e.target, 'password');
                validarPassword2();
            break;
            case "password2":
                validarPassword2();
            break;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
}



 

// funcion registro

btnRegistro.onclick = function() {registerForm();}

function alertUsuario() {
    let timerInterval
    Swal.fire({
    title: 'Creando Usuario!',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
    }
    })
}


registroform.addEventListener('submit', (e) => {
    e.preventDefault();
        
    const terminos = document.getElementById('terminos');

        
    
    if (campos.nombre && campos.usuario && campos.mail && campos.password && terminos.checked){

        usuario = new Usuario(

            userName = document.getElementById('formUserName').value,
            userNombre = document.getElementById('formUserNom').value,
            userMail = document.getElementById('formUserMail').value,
            userPass = document.getElementById('formUserPass').value);
        
        Usuarios.push(usuario);
        localStorage.setItem('listadoUsuarios', JSON.stringify(Usuarios));
        alertUsuario();
        registroform.reset()
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
        console.log(Usuarios)
        validarCredenciales(userMail, userPass);
                let modal = document.getElementById('id01');
        let ingresoInicio = document.getElementById('ingresoInicio')
        modal.style.display = "none";
        ingresoInicio.style.display = "none";
        btnLogOut.style.display = "block";

        ingreso();

    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
    
})

// Funcion login
let usuarioActual;

function validarCredenciales (usuario, pass) {
    let acceso = false

    Usuarios = JSON.parse(localStorage.getItem('listadoUsuarios'))

    for (i = 0; i < Usuarios.length; i++){
        
        if ((usuario == Usuarios[i].email || usuario == Usuarios[i].user) && pass == Usuarios[i].contrase??a){
            acceso = true
            
            usuarioActual = i
            
            usuarioActivo = Usuarios[usuarioActual].nombre
            saludar(usuarioActivo);
            registro.innerHTML = ``;
            mensajeLogin.innerHTML = ``;
        } 
    }

    if (acceso == false){
        mensajeLogin.innerHTML = 'Usuario y/o Contrase??a Incorrectos'
    }
    
    return acceso;
    
}

function saludar(usuario){
    let tituloSaludo = document.getElementById("titulo-revisar")

    tituloSaludo.innerText = "Hola, " + usuario + ". Revisa nuestra lista de errores reportados o agrega los que encuentres!"
}
btnLogin.onclick = function() {validarCredenciales();}

loginform.addEventListener('submit', (e) => {
    e.preventDefault();

    
    loginUser = document.getElementById('loginUsuario').value
    loginPass = document.getElementById('loginPass').value


    acceso = validarCredenciales(loginUser, loginPass);
    console.log(acceso)
    
    if (acceso == true) {
        loginform.reset();
        let modal = document.getElementById('id01');
        let ingresoInicio = document.getElementById('ingresoInicio')
        modal.style.display = "none";
        ingresoInicio.style.display = "none";
        btnLogOut.style.display = "block";

        ingreso();
    }
})



//formulario usuarios

const t = 1
function ingreso(){

    registro.innerHTML = ``
    formListas.innerHTML = `
    <div class="row">
            <div class="col-lg-12">

              <div class="card">
                  <div class="card-body mt-5" >
                    <form action="" id="animal-form">
                      <div class="form-group">
                        <label for="tipo"><b>Tipo de Problema</b></label>
                        <select name="tipo" class="form-control datosAnimales" id="formTipoError">
                            
                            <option value="Software">Software</option>
                        
                            <option value="Hardware">Hardware</option>
                        
                        </select>
                      </div>
                    
                      <div class="form-group">
                      <label for="titulo-e"><b>Titulo del Error</b></label>
                          <input type="text" name="titulo-e" placeholder="Ingrese Titulo del Error" class="form-control datosAnimales" id="formTituloError" required>
                      </div>

                      <div class="form-group">
                        <label for="detalle"><b>Detalle del Error</b></label>
                        <textarea name="detalle" placeholder="Detalle el problema" class="form-control datosAnimales" id="formDetalleError" required></textarea>
                      </div>

                      <div class="form-group">
                        <label for="prioridad"><b>Nivel de Prioridad</b></label>
                        <select name="prioridad" class="form-control datosAnimales" id="formPrioridadError">
                            <option value="Alta">Alta</option>
                        
                            <option value="Media">Media</option>

                            <option value="Baja">Baja</option>
                        </select>
                      </div>
                        <br>
                      <div class="form-group">
                        <p> Todos los datos seran revisados por la Division de Servicio Tecnico y/o modificados de acuerdo a su evaluaci??n</p>
                      </div>

                      <button type="submit" class="btn btn-primary" onclick="" id="btn-listadd">Agregar a la lista!</a>
                    </form>
                  </div>
              </div>
                
            </div>
    </div>

    <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
        <div id="liveToast" class="toast top-50 end-0 translate-middle-y" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Simple! Ya est?? agregado!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Nuevo elemento a??adido a la lista!
            </div>
        </div>
    </div>
        `
    let ErroresLista = JSON.parse(localStorage.getItem('listadoAnimales')) ?? []
    let y = -1;
        listadoDisponible.innerHTML = ``
        ErroresLista.forEach(animalesenArray => {

            y++
            listadoDisponible.innerHTML += `
        
        <div class="card animalListado animalListado${animalesenArray.prioridad} m-3" id="animalListado${y}">
            <div class="card-body">
                <span onclick=borrar(${y}) class="close btneliminar" id="btn-eliminar">&times;</span>
                <h5 class="card-title">ID#${animalesenArray.id}</h5>
                <p class="card-text">Titulo: ${animalesenArray.titulo}</p>
                <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
                <p class="card-text">Prioridad: ${animalesenArray.prioridad}</p>
                <p class="card-text">Detalle: ${animalesenArray.detalle}</p>
                <p class="card-text">Fecha: ${animalesenArray.fecha}</p>
                <p class="card-text">Reportado por: ${animalesenArray.usuario}</p>
                <p class="card-text">Estado: ${animalesenArray.estado}</p>
                <br>
                <button class="btnresolver" onclick=resolver(${y}) id="btn-resuelto">Resuelto</button>
                <br>

            </div>
        </div>
        
        `
        
    });

    let ResueltosLista = JSON.parse(localStorage.getItem('listaResuelta')) ?? []
    y = -1;
    let listadoListo = document.getElementById("listadoResuelto")
    listadoListo.innerHTML = ''
    ResueltosLista.forEach(resueltoenArray => {
    y++
    listadoListo.innerHTML += `
        <div class="card animalListado-Resuelto animalListado${resueltoenArray.prioridad} m-3" id="animalListado${y}">
            <div class="card-body">
                <span onclick=borrar2(${y}) class="close btneliminar" id="btn-eliminar">&times;</span>
                <h5 class="card-title">ID#${resueltoenArray.id}</h5>
                <p class="card-text">Titulo: ${resueltoenArray.titulo}</p>
                <p class="card-text">Tipo: ${resueltoenArray.tipo}</p>
                <p class="card-text">Prioridad: ${resueltoenArray.prioridad}</p>
                <p class="card-text">Detalle: ${resueltoenArray.detalle}</p>
                <p class="card-text">Fecha: ${resueltoenArray.fecha}</p>
                <p class="card-text">Reportado por: ${resueltoenArray.usuario}</p>
                <p class="card-text">Estado: ${resueltoenArray.estado}</p>
                        
            </div>
        </div>
        `
    });
    
    for (i = 0; i < ErroresLista.length; i++){
        let btnEliminar = document.getElementById('btn-eliminar');
        let btnResuelto = document.getElementById('btn-resuelto');

        if (usuarioActual !== ErroresLista[i].usuario) {
            btnEliminar.style.display = "none";
            btnResuelto.style.display = "none";
        } else {
            btnEliminar.style.display = "block";
            btnResuelto.style.display = "block";
        }
    }
    
    
    let divUbicacion = document.getElementById('geolocal')
    fetch("http://ipwho.is")
    .then(respuesta => respuesta.json())
    .then(data => {
        let {ip, continent, country, region, city} = data
        divUbicacion.innerHTML = `
            <p class="localizador"> Conectado desde Ip: ${ip} - Continente: ${continent} - Pais: ${country} -  Provincia: ${region} - Ciudad: ${city}</p>
        `  
    })

  
    let formulario = document.getElementById("animal-form");
    
    function generarUUID() {
        let d = new Date().getTime();
        let uuid = 'xxx4xxyxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(30);
        });
        return uuid;
    }
    
    formulario.addEventListener('submit', (event) => {
        
        event.preventDefault();
        let idpropio = generarUUID();
        errores = new Error(
    
            iderrror = idpropio,
            tipoerror = document.getElementById('formTipoError').value,
            tituloerror = document.getElementById('formTituloError').value,
            detalleerror = document.getElementById('formDetalleError').value,
            prioridaderrror = document.getElementById('formPrioridadError').value,
            usuarioanimal = usuarioActivo,
            fechaerror = Date(),
            errorresuelto = "En Resolucion");
            
        ErroresLista.push(errores)
        localStorage.setItem('listadoAnimales', JSON.stringify(ErroresLista));
        Toastify({
            text: "Agregado a la lista!",
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
                
              background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 31%, rgba(0,212,255,1) 100%)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          
        let y = -1;
        let listadoDisponible = document.getElementById("listadoDisponible")
        listadoDisponible.innerHTML = ''
        ErroresLista.forEach(animalesenArray => {
        y++
        listadoDisponible.innerHTML += `
        <div class="card animalListado animalListado${animalesenArray.prioridad} m-3" id="animalListado${y}">
            <div class="card-body">
                <span onclick=borrar(${y}) class="close btneliminar" id="btn-eliminar">&times;</span>
                <h5 class="card-title">ID#${animalesenArray.id}</h5>
                <p class="card-text">Titulo: ${animalesenArray.titulo}</p>
                <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
                <p class="card-text">Prioridad: ${animalesenArray.prioridad}</p>
                <p class="card-text">Detalle: ${animalesenArray.detalle}</p>
                <p class="card-text">Fecha: ${animalesenArray.fecha}</p>
                <p class="card-text">Reportado por: ${animalesenArray.usuario}</p>
                <p class="card-text">Estado: ${animalesenArray.estado}</p>
                <br>
                <button class="btnresolver" onclick=resolver(${y}) id="btn-resuelto">Resuelto</button>
                <br>

            </div>
        </div>
        `
        });
        
        formulario.reset()
    
    })
}


// LOGOUT

btnLogOut.onclick = function() {logOut()};

function logOut () {
    
    tituloSaludo.innerText = `Bienvenido, Extra??o! Revisa nuestra lista de errores reportados. Puedes iniciar sesion para agregar los que detectes!`
    ingresoInicio.style.display = "block";
    let divUbicacion = document.getElementById('geolocal')
    divUbicacion.innerHTML = ``
    btnLogOut.style.display = "none";
    formListas.innerHTML = ``;
    listadoDisponible.innerHTML = ``;
    let ErroresLista = JSON.parse(localStorage.getItem('listadoAnimales')) ?? []
    ErroresLista.forEach(animalesenArray => {
        listadoDisponible.innerHTML += `
        <div class="card animalListado animalListado${animalesenArray.prioridad} m-3" id="animalListado${animalesenArray.id}">
        <div class="card-body">
            <h5 class="card-title">ID#${animalesenArray.id}</h5>
            <p class="card-text">Titulo: ${animalesenArray.titulo}</p>
            <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
            <p class="card-text">Prioridad: ${animalesenArray.prioridad}</p>
            <p class="card-text">Detalle: ${animalesenArray.detalle}</p>
            <p class="card-text">Fecha: ${animalesenArray.fecha}</p>
            <p class="card-text">Reportado por: ${animalesenArray.usuario}</p>
            <p class="card-text">Estado: ${animalesenArray.estado}</p>
        </div>
    </div>
    `
    });
    
    let ResueltosLista = JSON.parse(localStorage.getItem('listaResuelta')) ?? []
    let listadoListo = document.getElementById("listadoResuelto")
    listadoListo.innerHTML = ``
    ResueltosLista.forEach(resueltoenArray => {
    listadoListo.innerHTML += `
        <div class="card animalListado-Resuelto animalListado${resueltoenArray.prioridad} m-3" id="animalListado${resueltoenArray.id}">
            <div class="card-body">
                <h5 class="card-title">ID#${resueltoenArray.id}</h5>
                <p class="card-text">Titulo: ${resueltoenArray.titulo}</p>
                <p class="card-text">Tipo: ${resueltoenArray.tipo}</p>
                <p class="card-text">Prioridad: ${resueltoenArray.prioridad}</p>
                <p class="card-text">Detalle: ${resueltoenArray.detalle}</p>
                <p class="card-text">Fecha: ${resueltoenArray.fecha}</p>
                <p class="card-text">Reportado por: ${resueltoenArray.usuario}</p>
                <p class="card-text">Estado: ${resueltoenArray.estado}</p>
                        
            </div>
        </div>
        `
    });

    
}

//Funcion Borrar
function borrar(i){
    ErroresLista.splice(i,1);

    let y = -1;
    listadoDisponible.innerHTML = ``
    ErroresLista.forEach(animalesenArray => {

        y++
        listadoDisponible.innerHTML += `
    
        <div class="card animalListado animalListado${animalesenArray.prioridad} m-3" id="animalListado${y}">
            <div class="card-body">
                <span onclick=borrar(${y}) class="close btneliminar" id="btn-eliminar">&times;</span>
                <h5 class="card-title">ID#${animalesenArray.id}</h5>
                <p class="card-text">Titulo: ${animalesenArray.titulo}</p>
                <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
                <p class="card-text">Prioridad: ${animalesenArray.prioridad}</p>
                <p class="card-text">Detalle: ${animalesenArray.detalle}</p>
                <p class="card-text">Fecha: ${animalesenArray.fecha}</p>
                <p class="card-text">Reportado por: ${animalesenArray.usuario}</p>
                <p class="card-text">Estado: ${animalesenArray.estado}</p>
                <br>
                <button class="btnresolver" onclick=resolver(${y}) id="btn-resuelto">Resuelto</button>
                <br>
            </div>
        </div>
        
      `
    })
    localStorage.setItem('listadoAnimales', JSON.stringify(ErroresLista));

}

//Funcion Borrar2
function borrar2(i){
    ResueltosLista.splice(i,1);

    let y = -1;
    listadoListo.innerHTML = ``
    ResueltosLista.forEach(resueltoenArray => {
        y++
        listadoListo.innerHTML += `
            <div class="card animalListado-Resuelto animalListado${resueltoenArray.prioridad} m-3" id="animalListado${y}">
                <div class="card-body">
                    <span onclick=borrar2(${y}) class="close btneliminar" id="btn-eliminar">&times;</span>
                    <h5 class="card-title">ID#${resueltoenArray.id}</h5>
                    <p class="card-text">Titulo: ${resueltoenArray.titulo}</p>
                    <p class="card-text">Tipo: ${resueltoenArray.tipo}</p>
                    <p class="card-text">Prioridad: ${resueltoenArray.prioridad}</p>
                    <p class="card-text">Detalle: ${resueltoenArray.detalle}</p>
                    <p class="card-text">Fecha: ${resueltoenArray.fecha}</p>
                    <p class="card-text">Reportado por: ${resueltoenArray.usuario}</p>
                    <p class="card-text">Estado: ${resueltoenArray.estado}</p>
                            
                </div>
            </div>
            `
        });
        localStorage.setItem('listaResuelta', JSON.stringify(ResueltosLista));

}


//Funcion Resolver

function resolver(i){

    let ErroresLista = JSON.parse(localStorage.getItem('listadoAnimales')) ?? []
    resueltos = new Resuelto(
    
        ideresuelto = JSON.parse(JSON.stringify(ErroresLista[i].id)),
        tiporesuelto = JSON.parse(JSON.stringify(ErroresLista[i].tipo)),
        tituloresuelto = JSON.parse(JSON.stringify(ErroresLista[i].titulo)),
        detalleresuelto = JSON.parse(JSON.stringify(ErroresLista[i].detalle)),
        prioridadresuelto = JSON.parse(JSON.stringify(ErroresLista[i].prioridad)),
        usuarioanimal = JSON.parse(JSON.stringify(ErroresLista[i].usuario)),
        fechaerror = JSON.parse(JSON.stringify(ErroresLista[i].fecha)),
        errorresuelto = "Resuelto");
        
    ResueltosLista.push(resueltos)
    localStorage.setItem('listaResuelta', JSON.stringify(ResueltosLista));

    let y = -1;
    let listadoListo = document.getElementById("listadoResuelto")
    listadoListo.innerHTML = ''
    ResueltosLista.forEach(resueltoenArray => {
    y++
    listadoListo.innerHTML += `
        <div class="card animalListado-Resuelto animalListado${resueltoenArray.prioridad} m-3" id="animalListado${y}">
            <div class="card-body">
                <span onclick=borrar2(${y}) class="close btneliminar" id="btn-eliminar">&times;</span>
                <h5 class="card-title">ID#${resueltoenArray.id}</h5>
                <p class="card-text">Titulo: ${resueltoenArray.titulo}</p>
                <p class="card-text">Tipo: ${resueltoenArray.tipo}</p>
                <p class="card-text">Prioridad: ${resueltoenArray.prioridad}</p>
                <p class="card-text">Detalle: ${resueltoenArray.detalle}</p>
                <p class="card-text">Fecha: ${resueltoenArray.fecha}</p>
                <p class="card-text">Reportado por: ${resueltoenArray.usuario}</p>
                <p class="card-text">Estado: ${resueltoenArray.estado}</p>
                        
            </div>
        </div>
        `
    });

    ErroresLista.splice(i,1);
    y = -1;
    listadoDisponible.innerHTML = ``
    ErroresLista.forEach(animalesenArray => {

        y++
        listadoDisponible.innerHTML += `
    
        <div class="card animalListado animalListado${animalesenArray.prioridad} m-3" id="animalListado${y}">
            <div class="card-body">
                <span onclick=borrar(${y}) class="close btneliminar" id="btn-eliminar">&times;</span>
                <h5 class="card-title">ID#${animalesenArray.id}</h5>
                <p class="card-text">Titulo: ${animalesenArray.titulo}</p>
                <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
                <p class="card-text">Prioridad: ${animalesenArray.prioridad}</p>
                <p class="card-text">Detalle: ${animalesenArray.detalle}</p>
                <p class="card-text">Fecha: ${animalesenArray.fecha}</p>
                <p class="card-text">Reportado por: ${animalesenArray.usuario}</p>
                <p class="card-text">Estado: ${animalesenArray.estado}</p>
                <br>
                <button class="btnresolver" onclick=resolver(${y}) id="btn-resuelto">Resuelto</button>
                <br>
            </div>
        </div>
        
      `
    })
    localStorage.setItem('listadoAnimales', JSON.stringify(ErroresLista));
    Toastify({
        text: "Error Resuelto",
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            
          background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 31%, rgba(0,212,255,1) 100%)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

    
}









