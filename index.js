// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((acc, curr) => acc + curr, 0)
    }
} 


class Triangle extends Polygon {
    get isValid(){
        if(this.countSides !==3) return false;
        const[a, b, c] = this.sides;
        return ((a+b>c) && (a+c>b) && (b+c>a));
    }
}
class Square extends Polygon{
    get isValid(){
        if(this.countSides !==4) return false;
        const [a, b, c, d] = this.sides;
        return (a===b && a===c && a===d);
    }
    get area(){
        if(!this.isValid)return;
        const [a, b, c, d] = this.sides;
        return a ** 2;
    }
}
const polygon = new Polygon([3, 4, 5]);
console.log(polygon.countSides);
console.log(polygon.perimeter);
const triangle = new Triangle([3, 4, 5]);
console.log(triangle.isValid);
console.log(triangle.perimeter);
console.log(triangle.countSides);
const square = new Square([5, 5, 5, 5]);
console.log(square.isValid);
console.log(square.perimeter);
console.log(square.countSides);