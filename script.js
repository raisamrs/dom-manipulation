// Exercício 1 - Alterando o texto
// Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos.
const changeText2ndParagraph = (element, text) => {
  const emptyParagraph = document.querySelectorAll(element)[1];
  emptyParagraph.innerText = text;
};

changeText2ndParagraph('.center-content p', 'Daqui a dois anos, me vejo bem sucedida.');

// Exercício 2 - Alterando a cor - elemento amarelo
// Crie e execute uma função que mude a cor de fundo do elemento amarelo para rgb(76, 164, 109).
const mainContentBgColor = (element) => {
  const mainContent = document.getElementsByClassName(element)[0];
  mainContent.style.backgroundColor = 'rgb(76, 164, 109)';
};

mainContentBgColor('main-content');

// Exercício 3 - Alterando a cor - elemento vermelho
// Crie e execute uma função que mude a cor de fundo do elemento vermelho para branco.

const centerContentBgColor = (element) => {
  const centerContent = document.getElementsByClassName(element)[0];
  centerContent.style.backgroundColor = 'rgb(255, 255, 255)';
};

centerContentBgColor('center-content');

// Exercício 4 - Corrigindo o título
// Crie e execute uma função que corrija o texto da tag <h1>.
// O que será testado:
// - O título existente - O texto do título deve ser 'Desafio - JavaScript'

const changeTitleH1 = (element, text) => {
  const titleH1 = document.querySelectorAll(element)[0];
  titleH1.innerText = text;
};

changeTitleH1('header h1', 'Desafio - JavaScript');

// Exercício 5 - Letras maiúsculas
// Crie e execute uma função que modifique o texto da primeira tag <p> para letras maiúsculas.
const changeTextToUpperCase = (element, text) => {
  const firstParagraph = document.querySelectorAll(element)[0];
  firstParagraph.innerText = text;
};

changeTextToUpperCase('.main-content .center-content p:nth-child(1)', 'TEXTO PADRÃO DO NOSSO SITE');

// Exercício 6 - Exibindo tags
// Crie e execute uma função que exiba o conteúdo de todas as tags <p> da seção principal. Ou seja, filhas da classe center-content;
// Os conteúdos devem ser separados por espaços.

/* const showChangeOfContent = (catched, changed) => {
  const tags = document.querySelectorAll(catched);
  let change = '';
  for (let i = 0; i < catched.length; i += 1) {
    change = document.querySelector(changed);
    change.innerHTML += ` ${tags[i].innerHTML}  `;
  }
  return change;
};

showChangeOfContent('.center-content', 'footer p');
 */
