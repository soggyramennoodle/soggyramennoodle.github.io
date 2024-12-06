

///////child class 1: line object/////////


// "extends" tells the file to use the parent class to create this child class

class LineObject extends AnimatedObject {
    constructor() {
        super(random(width), random(height));
    }

    move() { //overriding a method; building on top of parent's new function, in order to not make it exactly the same. had you not put this, this object would copy the movement of the other class exactly.
        super.move(); //runs parent move function
        this.x -= 5;
        if (this.x < 0) {
            this.x = width;
        }
    }

    display() { //override completely, so no relation to parent function
        if (mouseIsPressed) {
            strokeWeight(10);
        }
        else {
            strokeWeight(2);
        }
        line(this.x, this.y, this.x + 20, this.y);
    }
}