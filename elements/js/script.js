'use strict';

// УСТАРЕВШИЕ МЕДОТЫ, КОТОРЫЕ МОЖНО ВСТРЕТИТЬ В КОДЕ
const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button'); 
// const btns = document.getElementsByTagName('button')[1]; // (1) первый способ выбрать элемент массива
// в btns мы получили доступ не ко всем элементам с тэгом button, а псевдомассив

console.log(btns);
// console.log(btns [1]); // (2) второй способ выбрать элемент массива
// если элемент будет один, то чтобы к нему обратиться напрямую нужно выбирать его индекс массива
// в противном случае будет обращение к псевдомассиву (HTML колекции)

const circles = document.getElementsByClassName('circle');
console.log(circles);

// БОЛЕЕ СОВРЕМЕННЫЕ МЕТОДЫ
const hearts = document.querySelectorAll('.heart');
// console.log(hearts); // псевдо массив

// вывод кажого элемента heart поочередно
hearts.forEach(item => {
    console.log(item);
});

// метод .querySelector(); позволяет получить только один элемент со страницыю...
// ... при том первый элемент псевдо массива
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);