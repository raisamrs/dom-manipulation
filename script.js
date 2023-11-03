// Exercício 1 - Alterando o texto
// Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos.
const emptyParagraph = document.querySelectorAll('.center-content p')[1];
emptyParagraph.innerText = 'Daqui a dois anos, me vejo bem sucedida.';

// Exercício 2 - Alterando a cor - elemento amarelo
// Crie e execute uma função que mude a cor de fundo do elemento amarelo para rgb(76, 164, 109).
const leftRighElement = document.getElementsByClassName('main-content')[0];
leftRighElement.style.backgroundColor = 'rgb(76, 164, 109)';
