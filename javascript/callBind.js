function add(){
    console.log('My name is', this.name, '& my age is', this.age);
}
const data_1={
    name:'lakshmi',
    age:25
}
const data_2={
    name:'venkata sai',
    age:30
}
const data_3={
    name:'subhash',
    age:35
}
add.call(data_1);
add.call(data_2);
add.call(data_3);