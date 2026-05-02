let value='scopes of javascript';
function add(){
    console.log(value);//local scope
}
add();
console.log(value);//global scope

function outer(){
    let name='Local scope';
    console.log(name);
}
local();
//console.log(name);//error name is not defined

if(true){
    let block='Im Restrictedd';
    console.log(block);//block scope
    var a=10;
    console.log(a*a);//block scope
}

console.log(a-5);//block scope

hoist();
function hoist(){
    console.log("Before Declaration Execute the program");
}
console.log(num);
var num=20;

function outer(){
    let closure='Remembering values';
    function inner(){
        console.log(closure);
    }
    inner();
}
outer();
