// Arrays
// Adeeb Rahman
// 10.17.2024
//

let names = ['John', 'Jane', 'Stefan'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  names.push('Liam'); //push adds item to list at the end
  console.log(names);
  let nameLast = names.pop(); //removes item at end of list //.pop() can refer to the last item too.
  console.log(names);
  console.log(nameLast);

  let nameFirst = names.shift(); //.shift() refers to the first item in list
  console.log(nameFirst);

  names.push('mitsaal');
  names.push('bob');
  names.push('sampersand');
  names.push('adeeb');
  
  for (let i of names) {
    console.log(i); //prints every item in names for every index in list
  }


}

function draw() {
  background(220);
}
