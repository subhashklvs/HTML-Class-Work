fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

let user={
    id=11,
    name:"Subhash",
    username:"subhash123",
    email:"subhashklvs@gmail.com",
    adress:'Chilakaluripet'
}
fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    hearders:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error)) 
    