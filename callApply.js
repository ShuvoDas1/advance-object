const employee ={
    firstName : 'Shuvo',
    lastName : 'Das',
    salary : 13500,
    getFullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    chargeBill : function(amount,tax,tips){
        this.salary = this.salary  -  amount - tax -  tips;
        return this.salary;
    }
}

const employee2 ={
    firstName : 'Abul',
    lastName : 'Kashem',
    salary : 20000
}
const employee3 = {
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary : 15000
}

employee.chargeBill.apply(employee3,[200,50,50]);
console.log(employee3.salary);

// employee.chargeBill.call(employee2,500,100,50);
// console.log(employee2.salary);

// const employee2ChargeBill = employee.chargeBill.bind(employee2);
// const employee3ChargeBill = employee.chargeBill.bind(employee3);
// employee3ChargeBill(1500);
// employee2ChargeBill(1000);
// console.log(employee2.salary);
// console.log(employee3.salary);

// const fullName =  employee.getFullName();
// console.log(fullName)
// employee.chargeBill(100);
// console.log(employee.salary);

// employee.chargeBill(200);
// console.log(employee.salary);



