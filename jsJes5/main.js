// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model, county, year, maxSpeed, engine) {
    this.model = model;
    this.county = county;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    this.info = function () {
        console.log(`model: ${this.model}, country: ${this.country}, year: ${this.year}, max speed: ${this.maxSpeed}, engine: ${this.engine}`);
    }
    this.increaseMaxSpeed = function (maxSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`new max speed: ${this.maxSpeed}`);
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(`new year: ${this.year}`);
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}


let c = new Car('nissan', 'japan', 2021, 300, 4.0);
c.addDriver({
    name: 'Petro',
    age: 23
});
console.log(c);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car2 {
    constructor() {
        this.model = 'Mersedes';
        this.county = 'Germany';
        this.year = 2015;
        this.maxSpeed = 280;
        this.engine = 3.5;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    }
    info() {
        console.log(`model: ${this.model}, country: ${this.country}, year: ${this.year}, max speed: ${this.maxSpeed}, engine: ${this.engine}`);
    }
    increaseMaxSpeed(maxSpeed) {
        this.maxSpeed += newSpeed;
        console.log(`new max speed: ${this.maxSpeed}`);
    }
    changeYear(newValue) {
        this.year = newValue;
        console.log(`new year: ${this.year}`);
    }
    addDriver(driver) {
        this.driver = driver;
    }
}

let mers = new Car2();
console.log(mers);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

class Cinderella {
    constructor(name, age, leg) {
        this.name = name;
        this.age = age;
        this.leg = leg;
    }
}


let ss = [new Cinderella('Olga', 19, 31),
    new Cinderella('Nastya', 23, 32),
    new Cinderella('Julya', 20, 33),
    new Cinderella('OLenka', 25, 34),
    new Cinderella('Forel', 14, 35),
    new Cinderella('Dusya', 23, 36),
    new Cinderella('Mira', 24, 37),
    new Cinderella('Ksu', 30, 38),
    new Cinderella('Mara', 29, 39),
    new Cinderella('Kora', 28, 40)
]

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Gosha', 26, 35);

for (let d of ss) {
    if (prince.shoe === d.leg) {
        console.log(`попелюшка ${d.name} повинна бути з принцом`);
    }
}

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


function Sinderella(name, age, leg) {
    this.name = name;
    this.age = age;
    this.leg = leg;
}

let ss2 = [new Sinderella('Hara', 18, 28),
    new Sinderella('Gara', 18, 28),
    new Sinderella('Vara', 30, 29),
    new Sinderella('Sara', 14, 30),
    new Sinderella('Tara', 16, 27),
    new Sinderella('MOsha', 18, 26),
    new Sinderella('Helen', 19, 25),
    new Sinderella('Jonna', 20, 24),
    new Sinderella('Vika', 24, 23),
    new Sinderella('Nika', 26, 32)
]

function Prince2(name, age, shoe) {
    this.name = name;
    this.age = age;
    this.shoe = shoe;
    this.whatIsSinderella = function (array) {
        for (let ar of array) {
            if (shoe === ar.leg) {
                console.log(`попелюшка ${ar.name} повинна бути з принцом`);
            }
        }
    }
}

let prince2 = new Prince2('Friman', 27, 32);
prince2.whatIsSinderella(ss2);

// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
// -a
function a() {
    this.title = 'a';
    this.action = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.`;
    this.atrbs = [{
            name: 'идентификатор',
            href: 'URL'
        },
        {
            target: 'Имя окна или фрейма',
            type: 'Указывает MIME-тип документа'
        }
    ]
}

let aOb = new a();
console.log(aOb);

// -div
function div() {
    this.title = 'div';
    this.action = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`
    this.atrbs = [{
            align: 'Задает выравнивание содержимого тега <div>.'
        },
        {
            titlee: 'Добавляет всплывающую подсказку к содержимому.'
        }
    ]
}

let divOb = new div();
console.log(divOb);

// -h1
function h1() {
    this.title = 'h1';
    this.action = `тег <h1> представляет собой наиболее важный заголовок первого уровня`;
    this.atrbs = [{
            align: 'Определяет выравнивание заголовка.'
        },
        {
            dir: 'Задает направление и отображение текста — слева направо или справа налево.'
        }
    ]
}

//  -span
let h1Ob = new h1();
console.log(h1Ob);

function span() {
    this.title = 'span';
    this.action = `Тег <span> предназначен для определения строчных элементов документа.`;
    this.atrbs = [{
            dir: 'Задает направление и отображение текста — слева направо или справа налево.'
        },
        {
            hidden: 'Скрывает содержимое элемента от просмотра'
        }
    ]
}


let spanOb = new span();
console.log(spanOb);

//  -input
function input() {
    this.title = 'input';
    this.action = `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.`;
    this.atrbs = [{
            border: 'Толщина рамки вокруг изображения.'
        },
        {
            disabled: 'Блокирует доступ и изменение элемента.'
        }
    ]
}

let inputOb = new input();
console.log(inputOb);

//  -form
function form() {
    this.title = 'form';
    this.action = `Тег <form> устанавливает форму на веб-странице.`;
    this.atrbs = [{
            actionn: 'Адрес программы или документа, который обрабатывает данные формы.',
        },
        {
            enctype: 'Способ кодирования данных формы.'
        }
    ]
}

let formOb = new form();
console.log(formOb);

//  -option
function option() {
    this.title = 'option';
    this.action = `Тег <option> определяет отдельные пункты списка`;
    this.atrbs = [{
        label: 'Указание метки пункта списка.',
        value: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'
    }]
}

let optionOb = new option();
console.log(optionOb);

//  -select
function select() {
    this.title = 'select';
    this.action = `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка`;
    this.atrbs = [{
        form: 'Связывает список с формой.',
        size: 'Количество отображаемых строк списка.'
    }]
}

let selectOb = new select();
console.log(selectOb);


console.log('=============================================================================================================================================================');

// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги:
//  -a
class aTag {
    constructor(title, action, atrbs) {
        this.title = title;
        this.action = action;
        this.atrbs = atrbs;
    }
}

//  -div
class divTag {
    constructor(title, action, atrbs) {
        this.title = title;
        this.action = action;
        this.atrbs = atrbs;
    }
}

//  -h1
class h1Tag {
    constructor(title, action, atrbs) {
        this.title = title;
        this.action = action;
        this.atrbs = atrbs;
    }
}

//  -span
class spanTag {
    constructor(title, action, atrbs) {
        this.title = title;
        this.action = action;
        this.atrbs = atrbs;
    }
}

//  -input
class inputTag {
    constructor(title, action, atrbs) {
        this.title = title;
        this.action = action;
        this.atrbs = atrbs;
    }
}

//  -form
class formTag {
    constructor(title, action, atrbs) {
        this.title = title;
        this.action = action;
        this.atrbs = atrbs;
    }
}

//  -option
class optionTag {
    constructor(title, action, atrbs) {
        this.title = title;
        this.action = action;
        this.atrbs = atrbs;
    }
}

//  -select
class selectTag {
    constructor(title, action, atrbs) {
        this.title = title;
        this.action = action;
        this.atrbs = atrbs;
    }
}

let atag = new aTag('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
    {name: 'идентификатор'},
    {href: 'URL'}
]);
console.log(atag);

let divtag = new divTag('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', [
    {align: 'Задает выравнивание содержимого тега <div>.'},
    {titlee: 'Добавляет всплывающую подсказку к содержимому.'}
]);
console.log(divtag);

let h1tag = new h1Tag('h`', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
    {align: 'Определяет выравнивание заголовка.'},
    {dir: 'Задает направление и отображение текста — слева направо или справа налево.'}
]);
console.log(h1tag);

let spantag = new spanTag('span', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
    {border: 'Толщина рамки вокруг изображения.'},
    {disabled: 'Блокирует доступ и изменение элемента.'}
]);
console.log(spantag);

let inputtag = new inputTag('input', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
    {actionn: 'Адрес программы или документа, который обрабатывает данные формы.'},
    {enctype: 'Способ кодирования данных формы.'}
]);
console.log(inputtag);

let formtag = new formTag('form', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
    {label: 'Указание метки пункта списка.'},
    {value: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'}
]);
console.log(formtag);

let optiontag = new optionTag('option', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
    {label: 'Указание метки пункта списка.'},
    {value: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов'}
]);
console.log(optiontag);

let selecttag = new selectTag('select', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', [
    {form: 'Связывает список с формой.'},
    {size: 'Количество отображаемых строк списка.'}
]);
console.log(selecttag);
console.log('=============================================================================================================================================================');


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let car = {
    model: 'Nissan',
    country: 'Japan',
    year: 2020,
    maxSpeed: 360,
    engine: 3.0,
    drive: function(){
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
    },
    info: function(){
        console.log(`model: ${this.model}, country: ${this.country}, year: ${this.year}, max speed: ${this.maxSpeed}, engine: ${this.engine}` );
    },
    increaseMaxSpeed: function(newSpeed){
        this.maxSpeed+=newSpeed;
        console.log(`new max speed: ${this.maxSpeed}`);
    },
    changeYear: function(newValue){
        this.year=newValue;
        console.log(`new year: ${this.year}`);
    },
    addDriver: function(driver){
        this.driver = driver;
    }
}

car.changeYear(2021);
console.log(car.year);
car.increaseMaxSpeed(20);
console.log(car.maxSpeed);
car.addDriver({name: 'Grisha', age: 23, driveкLicenses: true});
console.log(car.driver);