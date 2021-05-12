//console.log('Hello')
//
//let s = 4;
//let t = 5;
//function sum(a, o){
//    return a + o;
//}
//console.log(sum(s, t));
//
//let random = function(){
//    console.log('rsgzhfgj')
//}
//random();
//
//let person = new Object({
//    name: 'Stefany',
//    age: 28,
//    greet: function(){
//        console.log('greet');}
//});
//
//
//Object.prototype.sayHi = function(){
//    console.log('Hello')
//}
//sayHi();
//
//let lena = Object.create(person);
//lena.name = 'Elena';
//
//let str = 'nljkkm;lcdnfgkjvdbnfkl';
//
//
//let sayHello = function(){
//    console.log('gjhkl;jhjufh');
//}
//sayHello();



//task1
//let task = document.getElementById('task');
//let number = document.getElementsByClassName('cls');
//task.addEventListener('click', function(){
//    let sum = 0;
//    for (let i = 0; i < number.length; i++){
//        sum = sum + parseInt(number[i].value);
//    }
//    let newSum = document.getElementById('sum');
//    newSum.value = sum;
//});


//task2
//let elem = document.getElementById('num');
//elem.addEventListener('blur', function() {
//	let sum = 0;
//	let str = elem.value;
//	let arr = str.split('');
//  	for (let i = 0; i < arr.length; i++) {
//		sum = sum + parseInt(arr[i]);
//	}
//	let newSum = document.getElementById('result');
//	newSum.innerHTML = sum;
//});


//<!--Task4-->
//let elem = document.getElementById('num');
//elem.addEventListener('blur', function()  {
//	let sum = 0;
//	let str = elem.value;
//	let arr = str.split(',');
//  	for (let i = 0; i < arr.length; i++) {
//		sum = sum + parseInt(arr[i]);
//	}
//	let newSum = document.getElementById('result');
//	newSum.innerHTML = sum/arr.length;
//});   


//Task1
//let x = 2;
//let z = (Math.cos(Math.pow(x,2) + 1)- Math.abs(Math.sin(2 * x - 5.76)));
//
//console.log(z);


//Task13
//let t = 1;
//let a = 13.4 * Math.sin(-1.26)* Math.cos(Math.abs(t/7.5));
//
//console.log(a);


//Task18
//let e = 2;
//let v = 9.2 * Math.cos(Math.pow(x,2)) - Math.abs(Math.sin(x/1.1));
//console.log(v);


//Task25
//let d = 1;
//let s = Math.cos(Math.pow(x,2)) * Math.sin(2*x - 1) + 4.29;
//console.log(s);


//let a = 0;
//let b = 1;
//let c = a + b;
//let d = b + c;
//let e = c + d;
//let f = d + e;



//let current = 1;
//let last = 0;
//let next = current + last;
//console.log(next);
//for (let i = 0; i < 10; i++){
//    last = current;
//current = next;
//    next = current + last;
//    console.log(next);
//}





//function fib(n){
//    let current = 1;
//    let last = 0;
//    let next = current + last;
//console.log(next);
//    for (let i = 0; i < n; i++){
//    last = current;
//current = next;
//    next = current + last;
//    console.log(next);
//}
//}
//fib(100);





//function fib(n){
//    let current = 1;
//    let last = 0;
//    let next = current + last;
////console.log(next);
//    for (let i = 1; i < n; i++){
//    last = current;
//current = next;
//    next = current + last;
//    console.log(next);
//}
//}
//fib(5);





//for (let p of arr){
////     console.log(p);
//    sum += p;
//}
//    console.log(sum)
//for (let o in arr){
//console.log(arr[o]);
//    sum += arr[o];
//}
//console.log(sum)




//let current = 1;
//let last = 0;
//let next = current + last;
//let sum = 0;
//let arr = [];
////console.log(next);
//    for (let i = 0; i < 5; i++){
//    last = current;
//current = next;
//    next = current + last;
//    console.log(next);
//       let newArr = arr.push(i);
//        sum += newArr; 
//}
//        console.log(sum);



//let arr = [1, 5, 6, 9];
let array = document.getElementById('numbers');
let show = document.getElementById('show');
let result = document.getElementById('result');
show.addEventListener('click', function(){
    let arr = array.value;
	let newArr = arr.split(' ');
    let sum = 0;
for (let i = 0; i < newArr.length; i++) {
    sum += +newArr[i];
}
    let newObj = fibo(parseInt(sum));
        result.innerHTML = 'Попереднє число ' + newObj.first + ', наступне число ' + newObj.second + '. Сума чисел дорівнює ' + sum + '. Потрібнe числo, щоб вийшло число Fibonacci  =  ' + newObj.needNumber;
});
                      
                      

function fibo(num) {
    if (num === 0) {
        return 0;
    }
    let last = 0;
    let current = 1;
    let next = current + last;
    for (let i = 0; i < num && next < num; i++) {
        last = current;
        current = next;
        next = current + last;
    }
    let smaller = (current - num) ? current : next;
    let bigger = (current - num) ? next : current;
    let obj = {
        first: smaller
        , second: bigger
        , isFibonacci: num == bigger
        , needNumber: (bigger - num)
    }
    return obj;
}


//function fibo(num) {
//    let last = 0;
//    let current = 1;
//    let next = current + last;
//    if (num > 0) {
//        for (let i = 0; next < num; i++) {
//            last = current;
//            current = next;
//            next = current + last;
//        }
//    }
//    return {
//        smaller: (current - num) ? current : next,
//        bigger: (current - num) ? next : current,
//        isFibonacci: num === ((current - num) ? next : current),
//    };
//}


//var car = {
//    "model": "Dodge",
//    "year": 1967,
//    "color": "red",
//    "body": "Hard top",
//    "img": "/images/car-1" 
//}
//
//for (let j in car) {
// console.log(j);
//};








