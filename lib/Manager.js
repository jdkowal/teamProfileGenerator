const Employee = require("./Employee")

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.managerOffice = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.managerOffice;
    }
};

module.exports = Manager