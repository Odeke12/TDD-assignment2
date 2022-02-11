function factorial(n){
    let answer = 1;
    if(typeof(n) != "number" || n < 0){
        return undefined
    }
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

  module.exports = factorial
