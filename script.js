// Person class definition  
function Person(name, age) {  
    this.name = name; // Initialize name  
    this.age = age;   // Initialize age  
}  

// Method to greet  
Person.prototype.greet = function() {  
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);  
};  

// Employee class definition  
function Employee(name, age, jobTitle) {  
    // Call the Parent (Person) constructor to set name and age  
    Person.call(this, name, age);   
    this.jobTitle = jobTitle; // Initialize jobTitle  
}  

// Inherit from Person  
Employee.prototype = Object.create(Person.prototype);  
Employee.prototype.constructor = Employee; // Correct reference to Employee constructor  

// Method to greet including job title  
Employee.prototype.jobGreet = function() {  
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);  
};  

// Do not change code below this line  
window.Person = Person;  
window.Employee = Employee;