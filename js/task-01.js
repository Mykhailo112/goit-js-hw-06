const qtyCategory=document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${qtyCategory}`);

const arrCategory=document.querySelectorAll("li.item")

arrCategory.forEach((item)=> {
const category = item.querySelector("h2").textContent;
console.log(`Category: ${category}`);
console.log(`Elements: ${item.lastElementChild.children.length}`);
});