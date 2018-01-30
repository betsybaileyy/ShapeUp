
let radius = document.getElementById("valueCircle");
console.log(radius);
const container = document.getElementById('container');

let name; 

class Shape {
    constructor(width, height) {
        
        this.div = document.createElement('div');
        this.div.style.left = `${randomVal(0, 600)}px`;
        this.div.style.top = `${randomVal(0, 600)}px`;
        this.div.style.width = `${width}px`;
        this.div.style.height = `${height}px`;
        container.appendChild(this.div);
        this.div.addEventListener("click", function(){
            this.describe();
        });

    }
    describe() {
        name.innerHtml = ednewjkdnekjd
    }
}
class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);

        this.div.classList.add('circle');
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super(length, width);

        this.div.classList.add('rectangle');
    }
}
class Square extends Shape {
    constructor(squareLength) {
        super(squareLength, squareLength);

        this.div.classList.add('square');
    }
}
class Triange extends Shape {
    constructor(triangleLength) {
        super(triangleLength, triangleLength);

        this.div.classList.add('triangle');

        this.div.style.width = 0;
        this.div.style.height = 0;
        this.div.style.borderBottom = `${triangleLength}px solid yellow`;
        this.div.style.borderRight = `${triangleLength}px solid transparent`;
        
    }
}

let circleButton = document.getElementById('inputCircle');
circleButton.addEventListener('click', insertCircle);

let rectangleButton = document.getElementById('inputRectangleLength');
rectangleButton.addEventListener('click', insertRectangle);

let squareButton = document.getElementById('inputSquare');
squareButton.addEventListener('click', insertSquare);

let triangleButton = document.getElementById('inputTriangleHeight');
triangleButton.addEventListener('click', insertTriangle);

function insertCircle() {
    let radius = document.getElementById('valueCircle').value;
    let size = inputCircle;
    circle = new Circle(radius);
}
function insertRectangle() {
    let length = document.getElementById('valueLength').value;
    let width = document.getElementById('valueWidth').value;
    rectangle = new Rectangle(length, width);
}
function insertSquare() {
    let squareLength = document.getElementById('valueSquare').value;
    square = new Square(squareLength);
}
function insertTriangle() {
    let triangleLength = document.getElementById('valueTriangle').value;
    triangle = new Triange(triangleLength);
}
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}