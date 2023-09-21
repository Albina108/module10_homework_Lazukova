

 /*задание 1 Напишите программу, которая работала бы следующим образом: 
 в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

Если это число, то вывести в консоль чётное оно или нечётное.

Если передано не число, выведите: «Упс, кажется, вы ошиблись»

*NaN, хоть и относится к типу Number, числом не является. 
Добавьте отдельную проверку для этого значения.*/

    let num = window.prompt("Enter a number");
    if(typeof(+num) === "number" && !isNaN(+num)){
       console.log("You entered a number");
      
      if (+num %2 == 0){
        console.log("Your number is odd");
        
      } else {
        console.log("Your number is even");
      
      }
      
    } else {
       console.log("You entered a wrong value");

    };


    /*задание 2. Дана переменная x, которая может принимать любое значение.
    Написать программу, которая в зависимости от типа данных x
    выводит в консоль сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу. 
В других случаях выводите сообщение: «Тип x не определён».*/

switch(typeof x){
    case("number"): 
      console.log("Тип переменной - число")
      break;
    case("string"): 
     console.log("Тип переменной - строка")
      break;
    case("boolean"): 
      console.log("Тип переменной - логический")
      break;
    default: 
      console.log("Тип переменной - не определен")
      break
}



//задание 3. Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


const str = 'hello';
 
const reverse = str.split('').reverse().join('');
console.log(reverse);

//задние 4. Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.


    document.write(Math.round(Math.random() * 100));*/

/*задание_5 Дан произвольный массив. Необходимо вывести количество элементов массива, 
    затем перебрать его и вывести в консоль каждый элемент массива.*/

const array = [10,20,30,40]
console.log(array.length)

for(let i=0; array.length > i ; i++) {
  console.log(array[i])
}

/*задание 6. Дан произвольный массив. Необходимо вывести количество элементов массива, 
затем перебрать его и вывести в консоль каждый элемент массива.*/


const arr = ['apple', 'orange', 'lemon', 'cherry', 'cucumber'];
document.write( arr.includes('apple'));
document.write( arr.includes('lemon', 2));


let check = arr.every(function(elem) {
	if (elem = 'string') {
		return true;
	} else {
		return false;
	}
});

document.write(check);


/*задание.7 Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
 Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, 
например, знаки, null и так далее.*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = arr.filter(number => {
  return number % 2 === 0;
})
console.log(even);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let odds = arr.filter(number =>{
  return number % 2 !==0;
  
})
console.log(odds);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, null, 'apple', 'undefined'];// как найти значение null  и undefined в массиве???
let odds = arr.filter(number =>{
  return number % 2 !== 0;
  
})
console.log(odds);
 
/*задание 8. Создайте произвольный массив Map. Получите его ключи и выведите
 в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.*/

let recipeMap = new Map([
    ["cucumber ", 500],
    ["tomato ", 350],
    ["onion ",    50]
  ]);
  
 
  for (let vegetable of recipeMap.keys()) {
    document.write(vegetable); 
  }
  
 
  for (let amount of recipeMap.values()) {
    alert(amount);
  }
  

  for (let entry of recipeMap) {
    console.log(entry); 
  }


  

   





 


