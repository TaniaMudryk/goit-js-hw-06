const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const container = document.getElementById("ingredients");

const ulElem = document.createElement("ul");

for (const ingredient of ingredients) {
  const liElem = document.createElement("li");
  liElem.classList.add("item");
  liElem.textContent = ingredient;
  ulElem.appendChild(liElem);
}

container.appendChild(ulElem);

