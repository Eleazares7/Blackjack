/**
 * Pedir una carta
 * @param {Array <String>} deck - Es un arreglo de String
 * @returns {String } - Retorna la carta del decj
 * 
 */

export const pedirCarta = (deck) => {
        
    if (!deck ||deck.length === 0) throw new Error('No hay cartas en el deck');
    return deck.pop();
}