// Напишите функцию, которая принимает два числа. Каждую секунду необходимо 
// выводить в консоль, начиная от первого и заканчивая вторым. 
// Используйте setInterval.

function number(a, b) {
    let i = a;
    let timerId = setInterval(function () {
       console.log(i);
       if (i === b) {
          clearInterval(timerId);
       }
       i++;
    }, 1000);
 }
 number(5, 15);