/*this is my way of implementing the task as i take its start value from 12
and range it to 10 million*/
//i took it to determine the difference of any given number 
const determineDifference = (num) => {
    let numToArray = Array.from(num.toString());
    let isValid = true;
    //checking the difference between numbers 
    numToArray.forEach((elem, i) => {
      let condition =
        Math.abs(+numToArray[i + 1] - +elem) != 1 && i != numToArray.length - 1;
        //using the if condition to satisfy the difference as 1
        
      if (condition) {
        isValid = false;
      }
      return;
    });
    return isValid;
  };
  // Generating the logic for prime numbers
  const isPrime = (n) => {
    let r = true;
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        r = false;
      }
    }
    return r;
  };
  /*printing the number that ranges from 12 to 10 millions satisying the condition
  off being prime and consecutive and being the difference as 1 */ 
  let finalResults = [];
  for (i = 12; i < 10000000; i++) {
    if (determineDifference(i) && isPrime(i)) {
      finalResults.push(i);
    }
  }
  console.log(finalResults, finalResults.length);