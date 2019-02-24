employees = []

function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Part time"
    this.printEmployeeForm = function() {
        console.log(this.name + this.jobTitle + this.salary + this.status)
    }
}

var printEmployeeForm = new Employee("Bob", "V School Instructor", "$3000/hour", "20")

var jack = new Employee("Jack", "Pirate", "$20/hour")
var santa = new Employee("Santa", "Santa Claus", "$0/hour")
var meg = new Employee("Meg", "doctor", "#34,000/hour")

jack.status = "contract"

jack.printEmployeeForm()

employees.push(jack,santa,meg)

console.log(employees)