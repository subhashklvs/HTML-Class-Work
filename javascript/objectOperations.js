const employeeData={
    name:"subhash",
    age:28,
    department:"React Developer Engineer",
    details:{
        salary:50000,
        experience:5,
        monthly:'90 k per month',
        savings:'35 k'
    },
    address:[{
        place:'Guntur',
        street:'NTR colony',
        house_no:'0902'
    }]
}
console.log(employeeData);
console.log(employeeData.name);
console.log(employeeData.details.salary);
console.log(employeeData.address[0].place);

employeeData.details.salary=60000;

employeeData.address[0].place='Hyderabad';
console.log(employeeData.address[0].place);

console.log(employeeData);

delete employeeData.name;
delete employeeData.details.salary;
delete employeeData.address[0].house_no;

console.log(employeeData);

console.log(Object.keys(employeeData));
console.log(Object.values(employeeData));
console.log(Object.entries(employeeData.details));
console.log(Object.hasOwn(employeeData.address[0]));

console.log(Object.entries(employeeData));
console.log("age" in employeeData);

let student={
    name:'subhashklvs',
    skills:'python Full Stack Developer',
    batch_name:'PFS-44',
    branch_name:'vasantha nagar',
    greet:function(){
        console.log("Welcome to Codegnan Your Branch is",this.branch_name);
    }
}

function assign(){
    console.log("Front End Assigned Batches",this.branch_name);
}
console.log(student);
//console.log.call(this.batch_name,"Global Scope");
student.greet();

assign.apply(student);
assign.call(student);
let result=assign.bind(student);
result();

let obj={
    a:1,
    b:2,
    sum(){
        return this.a+this.b;
    }
}

const result2=obj.sum;
console.log(result2());

let product=[
    {
        item_1:'clothes',
        price:'90,000',
        type:'lenin'
    },
    {
        item_2:'Electronics',
        price:'1,20,000',
        type:'Monitors'
    },
    {
        item_3:'furniture',
        price:'2,00,000',
        type:'Sofa'
    },
]
console.log(product);

for(let index in employeeData){
    console.log(index,employeeData[index])
}