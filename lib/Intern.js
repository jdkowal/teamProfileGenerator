class Intern{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }
    getGithub(){
        return this.github
    };
    getRole(){
        return "Intern"
    };
};

module.exports = Intern