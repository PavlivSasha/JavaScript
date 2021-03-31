// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'grey';
mainHeader.textContent = 'feb-2021';

//     b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
for (let i = 0; i < ul.length; i++) {
    ul[i].style.width = '400px';
}

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (let i = 0; i < linkList.length; i++) {
    linkList[i].style.width = '50%';
}
//     d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
let text = '';
for (let i = 0; i < listElement2.length; i++) {
    text = listElement2[i].textContent;
}
console.log(text);
//     e) отримує всі елементи li та змінює ім колір фону на сірий
let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = 'grey';
}

//     f) отримує всі елементи 'a' та додає їм клас anchor
let as = document.getElementsByTagName('a');
for (let i = 0; i < as.length; i++) {
    as[i].classList.add('anchor');
}

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let i = 0; i < as.length; i++) {
    if (as[i].textContent === 'link3') {
        as[i].style.fontSize = '40px';
    }
}

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let i = 0; i < as.length; i++) {
    as[i].classList.add('element_XXX');
    as[i].textContent = 'XXX';
}

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeaders = document.getElementsByClassName('sub-header');
let color = prompt('Enter color');
for (let c of subHeaders) {
    c.style.backgroundColor = color;
}
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let color2 = prompt('Enter color');
for (let c of subHeaders) {
    if (c.textContent === 'content 2 segment') {
        c.style.color = color2;
    }
}

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1');
let textPromt = prompt('Enter text');
for (let t of content1) {
    t.textContent = textPromt;
}

//     l) отримати елементи p та змінити їм padding на 20px
let pis = document.getElementsByTagName('p');
for (let p of pis) {
    p.style.padding = '20px';
}

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text2Array = document.getElementsByClassName('text2');
for (let text of text2Array) {
    text.textContent = 'feb-2021';
}

// Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
let rules = [{
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];


for (let rul of rules) {
    let h2 = document.createElement('h2');
    let peshka = document.createElement('p');
    h2.innerHTML = `title: ${rul.title} `;
    peshka.innerHTML = ` body: ${rul.body}`
    document.body.appendChild(h2);
    document.body.appendChild(peshka);
}
for (rul of rules) {
    console.log(rul);
}


// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [{
        id: 1,
        name: 'vasya',
        age: 31,
        status: false
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false
    }
];

let citiesWithId = [{
        user_id: 3,
        country: 'USA',
        city: 'Portland'
    },
    {
        user_id: 1,
        country: 'Ukraine',
        city: 'Ternopil'
    },
    {
        user_id: 2,
        country: 'Poland',
        city: 'Krakow'
    },
    {
        user_id: 4,
        country: 'USA',
        city: 'Miami'
    }
];


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let newArray = [];
console.log('=====================');
for(let arr of usersWithId){
    for(let arr2 of citiesWithId){
        if(arr.id===arr2.user_id){
            newArray.push({id:arr.id, name: arr.name, city: arr2.city});
        }
        
    }   
}
for(let ar of newArray){
    console.log(ar);
}