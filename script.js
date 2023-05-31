/******** Question 1 ********/
function wordOccurrence(word, phrase){
    let result = 0 // O(1)
    const array  = phrase.split(' ') // O(N)
    for(let i = 0; i < array.length; i++){ // O(N)
      if(word.toLowerCase() === array[i].toLowerCase()){
        result++; // O(1)
      }
    }
    return result
  }

  // Answer: O(1) + O(1) + O(N) + O(N) = O(N)

  /******** Question 2 *******/
  function bubble_sort(list){
    for(let i = 0; i < list.length - 1; i++){
      for(let j  = 0; j < list.length - 2; j++){ // O(N^2)
        if(list[j+1] < list[j]){ // O(1)
          const temp = list[j]; // O(1)
          list[j] = list[j+1]; // O(1)
          list[j+1] = temp; // O(1)
        }
      }
    }
    return list;
  }
// Answer: O(1) + O(1) + O(1) + O(1) + O(N^2) = O(N^2)

/******** Question 3 *******/
function factorial(n){
    if(n === 0){
      return 1; // O(1)
    }else{
      return n * factorial(n-1); // O(N)
    }
  }
  // Answer: O(1) + O(N) = O(N)

/******** Question 4 *******/
function bobIsFirst(people){
    return people[0] == 'bob' // O(1)
  }
// Answer: O(1) = O(1)

/******** Question 5 *******/
function isPalindrome(input){
    const stack = []; // O(1)
    let output = ""; // O(1)
    for(let i = 0; i < input.length; i++){ // O(N)
      stack.push(input[i]); // O(N)
    }
    while(stack.length){ // O(N)
      output += stack.pop();
    }
    return output == input
  }
// Answer: O(1) + O(1) + O(N) + O(N) + O(N) = O(N)

/******** Question 6 *******/
function sumOfDivisors(n){
    let result = 0; // O(1)
    let i = 1; // O(1)
    while(i < n){ // O(N)
      if( n % i == 0){
        result += i; // O(1)
      }
      i++; // O(1)
    }
    return result
  }
  // Answer: O(1) + O(1) + O(1) + O(1) + O(N) + O(N) + O(N) = O(N)

/******** Question 7 *******/
function printAllNumbersThenSumPairs(numArray){
    numArray.forEach((num)=>{ // O(N)
      console.log(num); // O(1)
    });
    numArray.forEach((num, index)=>{ // O(N)
      if(index < numArray.length - 1){
        console.log(num + numArray[index+1]) // O(1)
      }
    });
  }
  // Answer: O(1) + O(1) + O(N) + O(N) = O(N)

  /******** Question 8 *******/
  function isPrime(num){
    if(num == 1 || num == 2){
      return false // O(1)
    }
    for(let i = 2; i < num - 1; i++){ // O(N)
      if(num % i == 0){
        return false // O(1)
      }
    }
    return true
  }

  // Answer: O(1) + O(1) + O(N) = O(N)
