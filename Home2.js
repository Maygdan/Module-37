// 1 задание 
let person ={
    name: 'Jay',
    Age: 25
};

function printInfo()  {console.log(`Hi, my name is ${this.name}, i am ${this.Age} years old. Nice to meet you.`) ;}

printInfo.call(person);

// 2 задание 

function calculate(arr){
    let num1 = arr[0];
    let num2 = arr[1];
    let operation = arr[2];
    if (operation === '+'){
        return console.log(`Сумма чисел равна ${num1+num2}`)
    }
    else if (operation === '-'){
        return console.log(`Разность чисел равна ${num1-num2}`)
    }
    else if (operation === '*'){
        return console.log(`Произведение чисел равно ${num1*num2}`)  
    }
    else if (operation === '/'){
        return console.log(`Частное чисел равно ${num1/num2}`)
    }
    else {
        return console.log('Указаны неверные параметры')
    };
};

calculate([2,3,'+'])

// 3 задание 

let persons = [
    {name: 'Kai Senat', age: 25},
    {name: 'Nick Walter', age: 23},
    {name: 'Josh Wash', age: 21},
    {name: 'Rosa Brown', age: 14}
];

const newArr = persons.filter(({age}) => age >= 18);
console.log(newArr);

// 4 задание

let Man = {
    Firstname: 'Kai',
    Secondname: 'Senat'    
};

function setFullName(Fullname){
    this.Fullname=Fullname;
};

const setPersonFullName= setFullName.bind(Man);
setPersonFullName('Kai Senat');
console.log(Man);



// 5 задание



function sort(arr){
    const newArr = Array.from(new Set(arr));
    newArr.sort((a,b)=>a-b);
    return newArr; 
};
console.log(sort([7,6,3,1,5,6,1,4,1,2]));