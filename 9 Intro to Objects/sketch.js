// Intro to Objects
// Adeeb Rahman
// 10.10.2024
//
//with objects, you only need a template once to create as many things as you need, making the process easier.
//useful for making multiple items of the same type on screen, or as data

let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book('very creative title', 'adeeb', 'leathercover', 295, 1111111111, width * 3 / 10);
  myBook2 = new Book('book 2', 'adeeb', 'softcover', 295, 1111111111, width * 4/ 10);
  myBook3 = new Book('hooray book 3', 'adeeb', 'hardcover', 500, 1111111111, width * 5/ 10);
}

function draw() {
  background(190);
  myBook.display();
  myBook2.display();
  myBook3.display();
}

class Book {
  //////////constructor/////////// (used to initialize class variables, rather than doing work)
  constructor(title, author, coverType, pages, isbn, xPos) {
    this.title = title;
    this.author = author;
    this.coverType = coverType;
    this.pages = pages;
    this.isbn = isbn;
    this.xPos = xPos;
  }
  /////////////class methods////////////////
  printSummary() { //function keyword isn't needed in a class
    //print out a nicely formatted description of object
    print(this.title + ', by ' + this.author);
    print('length: ' + this.pages + 'pages.');
    print('covertype: ' + this.isbn);
    print('ISBN: ' + this.isbn);
  }

  display() {
    //visualize the book based on properties
    //width depends on pages (1/10 scale) (500 pages = 50px wide)
    rectMode(CENTER); textAlign(CENTER, CENTER);
    switch (this.coverType) {
      case 'softcover':
        fill(250, 200, 200); break;
      case 'hardcover':
        fill(120, 255, 240); break;
      case 'leathercover':
        fill(150, 100, 15); break;
    }
    rect(this.xPos, height / 2, this.pages / 10, 150);
    textSize(20); fill(255);
    text(this.title[0], this.xPos, height / 2 - 50);
  }
}
