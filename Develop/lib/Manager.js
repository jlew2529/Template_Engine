// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, email, officeNum) {
        super(id, name, email);
        
        this.officeNum = officeNum;
    }

    OfficeNumber() {
        return this.officeNum;
    }

    Position() {
        return "Manager";
    }
}

module.exports = Manager;