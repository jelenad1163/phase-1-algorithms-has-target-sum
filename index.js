function hasTargetSum(array, target){
  const seenNumbers = {}

  for (const number of array){
    const complement = target - number;
    if (seenNumbers[complement]) return true
    seenNumbers[number] = true 
  }
return false;

}


// function hasTargetSum(array, target) {
//   for(let i = 0; i < array.length;i++){
//     // n steps
//     const complement = target - array[i]
//     for (let j = i +1; j < array.length; j++){
//       // n * n steps
//       if (array[j] === complement) return true

//     }
//   }
//   return false; 
// }


// every time you are looking for a specific element in an array,
// then it has an O(n) run time
/* 
  Write the Big O time complexity of your function here
  Runtime: o(n^2)...
  Not the greatest run time, because as array gets larger, the runtime
  gets worse. Twice as less effictient alogorithm as array gets larger

  Space: the size of input and the amount of memory computer will need
  in order to run this algorithm
  O(n)
*/

/* 
  make function that should return true if 
  two pairs of numbers in array need to equal the target value.
  For example: if I have array [1,2,3,4]
  and target is '6' it should return true because 2 and 4 adds to 6
  For each number check if there is another number that adds to the target

*/

/*
  hasTargetSum([22, 19, 4, 6, 30], 25);
  iterate thru each number in array
  for the current number, identify a complement that adds to the target 
  (comp = target - current number)
  iterate thru the rest of the array and check if any number is our complement
  if so, return true 

  If I reach the end of array and haven't found two numbers that add up to target, 
  need to return false

  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
