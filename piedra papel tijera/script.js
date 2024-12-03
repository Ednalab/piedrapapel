// Clase base para el juego
class Juego {
    constructor() {
        if (this.constructor === Juego) {
            throw new Error("No se puede instanciar una clase abstracta");
        }
    }

    jugar() {
        throw new Error("Método 'jugar' debe ser implementado en la subclase");
    }
}

// Clase para el juego básico Piedra, Papel o Tijera
class PiedraPapelTijera extends Juego {
    choices = ["piedra", "papel", "tijera"]; // Propiedad protegida

    jugar(eleccionJugador) {
        const eleccionComputadora = this.obtenerEleccionComputadora();
        const resultado = this.determinarGanador(eleccionJugador, eleccionComputadora);
        document.getElementById("result").innerText = resultado;
    }

    obtenerEleccionComputadora() {
        return this.choices[Math.floor(Math.random() * this.choices.length)];
    }

    determinarGanador(jugador, computadora) {
        if (jugador === computadora) {
            return `Empate. Ambos eligieron ${jugador}!`;
        } else if (
            (jugador === "piedra" && computadora === "tijera") ||
            (jugador === "papel" && computadora === "piedra") ||
            (jugador === "tijera" && computadora === "papel")
        ) {
            return `¡Ganaste! ${jugador} vence a ${computadora}`;
        } else {
            return `Perdiste. ${computadora} vence a ${jugador}`;
        }
    }
}

// Instancia de PiedraPapelTijera
const juego = new PiedraPapelTijera();
