// 1 - import
import { header } from './js/header.js';

// 2 - turinio generavimas
const pokeUrl = 'https://upload.wikimedia.org/wikipedia/en/a/a6/Pokémon_Pikachu_art.png';
const mainDOM = document.querySelector('main');
mainDOM.innerHTML = `<img src="${pokeUrl}" alt="Poke poke">`;

// 3 - jau esamo turinio radimas ir event'o registravimas
const buttonDOM = document.querySelector('button');

buttonDOM.addEventListener('click', () => {
    console.log('Valio!!!!');
});

// 4 - BOOM!!!!!!!!!
header(true);