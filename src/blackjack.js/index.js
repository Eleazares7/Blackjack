import { crearDeck , pedirCarta ,valorCarta , turnoComputadora} from "./useCases";

const miModulo = (() => {
    'use strict';

    let deck = [];
    const tipos = ["C", "D", "H", "S"],
        especiales = ["A", "J", "K", "Q"];

    let puntosJugadores = [];

    //Referencias del HTML
    const btnPedir = document.querySelector("#btnPedir"),
        btnDetener = document.querySelector("#btnDetener"),
        btnNuevo = document.querySelector("#btnNuevo"),
        puntosHTML = document.querySelectorAll("small"),
        divCartasJugadores = document.querySelectorAll(".divCartas");


    deck = crearDeck(tipos, especiales);

    //Esta funcion inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Esta funcion me permite tomar una carta


    pedirCarta(deck)

    //Turno 0 = primer jugador y el ultimo sera la computadora
    const acumularPunto = (carta, turno) => {
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement("img");
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasJugadores[turno].append(imgCarta);
    }

   


    // Eventos
    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPunto(carta, 0);

        crearCarta(carta, 0);

        if (puntosJugador > 21) {
            console.warn("Lo siento mucho, perdiste");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            btnPedir.disabled = true;

            turnoComputadora(puntosJugador,deck,divCartasJugadores, puntosJugadores,puntosHTML);
        } else if (puntosJugador === 21) {
            console.warn("21, Genial");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador,deck,divCartasJugadores, puntosJugadores,puntosHTML);
        }
    });


    btnDetener.addEventListener("click", () => {
        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora(puntosJugadores[0],deck,divCartasJugadores, puntosJugadores,puntosHTML);
    });


    btnNuevo.addEventListener("click", () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    }
})();