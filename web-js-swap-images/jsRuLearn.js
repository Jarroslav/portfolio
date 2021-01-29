/*
const user = {};

user.name = 'John';
user.surname = 'Smith';
console.log(user);

user.name = 'Pete';
console.log(user);

delete user.name;
console.log(user);*/
//-------------- Возвращает True если объект пустой, и False если нет
/*let user = {
    a: 'as',
};

function isEmpty(user) {
    for (let prop in user) {
        return false;
    }
    return true;
}
console.log(isEmpty(user));*/
//--------------- Функция считает ключи в объекте, если ключей нет, то покажет 0 ------
/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;

for (let key in salaries) {
    sum += salaries[key]; // sum = sum + salaries[key] - то же выражение, но длиннее
}
console.log(sum);*/
//-------------- Функция умножает числовые ключи на 2 ----------
/*let menu = {
    width: 200,
    height: 300,
    title: 'My menu',
};

console.log(menu);

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}

multiplyNumeric(menu) // необходимор сначала вызвать функцию. она не возвращает результат
console.log(menu); // возвращает результат вызванной ранее функции*/
// ---- Функция - стрелка -------------
/*const ask = (question, yes, no) => confirm(question) ? yes() : no()

ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
);*/
// ---- Числа Фибоначи (рекурсивный метод, чем больше число, тем больше выполнение -------------
/*function Fibonacci(n) {
    return n <= 1 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);
}
console.log(Fibonacci(40)) // выполняется долго*/


//----Функция принимает число и возвращает суму всех чисел до этого числа (итерация)-----
/*function sumTo(n) {
    let result = 0;
    for (n; n >= 0; n--) {
        result += n;
    }
    return result;
}

console.log(sumTo(55))*/
//--------рекурсия-------------
/*function sumToRecurs(n) {
    if(n == 1) {
        return n;
    } else {
        return n + sumToRecurs( n - 1)
    }
}

console.log(sumToRecurs(10))*/
//--------------арифметическая прогрессия---------------
/*
function sumToAlgebra(n) {
    return (((2 + --n) / (2 * ++n)) * 100).toFixed(0)
}

console.log(sumToAlgebra(10))*/
//---- класс принимает имя, фамилию возраст и мэйл, и выводит данные как строку ----------
/*class Animal {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} ${this.age} ${this.email}`
    }
}

const result = new Animal('bebra', 'noka', 20, 'bebno@mail.du')
console.log('' + result)*/

//----------DOM---------
/*
const showTag = document.getElementsByTagName('div')
console.log(showTag)

const showSecond = document.querySelector('li:nth-child(2');
console.log(showSecond)*/
//--создаёт элементы списка и записывает в них значения из массива. динамически изменяется-------
/*function addUsers(arr) {
    const list = document.getElementById('list');
    for(let i = 0; i < arr.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = arr[i];
        list.appendChild(listItem);
    }
}
const uslers = ['John', 'Kate', 'Alex', 'Kate', 'Fate'];

console.log(addUsers(uslers))*/
//-----изменяем prototype ---------
/*class User {
    name = 'Anonimus';

    sayHi() {
        console.log('Hi ' + this.name);
    }
}

new User().sayHi()*/
//----функция, которая выводит время в консоль----
/*function Clock({ template }) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function() {
        clearInterval(timer);
    };

    this.start = function() {
        render();
        timer = setInterval(render, 1000);
    };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();*/

//----- та же функция, что и выше, но записанная классом --------
/*class Clock {
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000)
    }
}

let clock = new Clock({template: 'h:m:s'});

class extendedClock extends Clock {
    constructor({template}, {precision}) {
        super(template);
        this.precision = precision;
    }
    render() {
        let ms = date.getMilliseconds();
        if(ms < 10) ms = '0' + ms;
    }
}


clock.start()*/
//--------------- DOM
/*
document.body.style.backgroundColor = 'gray';
setTimeout(() => document.body.style.background = '', 1000)

console.log(navigator.platform)
console.log(navigator.userAgent)
console.log(location.href)
// setTimeout(() => location.href = 'https://github.com/Jarroslav', 2000)

for(let node of document.body.childNodes) {
    console.log(node)
}
*/
/*document.getElementById('user');
user.addEventListener('click', () => console.log('user clicked'));*/
//----- при нажатии на кнопку скрывается текст
/*
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const text = document.getElementById('text');
    text.style.visibility = 'hidden';
})*/
//---- скрывает саму кнопку при нажатии -----
/*const btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    this.style.visibility = 'hidden';
})*/
/*class black {
    constructor() {

    }
}


const table = document.getElementById('table');
table.addEventListener('click', event => {
  const currentCell = event.target;
  currentCell.style.backgroundColor = 'red';
  console.log(currentCell)
}, true);*/
//----- меняет отображаемое изображение -------
/*let largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');
thumbs.addEventListener('click', event => {
  event.preventDefault();
  let targetLink = event.target.src;
  largeImg.src = targetLink;
});*/
//----- меняет отображаемое изображение через ссылку ----
let largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');
thumbs.addEventListener('click', event => {
  event.preventDefault();
  let targetLink = event.target.src;
  largeImg.src = event.target.closest('a').href; //closest('a') - ищет ближайший тег а и берёт его href
});
