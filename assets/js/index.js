
// EL usuario determinara cuántas veces desea jugar
let limiteDejugadas = parseInt(prompt(" Ingrese las cantidad de veces desea jugar contra Lord Darth Vader"));

// Contadores del juego
let contadorUsuario = 0;
let contadorMaquina = 0;

// Cantidad de veces que se jugará indicadas por el usuario
for (let i = 0; i <= limiteDejugadas; i++) {
    // Usuario ingresa su jugada
    let jugadaUsuario = prompt("Ingrese su jugada puede ser: Piedra, Papel o Tijera");
    
    //Jugada de la máquina
    let jugadaMaquina = Math.floor(Math.random() * 3); // 0: Piedra, 1: Papel, 2: Tijera
    
    // Resultado del juego
    let resultado;

    if (jugadaUsuario == "piedra") {
        if (jugadaMaquina == 0) {
            resultado = "Empate";
        } else if (jugadaMaquina == 1) {
            resultado = "¡Perdiste! El Emperador Lord Darth Vader eligió Papel.";
            contadorMaquina++;
        } else {
            resultado = "¡Ganaste! El Emperador Lord Darth Vader eligió Tijera.";
            contadorUsuario++;
        }
    } else if (jugadaUsuario == "papel") {
        if (jugadaMaquina == 0) {
            resultado = "¡Ganaste! El Emperador Lord Darth Vader eligió Piedra.";
            contadorUsuario++;
        } else if (jugadaMaquina == 1) {
            resultado = "Empate";
        } else {
            resultado = "¡Perdiste! El Emperador Lord Darth Vader eligió Tijera.";
            contadorMaquina++;
        }
    } else if (jugadaUsuario == "tijera") {
        if (jugadaMaquina == 0) {
            resultado = "¡Perdiste! El Emperador Lord Darth Vader eligió Piedra.";
            contadorMaquina++;
        } else if (jugadaMaquina == 1) {
            resultado = "¡Ganaste! El Emperador Lord Darth Vader eligió Papel.";
            contadorUsuario++;
        } else {
            resultado = "Empate";
        }
    } else {
        resultado = "Lo sentimos la jugada ingresada no es valida, elige una opción válida: Piedra, Papel o Tijera.";
    }

    // Mostramos el resultado
    alert(resultado);
}

// Mostramos el resultado final
if (contadorUsuario > contadorMaquina) {
    alert("¡Felicidades! ¡le has ganado al Emperador Lord Darth Vader!");
} else if (contadorUsuario < contadorMaquina) {
    alert("Lo Sentimos¡ El Emperador Lord Darth Vader ha ganado!");
} else {
    alert(" Uppps ¡Ha habido un empate! El Emperador no podrá conquistar la galaxía");
}
