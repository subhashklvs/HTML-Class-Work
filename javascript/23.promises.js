function promiseOne(){
    return new Promise((resolve, reject) => {
        const result=true;
        if(result){
            resolve("successful");
        } else{
            reject("unsuccessful");
        }
    })
}
promiseOne()
.then(response=>console.log(response))
.catch(error=>console.log(error))