// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
let divka = document.getElementById('text');
divka.onclick = () => {
    divka.style.display = 'none'
}
// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
let form1 = document.forms.form1;
let btn = form1.btn;
btn.onclick = (ev) => {
    ev.preventDefault();
    btn.style.display = 'none';
}
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
let input = form1.inp;
let btn2 = form1.btn2;

btn2.onclick = (ev) => {
    ev.preventDefault();
    let text = input.value;
    if (text > 18) {
        alert(text);

    } else alert('gege');
}

// - Створіть меню, яке розгортається/згортається при клику
let ddiv = document.getElementById('ddiv');
let flag = false;
ddiv.onclick = () => {
    if (!flag) {
        ddiv.style.width = '10px';
        ddiv.style.height = '10px';
        flag = true;
    } else {
        ddiv.style.width = '200px';
        ddiv.style.height = '200px';
        flag = false;
    }
}

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.

let comments = [{
    title: 'Title 1',
    body: 'lorem ipsum dolo sit ameti'
}, {
    title: 'Title 2',
    body: 'lorem ipsum dolo sit ameti'
}, {
    title: 'Title 3',
    body: 'lorem ipsum dolo sit ameti'
}];
let root = document.getElementById('root');
for (let i = 0; i < comments.length; i++) {
    let newDiv = (document.createElement('div'));
    let title = document.createElement('h1');
    let body = document.createElement('p');
    let but = document.createElement('button');

    newDiv.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    but.innerText = 'Click';
    but.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';

    title.innerText = comments[i].title;
    body.innerText = comments[i].body;

    but.onclick = () => {
        body.hidden = !body.hidden;
    }
    newDiv.appendChild(title);
    newDiv.appendChild(body);
    newDiv.appendChild(but);

    root.appendChild(newDiv);
}

console.log(comments);

// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let formOne = document.forms.one;
let formTwo = document.forms.two;
let in1 = formOne.in1;
let in2 = formOne.in2;
let in3 = formTwo.in3;
let in4 = formTwo.in4;

let button2 = document.getElementById('button2');
button2.onclick = (ev) => {
    ev.preventDefault();
    let value1 = in1.value;
    let value2 = in2.value;
    let value3 = in3.value;
    let value4 = in4.value;
    console.log(value1 + ' ' + value2 + ' ' + value3 + ' ' + value4);
}

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
function func(value1, value2, createElement) {
    let table = document.createElement('table');
    createElement.appendChild(table);
    for (let i = 0; i < value1; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < value2; j++) {
            let td = document.createElement('td');
            td.innerText = 's';
            tr.appendChild(td);
        }
    }
}
func(10, 10, ddiv);
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
let arrImg = [{
        src: 'images/k1.jpg',
        alt: '/k1'
    },
    {
        src: 'images/k2.jpg',
        alt: '/k2'
    },
    {
        src: 'images/k3.jpg',
        alt: '/k3'
    },
    {
        src: 'images/k4.jpg',
        alt: '/k4'
    },
    {
        src: 'images/k5.jfif',
        alt: '/k5'
    }

]
let img = document.getElementById('img');
let butL = document.getElementById('butLeft');
let butR = document.getElementById('butRight');
let index = 0;

butL.onclick = () => {
        if(index-1<0){
            index=arrImg.length-1;
        }else{
            index-=1;
        }
        img.src = arrImg[index].src;

}
butR.onclick = () => {
    if(index+1>arrImg.length-1){
        index=0;
    }else{
        index+=1;
    }
    img.src = arrImg[index].src;

}