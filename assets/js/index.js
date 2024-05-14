
// EL usuario determinara cuántas veces desea jugar
let limiteDejugadas = parseInt(prompt(" Ingrese las cantidad de veces desea jugar contra la maquina"));

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
            resultado = "¡Perdiste! La máquina eligió Papel.";
            contadorMaquina++;
        } else {
            resultado = "¡Ganaste! La máquina eligió Tijera.";
            contadorUsuario++;
        }
    } else if (jugadaUsuario == "papel") {
        if (jugadaMaquina == 0) {
            resultado = "¡Ganaste! La máquina eligió Piedra.";
            contadorUsuario++;
        } else if (jugadaMaquina == 1) {
            resultado = "Empate";
        } else {
            resultado = "¡Perdiste! La máquina eligió Tijera.";
            contadorMaquina++;
        }
    } else if (jugadaUsuario == "tijera") {
        if (jugadaMaquina == 0) {
            resultado = "¡Perdiste! La máquina eligió Piedra.";
            contadorMaquina++;
        } else if (jugadaMaquina == 1) {
            resultado = "¡Ganaste! La máquina eligió Papel.";
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
    alert("¡Felicidades! ¡le has ganado a la maquina!");
} else if (contadorUsuario < contadorMaquina) {
    alert("Lo Sentimos¡La máquina ha ganado!");
} else {
    alert(" Uppps ¡Ha habido un empate!");
}
