// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
let matuki = ['dad', 'mum', 'gusak', 'vodka', 'math'];
let input = document.forms.form1.input;
let btn = document.forms.form1.btn;
btn.onclick = () => {
    if (matuki.includes(input.value)) {
        alert('Ne matukaysya');
    }
}
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let input2 = document.forms.form2.input2;
let btn2 = document.forms.form2.btn2;
btn2.onclick = (ev) => {
    ev.preventDefault();
    for (let i = 0; i < matuki.length; i++) {
        if (input2.value.includes(matuki[i])) {
            alert('Ne matukaysya');
        }
        alert(input2.value);
    }
}
// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

// -- Взяти масив юзерів
const usersWithAddress = [{
        id: 9,
        name: 'vasya',
        age: 31,
        isMarried: false,
        address: {
            city: 'Kyiv',
            street: 'Gongadze',
            number: 16
        }
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        isMarried: true,
        address: {
            city: 'Rivne',
            street: 'Zelena',
            number: 1
        }
    },
    {
        id: 4,
        name: 'kolya',
        age: 29,
        isMarried: true,
        address: {
            city: 'Lviv',
            street: 'Pasichna',
            number: 121
        }
    },
    {
        id: 3,
        name: 'olya',
        age: 28,
        isMarried: false,
        address: {
            city: 'Rivne',
            street: 'Shevchenko',
            number: 90
        }
    },
    {
        id: 8,
        name: 'max',
        age: 30,
        isMarried: true,
        address: {
            city: 'Lviv',
            street: 'Kriva Lipa',
            number: 115
        }
    },
    {
        id: 6,
        name: 'anya',
        age: 31,
        isMarried: false,
        address: {
            city: 'Lviv',
            street: 'Shevchenko',
            number: 2
        }
    },
    {
        id: 10,
        name: 'oleg',
        age: 28,
        isMarried: false,
        address: {
            city: 'Kyiv',
            street: 'Centralna',
            number: 22
        }
    },
    {
        id: 5,
        name: 'andrey',
        age: 29,
        isMarried: true,
        address: {
            city: 'Lviv',
            street: 'Gorodotska',
            number: 43
        }
    },
    {
        id: 1,
        name: 'masha',
        age: 30,
        isMarried: true,
        address: {
            city: 'Kyiv',
            street: 'Peremogi',
            number: 12
        }
    },
    {
        id: 7,
        name: 'olya',
        age: 31,
        isMarried: false,
        address: {
            city: 'Lviv',
            street: 'Naukova',
            number: 16
        }
    },
    {
        id: 11,
        name: 'max',
        age: 31,
        isMarried: true,
        address: {
            city: 'Rivne',
            street: 'Ivana Franka',
            number: 121
        }
    }
];
let counter = 0;
let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

function generateUsers(users) {
    users.forEach(el => {
        let newDiv = (document.createElement('div'));
        let id = (document.createElement('p'));
        let name = document.createElement('p');
        let age = document.createElement('p');
        let isMarried = document.createElement('p');
        let addres = document.createElement('div');
        let city = document.createElement('p');
        let street = document.createElement('p');
        let number = document.createElement('p');

        newDiv.id = counter++;
        newDiv.style.display = 'flex';
        newDiv.style.marginBottom = '10px';
        newDiv.style.justifyContent = 'space-between';

        addres.style.display = 'flex';

        id.innerText = 'id: ' + el.id + ' ';
        name.innerText = 'name: ' + el.name + ' ';
        age.innerText = 'age: ' + el.age + ' ';
        isMarried.innerText = 'isMarried: ' + el.isMarried + ' ';
        addres.innerHTML = 'address: ' + ' ';
        city.innerText = 'city: ' + el.address.city + ' ';
        street.innerText = 'street: ' + el.address.street + ' ';
        number.innerText = 'number: ' + el.address.number + ' ';

        addres.appendChild(city);
        addres.appendChild(street);
        addres.appendChild(number);
        newDiv.appendChild(id);
        newDiv.appendChild(name);
        newDiv.appendChild(age);
        newDiv.appendChild(isMarried);
        newDiv.appendChild(addres);
        root.appendChild(newDiv);
    });
}

generateUsers(usersWithAddress);

function clearData() {
    root.innerHTML = '';
}


let chek1 = document.getElementById('chek1');
let chek2 = document.getElementById('chek2');
let chek3 = document.getElementById('chek3');
let copy = usersWithAddress.map(value=>{
    let m = {...value};
    return m;
})

// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

chek1.onclick = (ev) => {
    if(ev.target.checked){
        clearData();
         copy = copy.filter(value=>!value.isMarried);
        generateUsers(copy);
    }else{
        clearData();
        generateUsers(usersWithAddress);
    }   
}
chek2.onclick = (ev) => {
    if(ev.target.checked){
        clearData();
         copy = copy.filter(value=>value.age>=29);
        generateUsers(copy);
    }else{
        clearData();
        generateUsers(usersWithAddress);
    }   
}
chek3.onclick = (ev) => {
    if(ev.target.checked){
        clearData();
        copy = copy.filter(value=>value.address.city==='Kyiv');
        generateUsers(copy);
    }else{
        clearData();
        generateUsers(usersWithAddress);
    }   
}

