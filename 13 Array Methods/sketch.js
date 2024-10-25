// Array Demo 2
// Adeeb Rahman
// 10.25.2024
//

// Task 1:  Remove the last two items from the array, and add them to 
//          the start (one at a time) → [7,9,3,5]
// 
// Task 2:  Remove first item of current array, then at the start add 
//          a random amount (between 1-3) of zeros to the array beginning
//          → one possible result:  [0,0,9,3,5]      
//           
// Task 3:  Find and remove the 9 from the array
//          → one possible result:  [0,0,3,5]
//
// Use a print to console to verify each task's success.


let myArray = [3, 5, 7, 9];
let shallowCopy;
let deepCopy;

function setup() {
  // solve the tasks here
  
  //////////////////////TASK 1////////////////////////
  let lastItem = myArray.pop(); //pop removes item fron BACK of array, push ADDS to back
  let secondLastItem = myArray.pop();

  //push sends to BACK, unshift sends to FRONT
  myArray.unshift(lastItem);
  myArray.unshift(secondLastItem);

  print('My Array - ' + myArray);
  shallowCopy = myArray;
  deepCopy = structuredClone(myArray); //structuredClone makes 
  

  //////////////////////TASK 2/////////////////////////
  myArray.shift(); //shift REMOVES item from front of array, UNSHIFT sends to front (as mentioned previously)
  let n = random(0, 3);

  for (let i = 0; i < n; i++) {
    myArray.unshift(0);
  }

  print('My Array - ' + myArray);

  /////////////////////////TASK 3/////////////////////
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === 9) {
      myArray.splice(i, 1); //removes items at a specific index, second argument says how many items to take out
    }
  }
  shallowCopy = myArray;
  print('My Array - ' + myArray);
  print("my array deep - " + deepCopy);
  print("my array shallow - " + shallowCopy);
}

