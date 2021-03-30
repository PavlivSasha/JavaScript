// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

//     a) отримує текст з параграфа з id "content"
let cont = document.getElementById('content');
console.log(cont.textContent);
//     b) отримує текст з блоку з id "rules"
let rul = document.getElementById('rules');
console.log(rul.textContent);
//     c) замініть текст параграфа з id 'content' на будь-який інший
cont.textContent = "Hello, it's meI was wondering if after all these years youd like to meetTo go over everything They say that times supposed to heal ya";
//     d) замініть текст параграфа з id 'rules' на будь-який інший
rul.textContent = `Hello from the other side
I must've called a thousand times
To tell you I'm sorry for everything that I've done
But when I call, you never seem to be home`;
//     e) змініть кожному елементу колір фону на червоний
cont.style.backgroundColor = 'red';
rul.style.backgroundColor = 'red';
let ul = document.getElementsByTagName('ul');
for (let i = 0; i < ul.length; i++) {
    ul[i].style.backgroundColor = 'red';
}

//     f) змініть кожному елементу колір тексту на синій
cont.style.color = 'blue';
rul.style.color = 'blue';
ul = document.getElementsByTagName('ul');
for (let i = 0; i < ul.length; i++) {
    ul[i].style.color = 'blue';
}

//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
for (let i = 0; i < rul.classList.length; i++) {
    console.log('Classes: ' + rul.classList[i]);
}

//     h) отримати всі елементи з класом fc_rules
let fcRules = document.getElementsByClassName('fc_rules');
for (let i = 0; i < fcRules.length; i++) {
    console.log(fcRules[i]);
}

//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let i = 0; i < fcRules.length; i++) {
    console.log(fcRules[i].style.color = 'red');
}




let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {
        city: 'Lviv',
        country: 'Ukraine',
        street: 'Shevchenko',
        houseNumber: 1
    }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {
        city: 'New York',
        country: 'USA',
        street: 'East str',
        houseNumber: 21
    }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {
        city: 'Budapest',
        country: 'Hungary',
        street: 'Kuraku',
        houseNumber: 78
    }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {
        city: 'Prague',
        country: 'Czech',
        street: 'Paster',
        houseNumber: 56
    }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {
        city: 'Istanbul',
        country: 'Turkey',
        street: 'Mikar',
        houseNumber: 39
    }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {
        city: 'Rio',
        country: 'Brasil',
        street: 'Ronaldi',
        houseNumber: 5
    }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {
        city: 'Montreal',
        country: 'Canada',
        street: 'Acusto',
        houseNumber: 90
    }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {
        city: 'Quebeck',
        country: 'Canada',
        street: 'Binaro',
        houseNumber: 33
    }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {
        city: 'Moscow',
        country: 'Russia',
        street: 'Gogolia',
        houseNumber: 1
    }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {
        city: 'Portland',
        country: 'USA',
        street: 'Forest str',
        houseNumber: 4
    }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {
        city: 'Cairo',
        country: 'Egypt',
        street: 'Seashore',
        houseNumber: 45
    }
}];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку

for (let i = 0; i < users.length; i++) {
    let divka = document.createElement('div');
    divka.style.padding = '10px';
    divka.style.marginBottom = '10px';

    divka.style.backgroundColor = 'gray';
    divka.textContent = JSON.stringify(users[i]);
    document.body.appendChild(divka);
}

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості

for (let i = 0; i < users.length; i++) {
    for (let user of Object.values(users[i])) {
        console.log(user);
        if (typeof user === 'object') {
            let adresa = document.createElement('div');
            adresa.style.padding = '10px';
            adresa.style.marginBottom = '10px';
            adresa.style.backgroundColor = 'tomato';
            adresa.style.fontWeight = 900;
            adresa.textContent = 'Address: \n';
            document.body.appendChild(adresa);
            let city = document.createElement('div');
            city.style.fontWeight = 300;
            city.textContent = 'City: ' + user.city;
            adresa.appendChild(city);
            let country = document.createElement('div');
            country.style.fontWeight = 300;
            country.textContent = 'Country: ' + user.country;
            adresa.appendChild(country);
            let street = document.createElement('div');
            street.style.fontWeight = 300;
            street.textContent = 'Street: ' + user.street;
            adresa.appendChild(city);
            let houseNumber = document.createElement('div');
            houseNumber.style.fontWeight = 300;
            houseNumber.textContent = 'HouseNumber: ' + user.city;
            adresa.appendChild(houseNumber);
        } else {
            let elmnts = document.createElement('div');
            elmnts.style.backgroundColor = 'gold';
            elmnts.textContent = user;
            document.body.appendChild(elmnts);
        }
    }
}
