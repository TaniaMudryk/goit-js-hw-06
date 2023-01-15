const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
     decrement() {
        this.value -= 1;
    },
};

const decremBtn = document.querySelector('[data-action="decrement"]');
const incremBtn = document.querySelector('[data-action="increment"]');  
const counterValue = document.querySelector('[id="value"]');

decremBtn.addEventListener('click', function () {
    counter.decrement();
    counterValue.textContent = counter.value;
    
});

incremBtn.addEventListener('click', function () {
    counter.increment();
    counterValue.textContent = counter.value;
    
});

/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/ 