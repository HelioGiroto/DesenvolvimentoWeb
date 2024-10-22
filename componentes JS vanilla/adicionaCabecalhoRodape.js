// aqui criamos os componentes adicionando em BODY [como HTML += :]
const body = document.querySelector('body');
const componenteHeader = "<header><h1>Este é o header tipo componente</h1><span>1 2 3 4</span></header>";
const componenteRodape = "<footer><p>RODAPÉ tipo Componente</p></footer>";

// posiciona o header:
// ANTES:
// nao funciona pq se o componente por ser position=relative, nao assumiria a posicao correta, e...
// se assume o position=absolute, a div central dica sobposta.
// body.innerHTML += componenteHeader;

// AGORA: posiciona melhor:
body.insertAdjacentHTML('afterbegin', componenteHeader);
// insere um HTML EM afterbegin = "Logo DENTRO do elemento (body, no caso), ANTES de seu PRIMEIRO filho."
// assume a posiçao de um childNode[0]
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML#afterbegin



// posiciona o footer:
// ANTES (funcionava igual)
// body.innerHTML += componenteRodape;

// ou
body.insertAdjacentHTML('beforeend', componenteRodape);
// beforeend = Logo DENTRO do elemento (body, no caso), APÓS seu ÚLTIMO filho.
// assumime a posiçao de um childNode[-1]  // como se -1 existisse no JS para indicar o último!!!


// explicação:

    // beforebegin
// ELEMENT
    // afterbegin
    // beforend
// ELEMENT
    // afterend


////////////

// DIV: para criar outros componentes...
// MAIS SIMPLES NO CASO DE DIV INTERMEDIÁRIAS (nem header nem footer):

// tz este código abaixo seja mais ideal para melhor posicionamento das divs ...
// veja o inspector como o header ficou sobreposto à div central pq usamos += no body.
// porém abaixo, os componentes ficariam dentro de uma div (header, footer) já posicionada na página padrão...

// let componenteHeader = "<div class='cabecalho'><h1>Este é o header tipo componente</h1><span>1 2 3 4</span></div>";
// document.querySelector('header').innerHTML = componenteHeader;
// 
// 
// let componenteRodape = "<div class='rodape'><p>RODAPÉ tipo Componente</p></div>"
// document.querySelector('footer').innerHTML = componenteRodape;



// Teste - OK !!!!!!! :
const componenteCentralMais = "<div>Novo Componente Extra!</div>";
// document.querySelector('.central').insertAdjacentHTML('beforeend', componenteCentralMais);
document.querySelector('.central').innerHTML += componenteCentralMais;
// acima: observe o "+="  // ("append")