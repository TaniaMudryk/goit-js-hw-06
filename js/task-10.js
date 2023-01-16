function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.getElementById("boxes");

createBtn.addEventListener("click", getBtn);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const sizeBase = 30;

  for (let i = 0; i < amount; i++) {
    const element = sizeBase + i * 10;

    const div = document.createElement("div");

    div.style.cssText = `
    width: ${element}px;
    height: ${element}px;
    background-color: ${getRandomHexColor()};`

    boxes.appendChild(div);
  }

}

function getBtn() {
  const amount = +document.querySelector("input").value;
  createBoxes(amount);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

/*
Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/ 