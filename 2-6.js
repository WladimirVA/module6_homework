function isPrime(num) {
    let simple = "Простое число";
    let compl = "Сложное число";
    let noy = "Данные не верны";
    
    if (num <= 1) {
      return compl;
    } else if (num > 1000) {
      return noy;
    };
     for(let i = 2; i <= num/2; i++){
       if (num % 2 === 0) {
         return compl;
       }}
    return simple;
  }
console.log(isPrime(987897))