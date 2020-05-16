const word = document.querySelector('#word');
const outputMsg = document.querySelector('.output-message');
// console.log(word.value);
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// console.log(fruits.join(''));

function wordCount() {
  const wordValue = word.value;
  const noSpace = wordValue.replace(/\s/g, '');

  if (noSpace.length === 0) {
    outputMsg.innerHTML = `<p>No word typed</p>`;
  } else {
    outputMsg.innerHTML = noSpace.length;
  }
}

word.addEventListener('input', wordCount);
