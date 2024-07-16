 import { header } from "../js/header.js";
header();
 const data = [
    {
        person: 'me',
        message: 'Labas rytas!',
    },
    {
        person: 'other',
        message: 'Labas rytas!',
    },
    {
        person: 'me',
        message: 'Ka tu?',
    },
    {
        person: 'other',
        message: 'Nieko, o ka tu?',
    },
    {
        person: 'me',
        message: 'Irgi nieko',
    },
    {
        person: 'other',
        message: '<div>Iprasta zinute... nera cia ko ziureti... 👀</div>',
    },
    {
        person: 'me',
        message: '<h3>Noriu valgyti!!</h3><ul><li>Kebabu</li><li>Cepelinu</li><li>Saltybarsciu</li></ul>',
    },
    {
        person: 'other',
        message: '<style>*{color: red;}</style>',
    },
];

const chatDOM = document.querySelector('.chat');

let HTML = '';

for (const msg of data) {
    const text = msg.message
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;')
        .replaceAll("=", '?');
    HTML += `<div class="msg ${msg.person}">${text}</div>`;
}

chatDOM.innerHTML = HTML;
 
 /* "use strict"

    let i = 5;

    for(let i = 0; i<5;i++)
    console.log(i);

    console.log('-------------');

    for (; i<10;i++) {
        console.log(i);
    }
        */
