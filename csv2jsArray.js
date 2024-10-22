// converte planilha em csv 

// muda a extensao de csv para TXT

// abre o arquivo no navegador
// 	file:///home/helio/0-Entrada/novos-contatos-20240828-H-21-08.txt

////////////

// código no CONSOLE:

// obtem toda a planilha:
let arq = document.querySelectorAll(`pre`)[0].innerText;

// converte para listas de registros:
arq = arq.split('\n');

// cria nova lista:
let arqNovo = [];

// cada registro divide em campos:
arq.map(e=>{ arqNovo.push(e.split(',')); });


// salva a variavel arqNovo em LOCALSTORAGE

// https://warcontent.com/localstorage-javascript/

// JSON.stringify() antes de passar o valor ao setItem();

// JSON.parse() para ler o objeto depois.


// ESCREVE no localStorage:
localStorage.setItem('Dados', JSON.stringify(arqNovo));


//////////

// LER o localStorage:

// Carregar todo o conteudo do localStorage para a memória:
let lerDados = JSON.parse(localStorage.getItem('Dados'));


// ler o 1a linha/registro:
lerDados[1][1];

// insere em algum elemento da página
document.querySelector('#etc').innerText = lerDados[3][1];

// ou mesmo para formar uma url que se abrirá:
let urlPagina = `https://google.com/&s=${lerDados[1][1]}`;

// conforme o contato usa os dados correspondentes que estavam no localStorage para acessar informações ou consultar noutro site os dados daquele contato...

/////////


// copiar para o CLIPBOARD o valor de um dado de localStorage:
let dado = lerDados[0][1];

// cria um elemento html tipo textarea
let textArea = document.createElement("textarea");
// que recebe um valor:
textArea.value = dado;
// insere este elemento na página:
document.body.appendChild(textArea);
// dá foco nele
textArea.focus();
// seleciona
textArea.select();
// copia:  
let copiado = document.execCommand('copy');
// apaga o elemento html criado:
document.body.removeChild(textArea);









// copiar para o clipboard
// fonte = https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript



// para criar este link simbólico:
// ln -s ~/1-Trabalhos/Desenvolvimento\ Web/csv2jsArray.js .

