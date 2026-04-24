let b=20;
console.log("The sum of",a,"and",b,"is",a+b);
const name='Akshay';
const age=25;
console.log(`my name is ${name} and my age is ${age}`);
const text=`
First line
    Second line
        Third line
            fourth line`;
console.log(text);
const c=20;
const d=10;
console.log(`The product of ${c} and ${d} is ${c*d}`);

const student={
    skills:'puthon Full Stack and Distrubing Class Environment',
    details:{
        address:'chilakaluripet',
        district:'palnadu',
        role:'sarpanch',
        marrital_status:'married'
    }
}

const{student_name,student_age,details}=students;
console.log(student_name);
console.log(student_age);
console.log(details);
const{details:{marrital_status}}=students;
console.log(marrital_status);

const arr_1=[1,2,3,4,5,3,2,5];
const arr_2=[6,7,8,8,9,10];
console.log([...arr_1,...arr_2]);
console.log([...new Set([...arr_1,...arr_2])]);

function add(...args){
    return args
}
console.log(add(10,20,30,40,50));

const val=[10,20,30,40,50];
const map_res=val.map(e =>(
    e*3
))
console.log(map_res);
const filterRes=val.filter(e=>(
    res>32
));
console.log(filterRes);

const red_val=[100,200,300,400,500];
const red_res=red_val.reduce((accumulator,currentvalue)=>(
    accumulator+currentvalue
),25);
console.log(red_res);
red_val.forEach(e=>{
    console.log(e);
})
