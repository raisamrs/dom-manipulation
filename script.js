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
