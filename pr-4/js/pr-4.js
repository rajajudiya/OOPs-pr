class Shape {
    constructor() {

    }

}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

let circle1 = new Circle(7);
document.querySelector('h1').innerHTML=(`Area of Circle =: ${circle1.area()}`);

let rectangle1 = new Rectangle(5 , 7);
document.querySelector('h2').innerHTML=(`Area of Rectangle: ${rectangle1.area()}`);