console.log("First");
setTimeout(()=>{
    console.log("callBack Queue");
},0);
Promise.resolve().then(()=>console.log("Micro Task Queue"));
console.log("second");