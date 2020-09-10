// TODO: Write code to define and export the Employee class

class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    Id() {
        return this.id;
    }

    Name() {
        return this.name;
    }

    Email() {
        return this.email;
    }

    Position() {
        return "Employee";
    }
}

module.exports = Employee;