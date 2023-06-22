const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl= document.querySelector("ul") 

ingredients.map((ingredient)=>{
const itemEl=document.createElement("li");
itemEl.classList.add("item");
itemEl.textContent=ingredient;
ulEl.insertAdjacentElement("afterbegin", itemEl);
console.log(itemEl);
}).join('');
