// Bai 1
console.log(`Lab 3 bài 1 \n`)

const multiply = (num1, num2)=>{
    return num1 * num2;
}
const toCelsius = (fahrenheit)=>{
    return (5/9)* (fahrenheit - 32)
}
const padZeros = (num, totalLen) =>{
    var numStr  = num.toString()
    var numZeos = totalLen - numStr.length
    for (var i =1; i <= numZeos; i++){
        numStr = "0" + numStr;
    }
    return numStr;
}
const power = (base, exponent)=>{
    var result = 1;
    for (var i=0; i < exponent; i++){
        result *= base
    }
    return result
}
const greet = (who)=>{
    console.log("Hello" + who)
}
greet("Hòa");
// bai 2 ====================
console.log(`Lab 3 bài 2 \n`)
var arr = [1,2,3,4,5,6,7]
console.log(arr)

const sumArr = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Tổng các phần tử trong mảng 1,2,3,4,5,6,7 là: " + sumArr);

// bai 3 -------------------------------

    // var Entity = (name ,delay)=>{
    //     this.name = name;
    //     this.delay = delay;
    // }
// Bạn không thể chuyển hàm constructor Entity thành một arrow function, 
// vì arrow function không có khả năng tạo ra đối tượng mới bằng từ khóa new. 
// Constructors phải là các hàm thông thường (function) để có thể sử dụng new để 
// tạo đối tượng.
function Entity (name ,delay){
    this.name = name;
    this.delay = delay;
}
var java = new Entity('Java' , 5000)
var cpp = new Entity('C++' , 30)

Entity.prototype.greet = function () {
    setTimeout(() => {
      console.log(`Xin chào, tôi tên là: ${this.name}`);
    }, this.delay);
  };

java.greet();
cpp.greet();
console.log(`---------------------`)

