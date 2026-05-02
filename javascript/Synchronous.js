console.log('first')
console.log('second')
console.log('third')
console.log('fourth')
console.log('fifth')
//javascript execute the code line by line that process is called synchronous execution. In this process the code is executed one by one and the next line of code will not execute until the previous line of code is executed. This is the default behavior of javascript.

console.log('one')
console.log('two')
setTimeout(()=>{
    console.log('three')
},2000);
console.log('four')
console.log('five')
//In the above code the setTimeout function is used to execute the code after a certain time. The setTimeout function is an asynchronous function that allows us to execute the code after a certain time. In this case, the code inside the setTimeout function will be executed after 2 seconds, while the rest of the code will be executed immediately.