

//Modal

let modal = document.getElementById('id01');

// Cerrar
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

//Formacion de los objetos y sus propiedades dentro del array

let AnimalesGranja = JSON.parse(localStorage.getItem('listadoAnimales')) ?? []

class Animal {
    constructor(id, tipo, nombre, color, comida, usuario) {
        this.id = id;
        this.tipo = tipo;
        this.nombre = nombre;
        this.color = color;
        this.comida = comida;
        this.usuario = usuario;
    }

    hablar() {
        console.log(this.nombre + " dice:  " + this.sonido);
    }

    saltar() {
        console.log(this.nombre + " ha saltado!");
    }

    dormir() {
        console.log(this.nombre + " tiene sueño. Es hora de ir a dormir.");
    }

    comer() {
        console.log(this.nombre + " es hora de comer...otra vez!");
    }
}

AnimalesGranja.forEach(animalesenArray => {
    listadoDisponible.innerHTML += `
<div class="card animalListado m-3" id="animalListado${animalesenArray.id}">
    <div class="card-body">
        <h5 class="card-title">${animalesenArray.nombre}</h5>
        <p class="card-text">ID: ${animalesenArray.id}</p>
        <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
        <p class="card-text">Color: ${animalesenArray.color}</p>
        <p class="card-text">Comida: ${animalesenArray.comida}</p>
        <p class="card-text">Propiedad de: ${animalesenArray.usuario}</p>
    </div>
</div>
`
});

// Variables para login y registracion

let registro = document.getElementById('inicia-registro');

let registroform = document.getElementById('form-registro')

let loginform = document.getElementById('form-login')

let formListas = document.getElementById('form-listas')

let btnLogin = document.getElementById('btn-login')

let btnRegistro = document.getElementById('btn-registro')

let btnRegistroSalida = document.getElementById('btn-registro-salida')

let btnregistros = document.getElementById('registros')


let Usuarios = JSON.parse(localStorage.getItem('listadoUsuarios')) ?? []

// constructor de usuarios

class Usuario {
    constructor (nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }
} 


// formulario de registro

function registerForm(){
    
    registro.innerHTML = `
    <div class="container">
    <h1>Sign Up</h1>
    <p>Complete el formulario para registrarse.</p>
    <hr>

    <label for="nombre"><b>Nombre</b></label>
    <input type="text" placeholder="Ingrese Nombre" name="nombre" id="formUserNom" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Ingrese Email" name="email" id="formUserMail" required>

    <label for="psw"><b>Contraseña</b></label>
    <input type="password" placeholder="Ingrese Contraseña" name="psw" id="formUserPass" required>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Recordarme
    </label>

    <button type="submit" id="btn-registrar">Registrate!</button>

    <p>Creando su usuario confirma estar de acuerdo con <a href="#" style="color:dodgerblue">Terminos & Privacidad</a>.</p>
    </div>
    `
}

// funcion registro

btnRegistro.onclick = function() {registerForm();}


registroform.addEventListener('submit', (e) => {
    e.preventDefault();
    usuario = new Usuario(

        userNombre = document.getElementById('formUserNom').value,
        userMail = document.getElementById('formUserMail').value,
        userPass = document.getElementById('formUserPass').value);
    
    Usuarios.push(usuario)
    localStorage.setItem('listadoUsuarios', JSON.stringify(Usuarios));
    alert('Usuario creado!')
    registroform.reset()
    console.log(Usuarios)
    validarCredenciales(userMail, userPass);
    let modal = document.getElementById('id01');
    let ingresoInicio = document.getElementById('ingresoInicio')
    modal.style.display = "none";
    ingresoInicio.style.display = "none"

    ingreso();
    
})

// funcion login
let usuarioActual;

function validarCredenciales (usuario, pass) {
    let acceso = false

    Usuarios = JSON.parse(localStorage.getItem('listadoUsuarios'))

    for (i = 0; i < Usuarios.length; i++){
        
        if (usuario == Usuarios[i].email && pass == Usuarios[i].contraseña){
            acceso = true
            
            usuarioActual = i
            
            usuarioActivo = Usuarios[usuarioActual].nombre
            saludar(usuarioActivo);
        } 
    }
    
    return acceso;
}

console.log(usuarioActual)

function saludar(usuario){
    let tituloSaludo = document.getElementById("titulo-revisar")

    tituloSaludo.innerText = "Hola, " + usuario + ". Revisa el listado de nuestros animales disponibles y muestrale los tuyos al resto de la comunidad!";
}

btnLogin.onclick = function() {validarCredenciales();}

//formulario usuarios

function ingreso(){

    formListas.innerHTML = `
    <div class="row">
            <div class="col-lg-12">

              <div class="card">
                  <div class="card-body mt-5" >
                    <form action="" id="animal-form">
                      <div class="form-group">
                        <input type="text" name="" placeholder="Ingrese ID del Animal" class="form-control datosAnimales" id="formIdAnimal">
                      </div>
                    
                      <div class="form-group">
                          <input type="text" name="" placeholder="Ingrese Tipo de Animal" class="form-control datosAnimales" id="formTipoAnimal">
                      </div>

                      <div class="form-group">
                        <input type="text" name="" placeholder="Ingrese Nombre de Animal" class="form-control datosAnimales" id="formNombreAnimal">
                      </div>

                      <div class="form-group">
                        <input type="text" name="" placeholder="Ingrese Color del Animal" class="form-control datosAnimales" id="formColorAnimal">
                      </div>

                      <div class="form-group">
                        <input type="text" name="" placeholder="Ingrese Comida del Animal" class="form-control datosAnimales" id="formComidaAnimal">
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
                <strong class="me-auto">Simple! Ya está agregado!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Nuevo elemento añadido a la lista!
            </div>
        </div>
    </div>
        `
        AnimalesGranja.forEach(animalesenArray => {
            listadoDisponible.innerHTML += `
        <div class="card animalListado m-3" id="animalListado${animalesenArray.id}">
            <div class="card-body">
                <h5 class="card-title">${animalesenArray.nombre}</h5>
                <p class="card-text">ID: ${animalesenArray.id}</p>
                <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
                <p class="card-text">Color: ${animalesenArray.color}</p>
                <p class="card-text">Comida: ${animalesenArray.comida}</p>
                <p class="card-text">Propiedad de: ${animalesenArray.usuario}</p>
            </div>
        </div>
        `
        });

    
    let formulario = document.getElementById("animal-form");

    formulario.addEventListener('submit', (event) => {
        debugger
        event.preventDefault();
        
        animales = new Animal(
    
            idanimal = document.getElementById('formIdAnimal').value,
            tipoanimal = document.getElementById('formTipoAnimal').value,
            nombreanimal = document.getElementById('formNombreAnimal').value,
            clranimal = document.getElementById('formColorAnimal').value,
            comidaanimal = document.getElementById('formComidaAnimal').value,
            usuarioanimal = usuarioActivo);
    
        AnimalesGranja.push(animales)
        localStorage.setItem('listadoAnimales', JSON.stringify(AnimalesGranja));
    
        let listadoDisponible = document.getElementById("listadoDisponible")
        listadoDisponible.innerHTML = ''
        AnimalesGranja.forEach(animalesenArray => {
            listadoDisponible.innerHTML += `
        <div class="card animalListado m-3" id="animalListado${animalesenArray.id}">
            <div class="card-body">
                <h5 class="card-title">${animalesenArray.nombre}</h5>
                <p class="card-text">ID: ${animalesenArray.id}</p>
                <p class="card-text">Tipo: ${animalesenArray.tipo}</p>
                <p class="card-text">Color: ${animalesenArray.color}</p>
                <p class="card-text">Comida: ${animalesenArray.comida}</p>
                <p class="card-text">Propiedad de: ${animalesenArray.usuario}</p>
            </div>
        </div>
        `
        });
        let toastTrigger = document.getElementById('btn-listadd')
        let toastLiveExample = document.getElementById('liveToast')
        if (toastTrigger) {
            toastTrigger.addEventListener('click', function () {
            let toast = new bootstrap.Toast(toastLiveExample)

            toast.show()
        })
}
        formulario.reset()
    
    })
}

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
        ingresoInicio.style.display = "none"

        ingreso();
    }
})





