import { acumularPunto } from "./acumular-puntos";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";


/**
 * 
 * @param {Number} puntosMinimos  puntos minimos que la computadora necesita para ganar
 * @param {Array <stirng>} deck 
 */

export const turnoComputadora = (puntosMinimos, deck = [],divCartasJugadores,puntosJugadores,puntosHTML) => {
    console.log(puntosMinimos);
    
    if (puntosMinimos < 0) throw new Error("Puntos minimos son necesarios");

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPunto(carta, puntosJugadores.length - 1,puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

        if (puntosMinimos > 21) break;

    } while ((puntosMinimos > puntosComputadora) && (puntosMinimos <= 21));

    determinarGanador(puntosMinimos, puntosComputadora);
};