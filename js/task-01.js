/* 
1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).*/

const categoriesElem = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesElem.length);

categoriesElem.forEach((elem) => {
    console.log("Category: ", elem.firstElementChild.textContent);
    console.log("Elements: ", elem.querySelectorAll("li").length);
});

/* 
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
*/