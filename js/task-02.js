const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

const liElements = ingredients.map((ingredients) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredients;
  itemEl.classList.add('item');
  return itemEl;
});

listEl.append(...liElements);