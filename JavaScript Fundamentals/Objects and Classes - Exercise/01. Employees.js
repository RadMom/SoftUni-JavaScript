function employee(arr) {

    let employees = [];
    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
        print() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }

    for (let employee of arr) {
        let name = employee;
        let personalNumber = employee.length;
        employees.push(new Employee(name, personalNumber));
    }

    for (let el of employees) {
        el.print();
    }

}
employee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);