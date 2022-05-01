
//Nombre usuario!

let nombre = prompt("Hola! Como te llamas?");


while (true) {
    if (nombre == null || nombre == "" || !isNaN(nombre)) {
        nombre = prompt("Nombre no válido. Ingrese su nombre, por favor.");
        continue;
    } else {
        break;
    }
}


// Cuantos animales tiene disponibles de trabajo.
let cantidadAnimales = parseInt(prompt("Cuentame " + nombre + ", cuantos animales tienes en tu granja? "));

while (true) {
    if (cantidadAnimales == null || cantidadAnimales == "" || isNaN(cantidadAnimales)) {
        cantidadAnimales = parseInt(prompt("Número no válido. Ingrese la cantidad de animales, por favor."));
        continue;
    } else {
        break;
    }
}

//Formacion de los objetos y sus propiedades dentro del array

let AnimalesGranja = []

class Animal {
    constructor(tipo, nombre, color, sonido) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.color = color;
        this.sonido = sonido;
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

//formacion del array dependiendo las necesidades del usuario

for (i = 0; i < cantidadAnimales; i++) {
    animales = new Animal(
        tipoanimal = prompt("Ingrese tipo de animal"),
        nombreanimal = prompt("Ingrese Nombre animal"),
        clranimal = prompt("Ingrese Color del animal"),
        sonidoanimal = prompt("Ingrese tipo de sonido que hace"));
    while (true) {
        if (tipoanimal == null || tipoanimal == "" || !isNaN(tipoanimal)) {
            tipoanimal = prompt("Tipo no válido. Ingrese el tipo, por favor.");
            continue;
        } else if (nombreanimal == null || nombreanimal == "" || !isNaN(nombreanimal)) {
            nombreanimal = prompt("Nombre no válido. Ingrese el nombre, por favor.");
            continue;
        } else if (clranimal == null || clranimal == "" || !isNaN(clranimal)) {
            clranimal = prompt("Color no válido. Ingrese el color, por favor.");
            continue;
        } else if (sonidoanimal == null || sonidoanimal == "" || !isNaN(sonidoanimal)) {
            sonidoanimal = prompt("Sonido no válido. Ingreselo correctamente, por favor.");
            continue;
        } else {
            AnimalesGranja.push(animales)
            break;
        }
    }
}


console.log(AnimalesGranja)

//ingreso de los datos a filtrar dependiendo necesidades del usuario

let datoAnimal = prompt("Que dato deseas buscar? Tipo / Nombre / Color / Sonido").toLowerCase();

while (true) {
    if (datoAnimal == null || datoAnimal == "" || !isNaN(datoAnimal)) {
        datoAnimal = prompt("Ingrese solo una de las siguientes opciones Tipo / Nombre / Color / Sonido");
        continue;
    } else if (datoAnimal == "tipo" ){
        busquedaAnimal = prompt("Que tipo de animal desea buscar?");
        break;
    } else if (datoAnimal == "nombre" ){
        busquedaAnimal = prompt("Que nombre de animal desea buscar?");
        break;
    } else if (datoAnimal == "color" ){
        busquedaAnimal = prompt("Que color de animal desea buscar?");
        break;
    } else if (datoAnimal == "sonido" ){
        busquedaAnimal = prompt("Que sonido de animal desea buscar?");
        break;
    } else if (busquedaAnimal == null || busquedaAnimal == "" || !isNaN(busquedaAnimal)) {
        alert("Ingreso no válido. Vuelva a ingresar");
        continue;
    } else {
        break;
    }
}

//procesamiento de la informacion y aplicacion del filtro

if (datoAnimal == "tipo" ){
    ResultadoBusqueda = AnimalesGranja.filter(bichito => bichito.tipo == busquedaAnimal)
    console.log(ResultadoBusqueda)
} else if (datoAnimal == "nombre" ){
    ResultadoBusqueda = AnimalesGranja.filter(bichito => bichito.nombre == busquedaAnimal)
    console.log(ResultadoBusqueda)
} else if (datoAnimal == "color" ){
    ResultadoBusqueda = AnimalesGranja.filter(bichito => bichito.color == busquedaAnimal)
    console.log(ResultadoBusqueda)
} else if (datoAnimal == "sonido" ){
    ResultadoBusqueda = AnimalesGranja.filter(bichito => bichito.sonido == busquedaAnimal)
    console.log(ResultadoBusqueda)
}

