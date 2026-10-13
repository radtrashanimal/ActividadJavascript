//Ejercicio 1
// Autocuración con posciones de vida
// Genera un programa que tome encuenta una variable de vida 
// y si esta es menor a 50, se le sumen 30 puntos de vida
// Agrega una variable para controlar el limite inferior para usar pociones y otra variable para controlar el limite superior de vida
// Agrega también una variable para controlar la cantidad de pociones que tiene el jugador
// Usa que se ejecute cada 2 segundos y que baje la vida del jugador en 5 puntos hasta llegar a 0 
// Para esto último vas a necesitar investigar la función setInterval() de Javascript

// Variables de vida y pociones
let vida = 100;
let limiteInferior = 50;
let limiteSuperior = 100;
let pociones = 3;

// Función para autocuración


function autocuracion() {
    if (vida < limiteInferior && pociones > 0) {
        vida = Math.min(vida + 30, limiteSuperior);
        pociones--;
        console.log('Usaste una poción. Vida actual: ' + vida + '. Pociones restantes: ' + pociones);
    } else if (vida >= limiteInferior) {
        console.log('No necesitas usar una poción. Vida actual: ' + vida);
    } else if (pociones === 0) {
        console.log('No tienes más pociones. Vida actual: ' + vida);
    }
}

// Función para disminuir la vida
function disminuirVida() {
    vida -= 5;
    if (vida < 0) {
        vida = 0;
    }
    console.log('Vida actual: ' + vida);
    autocuracion();
}

const intervaloAutocuracion = setInterval(function() {
    disminuirVida();
    if (vida === 0) {
        clearInterval(intervaloAutocuracion);
    }
}, 2000);


//Ejercicio 2
// Organiza los elementos de la bolsa
// Crea un programa que tenga un arreglo de objetos con los elementos de la bolsa de un jugador
// Cada objeto debe tener un nombre, una cantidad y un tipo de elemento
// Crea una función que divida el arreglo en 3 arreglos diferentes dependiendo del tipo de elemento y que los muestre ordenados por cantidad en consola 
// Muestra el resultado en consola
// Ejemplo de arreglo de objetos:

let bolsa = [
    { nombre: 'Poción', cantidad: 5, tipo: 'Consumible' },
    { nombre: 'Pokebola', cantidad: 10, tipo: 'Captura' },
    { nombre: 'Antídoto', cantidad: 2, tipo: 'Consumible' },
    { nombre: 'Revive', cantidad: 1, tipo: 'Consumible' },
    { nombre: 'Superball', cantidad: 3, tipo: 'Captura' },
    { nombre: 'Huevo', cantidad: 1, tipo: 'Objeto Especial' }
];  
// Función para organizar los elementos de la bolsa
function organizarBolsa(bolsa) {
    let consumibles = [];
    let capturas = [];
    let objetosEspeciales = [];

    bolsa.forEach(function(elemento) {
        switch(elemento.tipo) {
            case 'Consumible':
                consumibles.push(elemento);
                break;
            case 'Captura':
                capturas.push(elemento);
                break;
            case 'Objeto Especial':
                objetosEspeciales.push(elemento);
                break;
        }
    });

    // Ordenar cada arreglo por cantidad
    consumibles.sort(function(a, b) {
        return b.cantidad - a.cantidad;
    });
    capturas.sort(function(a, b) {
        return b.cantidad - a.cantidad;
    });
    objetosEspeciales.sort(function(a, b) {
        return b.cantidad - a.cantidad;
    });

    // Mostrar los resultados en consola
    console.log('Consumibles:');
    consumibles.forEach(function(elemento) {
        console.log('- ' + elemento.nombre + ': ' + elemento.cantidad);
    });

    console.log('Capturas:');
    capturas.forEach(function(elemento) {
        console.log('- ' + elemento.nombre + ': ' + elemento.cantidad);
    });

    console.log('Objetos Especiales:');
    objetosEspeciales.forEach(function(elemento) {
        console.log('- ' + elemento.nombre + ': ' + elemento.cantidad);
    });
}

organizarBolsa(bolsa);

//Ejercicio 3
//Crea un programa que tomando en cuenta las caracteristicas de los pokemones (2)
//Ejecute funciones de ataque y cálculo de daño dependiendo de las estadisticas del pokemon para cálculo de daño
//Ejemplo: Pikachu lanza un ataque que hace 20 de daño, 
// si el pokemon enemigo tiene 50 de vida, al recibir el ataque 
// le quedaran 30 de vida, pero si el pokemon enemigo tiene 10 de defensa, 
// el ataque de Pikachu le hará 10 de daño y le quedarán 40 de vida

// Crea un arreglo de objetos con los pokemones y sus estadisticas
let pokemones = [
    { nombre: 'Pikachu', ataque: 20, defensa: 10, vida: 50 },
    { nombre: 'Charmander', ataque: 15, defensa: 5, vida: 40 },
    { nombre: 'Bulbasaur', ataque: 10, defensa: 8, vida: 60 }
];

// Función para calcular el daño
function calcularDanio(atacante, defensor) {
    let danio = atacante.ataque - defensor.defensa;
    if (danio < 0) {
        danio = 0;
    }   
    defensor.vida -= danio;
    if (defensor.vida < 0) {
        defensor.vida = 0;
    }
    console.log(atacante.nombre + ' atacó a ' + defensor.nombre + ' y le hizo ' + danio + ' de daño. Vida restante de ' + defensor.nombre + ': ' + defensor.vida);
}

// Ejemplo de ataque
calcularDanio(pokemones[0], pokemones[1]); // Pikachu ataca a Charmander
calcularDanio(pokemones[1], pokemones[2]); // Charmander ataca a Bulbasaur
calcularDanio(pokemones[2], pokemones[0]); // Bulbasaur ataca a Pikachu
