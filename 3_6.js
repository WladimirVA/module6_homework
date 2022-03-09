function number(a) {

    return function(b) {
      
      return a + b;
  
    }
  }
  console.log(number(5)(6));