const h1 = document.querySelector('.name');
const buttonBold = document.querySelector('.bold');
const buttonItalic = document.querySelector('.italic');
const buttonUnderlined = document.querySelector('.underlined');

buttonBold.addEventListener('click', () => {
  h1.style.fontWeight = '700';
  h1.style.fontStyle = 'normal';
  h1.style.textDecoration = 'none';
})

buttonItalic.addEventListener('click', () => {
  h1.style.fontWeight = '400';
  h1.style.textDecoration = 'none';
  h1.style.fontStyle = 'italic';
})

buttonUnderlined.addEventListener('click', () => {
  h1.style.textDecoration = 'underline';
  h1.style.fontWeight = '400';
  h1.style.fontStyle = 'normal';
})