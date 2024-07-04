
/*
Reikia sukurti masyva, kuriame yra atskirais objektais
aprasyti 10 pokemonu, t.y.
- pavadinimas
- pagrindine spalva
- nuoroda i paveiksliuka is isorinio saltinio (https://www.pokemonai.com/pokemon/bulbazauras.png)
- forma (ilgas, apvalus, kvardratinis)
- tipas (zeme, oras, vanduo, ugnis...)

Visus juos reikia sugeneruoti i <main> tag'a kaip
naujus <article> HTML objektus
<article>
    <img>
    <p>Pavadinimas</p>
    <p>savybe 1</p>
    <p>savybe 2</p>
    <p>savybe 3</p>
    <a href="nuoroda i oficialu saltini">Read more</a>
</article>

Dar reikia bent minimalaus dizaino,
gal net panaudoti CSS grid.

Nuoroda turi atsidaryti naujame narsykles tab'e.
*/

const initialElementDOM = document.getElementById('initial_element');

initialElementDOM.innerHTML = `
    
    <article class="postas">
        <img src="#" alt="Logo">
        <p>text</p>
        <p>color</p>
        <p>forma</p>   
        <p>tipas</p>
        <link rel="stylesheet" href="">
    </article>
    
    
  `;

const articleDOM = document.querySelector('article');

const mainLinksData = [
    {
        img: '1',
        text: 'Where my brains?',
        color: 'pink',
        forma: '50%',
        tipas: 'randama pas kaikuriuos zmones',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=QQkEWAwn&id=60A761F59BE8325D624DC11C12D57140FCC88D62&thid=OIP.QQkEWAwnREkBM62T_LSFtQHaHa&mediaurl=https%3a%2f%2fgitpiper.com%2fassets%2fmemes%2fprogramming-meme-e4d7062f-d839-414e-984c-332866c86602.webp&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.410904580c2744490133ad93fcb485b5%3frik%3dYo3I%252fEBx1RIcwQ%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1080&q=funny+memes+programmer&simid=608036768530458690&FORM=IRPRST&ck=89E3FA3159B8A4896B8AC5AF7C90C836&selectedIndex=10&itb=0&ajaxhist=0&ajaxserp=0',
    },
    {
        img: '2',
        text: 'Why?',
        color: 'blue',
        forma: '0',
        tipas: 'randami studentai paskaitoje',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=8zji9UOG&id=B67AA94004D06CDC80C5BBBC60C6A59B3B5DFED1&thid=OIP.8zji9UOGyN2hl7nQBd0POQHaHa&mediaurl=https%3a%2f%2fprogrammerhumor.io%2fwp-content%2fuploads%2f2022%2f10%2fprogrammerhumor-io-debugging-memes-programming-memes-738c256053760ee.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f338e2f54386c8dda197b9d005dd0f39%3frik%3d0f5dO5ulxmC8uw%26pid%3dImgRaw%26r%3d0&exph=1081&expw=1080&q=funny+memes+programmer&simid=607996898360588218&FORM=IRPRST&ck=559F44BF480A0432E6F9DFC345C7954F&selectedIndex=20&itb=0&ajaxhist=0&ajaxserp=0',
    },
    {
        img: '3',
        text: 'Problem?',
        color: 'green',
        forma: '20%',
        tipas: 'studentu savarankiskas darbas',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=Koxg1K0U&id=BAC1208A0BA1D5773B473B681888562F0C06DA3B&thid=OIP.Koxg1K0UuGUdDFwdm_7nJwHaHa&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6b%2F23%2F70%2F6b237060aada7018d149e0af69de0671.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.2a8c60d4ad14b8651d0c5c1d9bfee727%3Frik%3DO9oGDC9WiBhoOw%26pid%3DImgRaw%26r%3D0&exph=721&expw=720&q=funny+memes+programmer&simid=607997860451659328&form=IRPRST&ck=54AD4C25593B96AE8583795F5D9768CD&selectedindex=19&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11',
    },
    {
        img: '4',
        text: 'Giedres sugebejimai',
        color: 'red',
        forma: '20px',
        tipas: 'Giedre bando nulauzti programa arba save...',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=Rv9YcMDR&id=A4DB9460503CF8640F0AAAC312A643C8C641C876&thid=OIP.Rv9YcMDRIpxajoNlxucOeAHaI4&mediaurl=https%3a%2f%2fwww.thecoderpedia.com%2fwp-content%2fuploads%2f2020%2f06%2fCoding-Jokes-Bugs-Errors-Lines-of-Code-854x1024.jpg%3fx80061&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.46ff5870c0d1229c5a8e8365c6e70e78%3frik%3ddshBxshDphLDqg%26pid%3dImgRaw%26r%3d0&exph=1024&expw=854&q=funny+memes+programmer&simid=607992199674139945&FORM=IRPRST&ck=FC5AF83060E0402F6FF51495664AEE7F&selectedIndex=13&itb=0&ajaxhist=0&ajaxserp=0',
    },
    {
        img: '5',
        text: 'Giedres kompiuteris',
        color: 'orange',
        forma: '90px',
        tipas: 'Giedres kompiuteris savo gyvena...',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=%2B1nldPiA&id=E9D13008C0D250E6D621145A0979E7140352623F&thid=OIP.-1nldPiAVGnqKoo8RpODTwHaH-&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2F39%2F92%2F153992f2cc7429fedc0c540fd57e28e9.png&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.fb59e574f8805469ea2a8a3c4693834f%3Frik%3DP2JSAxTneQlaFA%26pid%3DImgRaw%26r%3D0&exph=2692&expw=2500&q=funny+memes+programmer&simid=608044937582366268&form=IRPRST&ck=6A5A5FB522D197B140F8B493FAA70E58&selectedindex=18&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11',
    },
 {
        img: '1',
        text: 'Where my brains?',
        color: 'pink',
        forma: '50%',
        tipas: 'randama pas kaikuriuos zmones',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=QQkEWAwn&id=60A761F59BE8325D624DC11C12D57140FCC88D62&thid=OIP.QQkEWAwnREkBM62T_LSFtQHaHa&mediaurl=https%3a%2f%2fgitpiper.com%2fassets%2fmemes%2fprogramming-meme-e4d7062f-d839-414e-984c-332866c86602.webp&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.410904580c2744490133ad93fcb485b5%3frik%3dYo3I%252fEBx1RIcwQ%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1080&q=funny+memes+programmer&simid=608036768530458690&FORM=IRPRST&ck=89E3FA3159B8A4896B8AC5AF7C90C836&selectedIndex=10&itb=0&ajaxhist=0&ajaxserp=0',
    },
    {
        img: '2',
        text: 'Why?',
        color: 'blue',
        forma: '0',
        tipas: 'randami studentai paskaitoje',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=8zji9UOG&id=B67AA94004D06CDC80C5BBBC60C6A59B3B5DFED1&thid=OIP.8zji9UOGyN2hl7nQBd0POQHaHa&mediaurl=https%3a%2f%2fprogrammerhumor.io%2fwp-content%2fuploads%2f2022%2f10%2fprogrammerhumor-io-debugging-memes-programming-memes-738c256053760ee.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f338e2f54386c8dda197b9d005dd0f39%3frik%3d0f5dO5ulxmC8uw%26pid%3dImgRaw%26r%3d0&exph=1081&expw=1080&q=funny+memes+programmer&simid=607996898360588218&FORM=IRPRST&ck=559F44BF480A0432E6F9DFC345C7954F&selectedIndex=20&itb=0&ajaxhist=0&ajaxserp=0',
    },
    {
        img: '3',
        text: 'Problem?',
        color: 'green',
        forma: '20%',
        tipas: 'studentu savarankiskas darbas',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=Koxg1K0U&id=BAC1208A0BA1D5773B473B681888562F0C06DA3B&thid=OIP.Koxg1K0UuGUdDFwdm_7nJwHaHa&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F6b%2F23%2F70%2F6b237060aada7018d149e0af69de0671.jpg&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.2a8c60d4ad14b8651d0c5c1d9bfee727%3Frik%3DO9oGDC9WiBhoOw%26pid%3DImgRaw%26r%3D0&exph=721&expw=720&q=funny+memes+programmer&simid=607997860451659328&form=IRPRST&ck=54AD4C25593B96AE8583795F5D9768CD&selectedindex=19&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11',
    },
    {
        img: '4',
        text: 'Giedres sugebejimai',
        color: 'red',
        forma: '20px',
        tipas: 'Giedre bando nulauzti programa arba save...',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=Rv9YcMDR&id=A4DB9460503CF8640F0AAAC312A643C8C641C876&thid=OIP.Rv9YcMDRIpxajoNlxucOeAHaI4&mediaurl=https%3a%2f%2fwww.thecoderpedia.com%2fwp-content%2fuploads%2f2020%2f06%2fCoding-Jokes-Bugs-Errors-Lines-of-Code-854x1024.jpg%3fx80061&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.46ff5870c0d1229c5a8e8365c6e70e78%3frik%3ddshBxshDphLDqg%26pid%3dImgRaw%26r%3d0&exph=1024&expw=854&q=funny+memes+programmer&simid=607992199674139945&FORM=IRPRST&ck=FC5AF83060E0402F6FF51495664AEE7F&selectedIndex=13&itb=0&ajaxhist=0&ajaxserp=0',
    },
    {
        img: '5',
        text: 'Giedres kompiuteris',
        color: 'orange',
        forma: '90px',
        tipas: 'Giedres kompiuteris savo gyvena...',
        link: 'https://www.bing.com/images/search?view=detailV2&ccid=%2B1nldPiA&id=E9D13008C0D250E6D621145A0979E7140352623F&thid=OIP.-1nldPiAVGnqKoo8RpODTwHaH-&mediaurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F15%2F39%2F92%2F153992f2cc7429fedc0c540fd57e28e9.png&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.fb59e574f8805469ea2a8a3c4693834f%3Frik%3DP2JSAxTneQlaFA%26pid%3DImgRaw%26r%3D0&exph=2692&expw=2500&q=funny+memes+programmer&simid=608044937582366268&form=IRPRST&ck=6A5A5FB522D197B140F8B493FAA70E58&selectedindex=18&itb=0&ajaxhist=0&ajaxserp=0&vt=0&sim=11',
    },    
];


let articleHTML = '';

for (const linkData of mainLinksData) {
        articleHTML += `<article class="pokstas"style="background-color: ${linkData.color}; border-radius:${linkData.forma}"> 
        <img src="../img/${linkData.img}.jpg" alt="photo"> 
        <p class="pavadinimas" >${linkData.text}</p>
        <p class="color">${linkData.color}</p>
        <p class="forma">${linkData.forma}</p> 
        <p class="tipas">${linkData.tipas}</p> 
        <a class="link" href="${linkData.link}">Read more</a> 
         </article>`
        
        ;
   
}

articleDOM.innerHTML = articleHTML;
console.log(articleDOM);

const colorElementsDOM = document.querySelectorAll('.color');
console.log(colorElementsDOM);


for (const colorDOM of colorElementsDOM) {
    colorDOM.style.backgroundColor = `${colorDOM.innerHTML}`;
    console.log(colorDOM)
    
}
console.log(colorElementsDOM);
console.log()

const formaElementsDOM = document.querySelectorAll('.forma');
console.log(formaElementsDOM);


for (const formaDOM of formaElementsDOM) {
    pokstasElementsDOM.style.borderRadius = `${formaDOM.innerHTML}`;
    console.log(formaDOM)
}
console.log(formaElementsDOM);

/*
 .pokstas {
    grid-area: article;
    height: 550px;
    width: 400px;
    display:flex;
    flex-direction: column;
    gap: 0.25rem;
    background-color: aqua;
    border: 0.2rem solid green;
    border-radius: 20px;
} */