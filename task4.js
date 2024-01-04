// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

function displayWindowSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.getElementById("widthValue").textContent = width;
    document.getElementById("heightValue").textContent = height;
}

window.onload = displayWindowSize;
window.onresize = displayWindowSize;