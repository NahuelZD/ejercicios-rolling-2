// Ejercicio 1

function confirmarEdad() {
  let edad = document.getElementById("ejercicio1").value;
  console.log(edad);

  if (isNaN(edad))
    document.getElementById(
      "confirmarPase"
    ).innerHTML = `Ingresá un valor numérico, por favor.`;
  else {
    if (edad >= 18 && edad <= 50)
      document.getElementById(
        "confirmarPase"
      ).innerHTML = `Podés pasar, tenés ${edad} años.`;
    else if (edad < 18 && edad > 0)
      document.getElementById(
        "confirmarPase"
      ).innerHTML = `No podés pasar, tenés ${edad} años. Lo lamentamos!`;
    else if (edad <= 0)
      document.getElementById(
        "confirmarPase"
      ).innerHTML = `Pero si ni naciste aún!`;
    else if (edad > 50 && edad <= 75)
      document.getElementById(
        "confirmarPase"
      ).innerHTML = `Pará amigo, con ${edad} años deberías estar durmiendo. Pasá igual!`;
    else if (edad > 75 && edad < 100)
      document.getElementById(
        "confirmarPase"
      ).innerHTML = `Mirá mamá, un cadáver!!!! Ojo con tomar un poco de vodka`;
    else if (edad >= 100)
      document.getElementById(
        "confirmarPase"
      ).innerHTML = `De como no estás muerto, broder!`;
  }
}

// Ejercicio 2

function mostrarNota() {
  let nota = document.getElementById("ejercicio2").value;
  console.log(nota);
  if (isNaN(nota))
    document.getElementById(
      "confirmarNota"
    ).innerHTML = `Ingresá un valor numérico, por favor.`;
  else {
    if (nota < 0 || nota > 10)
      document.getElementById(
        "confirmarNota"
      ).innerHTML = `Ingresá un valor entre 0 y 10 capo. Qué es eso de andar poniendo ${nota}? Qué sos tonto?`;
    else if (nota >= 0 && nota <= 2)
      document.getElementById(
        "confirmarNota"
      ).innerHTML = `${nota}: Muy deficiente.`;
    else if (nota == 3 || nota == 4)
      document.getElementById(
        "confirmarNota"
      ).innerHTML = `${nota}: Insuficiente.`;
    else if (nota == 5 || nota == 6)
      document.getElementById(
        "confirmarNota"
      ).innerHTML = `${nota}: Suficiente.`;
    else if (nota == 7)
      document.getElementById("confirmarNota").innerHTML = `${nota}: Bien.`;
    else if (nota == 8 || nota == 9)
      document.getElementById("confirmarNota").innerHTML = `${nota}: Notable.`;
    else if (nota == 10)
      document.getElementById(
        "confirmarNota"
      ).innerHTML = `${nota}: Sobresaliente.`;
  }
}

// Ejercicio 3

function guardarCadenas() {
  let array = [];
  let cadenas;
  let mensajes;

  do {
    cadenas = confirm("Algo para decir?: ");
    if (!cadenas) break;
    mensajes = prompt("Qué cosa?:");
    array.push(mensajes);
  } while (cadenas);

  if (!cadenas) {
    document.getElementById("confirmarCadena").innerHTML = array.join(" - ");
  }
}

// Ejercicio 4

function sumarNumeros() {
  let resultado = 0;
  let cadenaConfirm;
  let numero;

  do {
    cadenaConfirm = confirm("Ingresás un número?");
    if (!cadenaConfirm) break;
    numero = prompt("Ingresá el número:");
    if (isNaN(numero)) alert("Ingrese un número!!!");
    else {
      parseInt(numero);
      resultado = resultado + numero;
    }
  } while (cadenaConfirm);

  Number(resultado);

  if (!cadenaConfirm) {
    document.getElementById(
      "confirmarSumaConfirm"
    ).innerHTML = `La suma de los números ingresados es: ${resultado}.`;
  }
}

// Ejercicio 5

function letraDNI() {
  let resultado;
  let dni;
  let confirma;
  let arrLetras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  do {
    confirma = confirm("Querés saber el valor de la letra de tu DNI?");
    if (!confirma) {
      alert("Adiós!");
      break;
    }
    dni = prompt("Ingresá tu DNI cape: ");
    if (isNaN(dni)) alert("Eso no es un DNI, zapato!");
    else {
      parseInt(dni);
      if (dni >= 0 && dni <= 99999999) {
        resultado = dni % 23;
        console.log(resultado);
        alert(`La letra correspondiente a tu DNI es: ${arrLetras[resultado]}`);
      }
    }
  } while (confirma);
}

// Ejercicio 6

function piramideNumeros() {
  for (let i = 1; i <= 30; i++) {
    for (let j = 1; j <= i; j++) {
      document.getElementById("escribirPiramide").innerHTML += `${i}`;
    }
    document.getElementById("escribirPiramide").innerHTML += `<br>`;
  }
}

// Ejercicio 7

function piramideDecre() {
  for (let i = 30; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.getElementById("invertirPiramide").innerHTML += `${i}`;
    }
    document.getElementById("invertirPiramide").innerHTML += `<br>`;
  }
}

// Ejercicio 8

function piramideCustom() {
  let valorFinal = document.getElementById("ejercicio8").value;
  let mensaje = document.getElementById("piramideCustom");
  mensaje.innerHTML = "";

  if (valorFinal > 50) alert(`Por favor, tiene que ser un número entre 1 y 50`);
  else {
    for (let i = 1; i <= valorFinal; i++) {
      for (let j = 1; j <= i; j++) {
        mensaje.innerHTML += `${i}`;
      }
      mensaje.innerHTML += `<br>`;
    }
  }
}

// Ejercicio 9

function multiplosCuatroNueve() {
  let mensaje = document.getElementById("mostrarMultiplos");
  mensaje.innerHTML = "";

  for (let i = 1; i <= 500; i++) {
    if (i % 4 == 0) mensaje.innerHTML += `<li>${i} (Múltiplo de 4)</li>`;
    else if (i % 9 == 0) mensaje.innerHTML += `<li>${i} (Múltiplo de 9)</li>`;
    else if (i % 5 == 0)
      mensaje.innerHTML += `<li>${i}</li><li>————————————————————-</li>`;
    else mensaje.innerHTML += `<li>${i}</li>`;
  }
}

const clearNueve = () => {
  let mensaje = document.getElementById("mostrarMultiplos");
  mensaje.innerHTML = "";
};

// Ejercicio 10 -- TERMINAR

function activarTabla() {
  let filas = document.getElementById("matrixFile").value;
  let columnas = document.getElementById("matrixColumn").value;
  let tabla = document.getElementById("mostrarTabla");
  tabla.classList.add('styleTabla')
  var contador = 0;

  tabla.innerHTML = '';

  for(let j=0; j<filas;j++){
    let col = document.createElement('tr');
    for(let i=0; i<columnas; i++){
      let row = document.createElement('td');
      row.textContent = `${(filas*columnas)-contador}`;
      contador++;
      col.appendChild(row);
    }
    tabla.appendChild(col);
  }
}

// Ejercicio 11

const mayorEdad = () => {
  let edades = document.getElementById("userAge").value;
  let nombres = document.getElementById("userName").value;
  let mostrar = document.getElementById("mostrarMayorEdad");
  let mayor;

  let tresEdadesStr = edades.split(" ");
  const tresEdadesNumber = tresEdadesStr.map((str) => {
    return Number(str);
  });
  let tresNombres = nombres.split(" ");
  mayor = Math.max(...tresEdadesNumber);

  mostrar.innerHTML = `El mayor es ${
    tresNombres[tresEdadesNumber.indexOf(mayor)]
  } con ${mayor} años.`;
};

// Ejercicio 12

function randomNumber() {
  alert(Math.floor(Math.random() * 100));
}

// Ejercicio 13

function mayusculas() {
  let texto = document.getElementById("toUpper").value;
  let mensaje = document.getElementById("textoMayusculas");

  mensaje.innerHTML = `Tu texto en mayúsculas es: ${texto.toUpperCase()}`;
}

// Ejercicio 14

function juntarChar() {
  let mensaje = document.getElementById("cadenaConSignos");
  let texto = document.getElementById("textoSTR").value;

  console.log(texto);

  mensaje.innerHTML = `El texto reemplazado es: `;
  for (let i = 0; i < texto.length; i++) {
    if (i == texto.length - 1) mensaje.innerHTML += `${texto[i]}`;
    else mensaje.innerHTML += `${texto[i]}-`;
  }
}

// Ejercicio 15

function contarVocales() {
  let texto = document.getElementById("textoVocales").value;
  let mensaje = document.getElementById("cantidadVocales");
  let resultado = 0;

  texto.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    if (
      texto[i] === "a" ||
      texto[i] === "e" ||
      texto[i] === "i" ||
      texto[i] === "o" ||
      texto[i] === "u"
    )
      resultado++;
    if (
      texto[i] === "á" ||
      texto[i] === "é" ||
      texto[i] === "í" ||
      texto[i] === "ó" ||
      texto[i] === "ú"
    )
      resultado++;
  }

  mensaje.innerHTML = `La cadena "${texto}" tiene ${resultado} vocales.`;
}

// Ejercicio 16
function invertirCadena() {
  let mensaje = document.getElementById("mostrarCadenaInvertida");
  let cadenas = document.getElementById("cadenaInversa").value;
  let reversed = [];

  for (let i = 0; i < cadenas.length; i++) {
    reversed.push(cadenas[cadenas.length - i - 1]);
  }

  mensaje.innerHTML = `La cadena "${cadenas}" invertida es: "${reversed.join(
    ""
  )}"`;
}

// Ejercicio 17

function primeraVocal() {
  let cadena = document.getElementById("vocalBusqueda").value;
  let vocal = 0;
  let index;

  for (let i = 0; i < cadena.length; i++) {
    if(vocal == 0){
      if (
        cadena[i] === "a" ||
        cadena[i] === "e" ||
        cadena[i] === "i" ||
        cadena[i] === "o" ||
        cadena[i] === "u"
      ) {
        vocal++;
        index = i;
      }
    }
    if(vocal == 0){
      if (
        cadena[i] === "á" ||
        cadena[i] === "é" ||
        cadena[i] === "í" ||
        cadena[i] === "ó" ||
        cadena[i] === "ú"
      ){
        vocal++;
        index = i;
      }
    }
    if(vocal != 0) alert(`La primera vocal está en la posición: ${index}`)
  }
}

const darkMode = () =>{
  let body = document.getElementById('cuerpoPagina');
  let tabla = document.getElementById('mostrarTabla');

  body.classList.toggle('darkMode');
  tabla.classList.toggle('darkTable');
}
