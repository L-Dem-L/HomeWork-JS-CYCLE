/**
1. Подсчитать сумму всех чисел в заданном пользователем
диапазоне. 
*/

// let firstNumber = Number(prompt("Enter first number"));
// let lastNumber = Number(prompt("Enter last number"));
// let sum = 0;

// while (firstNumber <= lastNumber) {
//     sum += firstNumber;
//     firstNumber++;
// }
// alert(sum);
// console.log(sum);

//----------------------------------------------------------------//

/**
2. Запросить 2 числа и найти только наибольший общий делитель.
*/

// let firstNumber = Number(prompt("Enter first number"));
// let lastNumber = Number(prompt("Enter last number"));
// let divideNumber = 0;

// function calc(x, y) {
//     let c;
//     while (x != y) {
//         if (x > y) {
//             x = x - y;
//         } else {
//             if (x < y) {
//                 c = x;
//                 x = y;
//                 y = c;
//             }
//         }
//     }
//     return divideNumber = x;
// }

// calc(firstNumber, lastNumber);
// alert(divideNumber);
// console.log(divideNumber);

//----------------------------------------------------------------//

/**
3. Запросить у пользователя число и вывести все делители
этого числа
*/

// let num = Number(prompt("Enter number"));

// for (let i = 0; i <= num; i++) {
//     if (num % i === 0) {
//          alert(i);
//         console.log(i);
//     }
// }

//----------------------------------------------------------------//

/**
4. Определить количество цифр в введенном числе
*/

// let num = prompt("Enter number");
// function getDigitAmount(n) {
//     let c = 0;
//     while (c < n.length) c++;
//     return c;
// }
// alert(getDigitAmount(num));
// console.log(getDigitAmount(num));

//----------------------------------------------------------------//

/**
5. Запросить у пользователя 10 чисел и подсчитать, сколько
он ввел положительных, отрицательных и нулей. При этом
также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
*/

// let X1 = 0;
// let X2 = 0;
// let X3 = 0;
// let X4 = 0;

// let numbers = prompt("Enter 10 numbers: ",);

// if (numbers) {
//     numbers.split(" ").map(function (s) {
//         let num = parseInt(s);
//         if (num !== NaN) {
//             if (num > 0 && num != 0) {
//                 X1++;
//             } else {
//                 X2++;
//             }
//         }
//     });
// alert("Positive numbers: " + X1);
// alert("Negative numbers: " + X2);
// }

// if (numbers) {
//     numbers.split(" ").map(function (b) {
//         let num = parseInt(b);
//         if (num !== NaN) {
//             if (num % 2 == 0) {
//                 X3++;
//             } else {
//                 if (num % 2 != 0) {
//                     X4++;
//                 }
//             }
//         }
//     });
// alert("Even numbers:" + " " + X3);
// alert("Odd numbers:" + " " + X4);
// }

//----------------------------------------------------------------//

/**
6. Зациклить калькулятор. Запросить у пользователя 2 числа
и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
пользователь не откажется.
*/

// do {
//     let a = Number(prompt("Enter first number"));
//     let b = Number(prompt("Enter second number"));
//     let i = prompt("Choose - + / *");

//     switch (i) {
//         case '+':
//             alert(a + b);
//             break;
//         case '-':
//             alert(a - b);
//             break;
//         case '/':
//             alert(a / b);
//             break;
//         case '*':
//             alert(a * b);
//         default:
//             break;
//     }
// }

// while (confirm("Want more?"));

//----------------------------------------------------------------//

/**
8. Зациклить вывод дней недели таким образом: «День недели.
Хотите увидеть следующий день?» и так до тех пор, пока
пользователь нажимает OK.
*/

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// let currDay = 0;

// while (confirm(`${days[currDay]}; Want to see the next day?`)) {
//     currDay = (currDay + 1) % days.length;
// }

//----------------------------------------------------------------//

/**
9. Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10.
*/

// document.write("<table>");

// for (let i = 1; i <= 10; i++) {
//     document.write("<tr>");
//     document.write("<td>" + i + "</td>");

//     for (let j = 2; j <= 9; j++) {
//         document.write("<td>" + i * j + "</td>");
//     }
//     document.write("</tr>");
// }
// document.write("</table>");

//----------------------------------------------------------------//

/**
10. Игра «Угадай число». Предложить пользователю загадать
число от 0 до 100 и отгадать его следующим способом:
каждую итерацию цикла делите диапазон чисел пополам,
записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N?». В зависимости от того
что указал пользователь, уменьшаете диапазон. Начальный
диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50, то изменили
диапазон на от 51 до 100. И так до тех пор, пока пользова-
тель не выберет == N.
*/

/**
H and h - Higher/higher
L and l -Lower/lower
*/

// let arr = [];
// for (let i = 0; i <= 100; i++) {
//     arr.push(i);
// }
// while (true) {
//     let ask = prompt(`The number is higher or lower than ${arr[Math.floor(arr.length / 2) - 1]} ?`);
//     if (!ask) {
//         break
//     }
//     if (ask == 'It' || ask == 'it') {
//         alert(`Your number is - ${arr[Math.floor(arr.length / 2) - 1]}`);
//         break
//     }
//     if (ask == 'H' || ask == 'h') {
//         arr = arr.slice(Math.floor(arr.length / 2));
//     }
//     if (ask == 'L' || ask == 'l') {
//         arr = arr.slice(0, Math.floor(arr.length / 2));
//     }
// }

//----------------------------------------------------------------//