// Напишите функцию, которая принимает два натуральных числа x и n и возвращает
// x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

const pow = (x, n) =>{
    if(x > 0 && n > 0){
    let result = 1;
      for(let i = 0; i<n; i++){
       result = result * x;
      }
    return result;
  } else {
    return'Введенные числа не натуральные!';
   }
  }
  const result = pow(5, -5);
  console.log(result);