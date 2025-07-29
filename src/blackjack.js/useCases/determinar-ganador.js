/**
 * 
 */

export const determinarGanador = (puntosMinimos, puntosComputadora) => {

    

    setTimeout(() => {
        if (puntosMinimos === puntosComputadora) {
            alert("Nadie gano :(")
        } else if (puntosMinimos > 21) {
            alert("La computadora Gano")
        } else if (puntosComputadora > 21) {
            alert("Jugador Gana")
        } else {
            alert("Computadora gana")
        }
    }, 100);
}
