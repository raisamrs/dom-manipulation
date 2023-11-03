// Exercício 1 - Alterando o texto
// Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos.
const emptyParagraph = document.querySelectorAll('.center-content p')[1];
emptyParagraph.innerText = 'Daqui a dois anos, me vejo bem sucedida.';
