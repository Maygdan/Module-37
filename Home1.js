// 1 задание
const userInput = prompt("Введите что-то:");
let end=''
if (userInput === null || userInput === "") {
    console.log('Нужно ввести слово');
} else {
    for (let i = userInput.length - 1; i >= 0; i-=1) {
        end+=userInput[i];
    }
}
if (userInput.toLowerCase()===end.toLowerCase() && end !==''){
console.log(`Слово ${end} является палиндромом`)
} else {
  console.log(`Слово ${end} не является палиндромом`)  
}

//2 задание 
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
console.log(Array.from(new Set(arr)).join(', '))
//про join() узнал из документации, не знаю почему, но 
// без него вывод происходит списком(не на одной строке)

// 3 задание 
const us = prompt('Введите число:');
const massiv = [];
if (us !== '' && !isNaN(Number(us))) {
    // Заполняем массив числами от 0 до num-1
    for (let i = 0; i < Number(us)+1; i += 1) {
        massiv.push(i);
    }
    console.log(massiv);
} else {
    console.log('Пожалуйста, введите число');
}

// 4 задание
const x='x';
const o='o';
const size=3;
let pole ='';
for(let i=0;i<size;i+=1){
    for(let j=0;j<size;j+=1){
        if((i+j)%2===0){
            pole+=x;
            } 
        else{
            pole+=o;
        }
        if (j < size - 1) {
            pole += ' '; 
        }
    }
    pole+='\n'
}
console.log(pole);

// 5 задание
const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };
let arrValues=[];
for(let val in obj){
    if (Array.isArray(obj[val])){
        for(let i of obj[val]){
            arrValues.push(i);
        continue;
        }
    }else{
        arrValues.push(obj[val])
    }
}
console.log(arrValues);

