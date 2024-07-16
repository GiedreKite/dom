const data = [
    {href: '', text:'Home'},
    {href: './products/', text:'Products'},
    {href: './about-us/', text:'About us'},
    {href: './contact/', text:'Contact'},
    {href: './pokstas/', text:'Pokstas'},
    {href: './sportas/', text:'Sportas'},
    {href: './automobiliai/', text:'Automobiliai'},
    {href: './namai/', text:'Namai'},
    {href: './chat/', text:'Chat'},
];

export function header(isHomepage = false) {
    const dot = isHomepage ? '' : '.';
    let navHTML = '';

    for (const item of data) {
        navHTML += `<a href="${dot}./${item.href}">${item.text}</a>`;
    }

    document.body.insertAdjacentHTML('afterbegin', `
        <header>
            <img src="#" alt="Logo">
            <nav>${navHTML}</nav>
        </header>`);
}
