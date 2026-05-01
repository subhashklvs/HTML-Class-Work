fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

let user={
    id  : 11,
    name:"Subhash",
    username:"subhash123",
    email:"subhashklvs@gmail.com",
    address:'Chilakaluripet'
}
fetch("https://jsonplaceholder.typicode.com/users",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(user)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error)) 
    
let students={
    name:"lakshmmi venkata sai",
    age:123,
    class:"Full stack python"
}
fetch("https://jsonplaceholder.8000/students/1",{
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(students)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))