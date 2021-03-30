// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let one = 1;
// let ten = 10;
// let nine = -999;
// let pi = 3.14;
// console.log(hello + " " + owu);
// alert(ua);
// alert(ten);
// document.write(nine);
// document.write('<br>');
// document.write(pi);
// let ame = prompt('Name');
// let surname = prompt('Surname');
// let age = prompt('Age');
// alert(ame + " " + surname + " " + age);
// let number1 = prompt('num1');
// let number2 = prompt('num2');
// let number3 = prompt('num3');
// number1 = +number1;
// number2 = +number2;
// number3 = +number3;
// numbResult = number3+number2+number1;
// alert(numbResult);
// let number4 = prompt('num4');
// let number5 = prompt('num5');
// let number6 = prompt('num6');
// number4 = Number.parseInt(number4);
// number5 = Number.parseInt(number5);
// number6 = Number.parseInt(number6);
// alert(numbResult=number4+number5+number6);
// let number7 = Number.parseFloat( prompt('num7'));
// let number8 = Number.parseFloat( prompt('num8'));
// let number9 = Number.parseFloat( prompt('num9'));
// let result = number7+number8+number9;
// let number10 = Number.parseFloat( prompt('num10'));
// let number11 = Number.parseFloat( prompt('num11'));
// let number12 = Number.parseFloat( prompt('num12'));
// let result = number10+number11+number12;
// result = Math.floor(result);

// console.log(result);
// let number13 = prompt('num13');
// let number14 = prompt('num14');
// let result2 = Math.pow(number13,number14);
// console.log(result2);
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// console.log(5<6);
// console.log(5>6);
// console.log(5===6);
// console.log(5>=6);
// console.log(10===10);
// console.log(10==10);
// console.log(10>10);
// console.log(10<10);
// console.log(10!=10);
// console.log(123==='123');
// console.log(123=='123');
// console.log(132 > 100 && 45 < 12 );
// console.log(34 > 33 && 23 < 90 );
// console.log(99 > 100 && 45 > 12 );
// console.log(132 > 100 || 45 < 12 );
// console.log(111 > 11 || 45 < 111 );
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// console.log(!!'-1');
// console.log(!!-1);
// console.log(!!'0');
// console.log(!!'null');
// console.log(!!'undefined');
// console.log(!!(3/'owu'));
// console.log((111 > 11 || 45 < 111) ||  !!'0');
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

let light2 = prompt('light');
let isRoadClear = confirm('is Road Clear?');

if(light2 === 'green'&&isRoadClear===true){
    console.log('go');
}
else if(light2 === 'green'&&isRoadClear===false){
    console.log('wait until the violators pass');
}
else if(light2 === 'yellow'&&isRoadClear===false){
    console.log('wait');
}
else if(light2 === 'yellow'&&isRoadClear===true){
    console.log('wait all early');
}
else if(light2 === 'red'&&isRoadClear===true){
    console.log('stay early');
}
else if(light2 === 'red'&&isRoadClear===false){
    console.log('stay and wait');
} else console.log('do what you want');
    