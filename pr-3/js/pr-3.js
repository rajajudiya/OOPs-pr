class Employee {
    constructor(name) {
        this.name = name;
    }
}

const n1 = new Employee("Raj Ajudiya");

document.querySelector('h5').innerHTML=(`Employee name: ${n1.name}`);