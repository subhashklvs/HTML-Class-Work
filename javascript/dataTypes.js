"primitive data type :" 

let str="dhanya12@gmail.com";
console.log(typeof(str));

let num= 30;
console.log(typeof(num));

let float=2.5;
console.log(typeof(float));

let bool=true;
console.log(typeof(bool));

let bigInt= 9473992029019200n;
console.log(typeof(bigInt));

let a=10;
let b=20n;
console.log(a+b);

let symbol=Symbol("id");
let symbol_l=symbol("id");
console.log(symbol==symbol_l);

let string=String(35);
console.log(string);

//camel case-camelCaseNotation
//pascal case-PascalCaseNotation
//snake case-snake_case_notation

let number=Number("25");
console.log((typeof(number)));

let boolean=Boolean("true");
console.log(typeof(boolean));

let bigValue=BigInt("974728299191");
console.log(typeof(bigValue));

console.log(typeof(symbol));


"non primitive data types :"

let value=new Array(10,20,30,40,50);
console.log(value);
console.log(typeof (value));

let fruits=["apple","banana","grapes"];
console.log(fruits);

let student={
    name:"dhanya",
    age:25,
    city:"Python Full Stack"
}
console.log(student);
console.log(typeof(student));

let result_1=5*Number("10");
console.log(result_1);

let result_=10 + +"10";
console.log(result_);

let code=20 - - "25";
console.log(code);