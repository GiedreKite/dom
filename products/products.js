// <button type="button">Click me</button>

import { header } from "../js/header.js";
header();

const formDOM = document.getElementsByTagName('form')[0];
formDOM.innerHTML = '<button type="button">Click me</button>';

const contentDOM = document.getElementById('content');
const ulDOM = contentDOM.querySelector('.products-list');

const products = [
    {
        title: 'Duona',
        count: 1,
    },
    {
        title: 'Sviestas',
        count: 1,
    },
    {
        title: 'Pomidoras',
        count: 3,
    },
    {
        title: 'Agurkas',
        count: 1,
    },
    {
        title: 'Grietinė',
        count: 2,
    },
    {
        title: 'Arbata',
        count: 1,
    },
];

let HTML = '';

for (let i = 0; i < products.length; i++) {
    HTML += `
        <li>
            <p class="title">${products[i].title}</p>
            <p class="count">${products[i].count}</p>
            <a href="#">Click me</a>
        </li>`;
}

ulDOM.innerHTML = HTML;

const allParsDOM = document.querySelectorAll('main > p');
console.log(allParsDOM);

const redElementsDOM = document.querySelectorAll('.red');
console.log(redElementsDOM);

for (const redDOM of redElementsDOM) {
    redDOM.style.backgroundColor = 'red';
    redDOM.style.fontSize = '2rem';
}