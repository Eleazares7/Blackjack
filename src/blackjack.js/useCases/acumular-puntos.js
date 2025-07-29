import { valorCarta } from "./valor-carta";

 /**
  * 
  * @param {*} carta 
  * @param {*} turno 
  * @returns 
  */
 export const acumularPunto = (carta, turno, puntosJugadores,puntosHTML) => {
    
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];

        return puntosJugadores[turno];
    }
