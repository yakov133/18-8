//targil 1
function getNameAndAgeFromUser(){
    let userInputName = prompt("give me your name:");
    let userInputAge = prompt("give me your age:");
    const person = {};
    person.name = userInputName;
    person.age = userInputAge;
    console.log(person);
}
// getNameAndAgeFromUser();

//targil 2
function getNameAndLastNameAndAgeFromUser(){
    let userInputName = prompt("give me your name:");
    let userLastName = prompt("give me your last name:")
    let userInputAge = prompt("give me your age:");
    const person = {}
    person.name = userInputName;
    person.lastName = userLastName;
    person.age = userInputAge;
    console.log(person);
}
// getNameAndLastNameAndAgeFromUser()


//taregil 3
function getFullInfo(){
    let userInputName = prompt("give me your name:");
    let userLastName = prompt("give me your last name:")
    let userInputAge = prompt("give me your age:"); 
    const person = {}
    person.fullName = userInputName + " " + userLastName;
    person.age = userInputAge;
    person.email = userInputName + "@jmail.com";
    console.log(person);     
}
// getFullInfo();


//targil 4
function getFullInfoWtihDate(){
    let userInputName = prompt("give me your name:");
    let userLastName = prompt("give me your last name:")
    let userInputAge = prompt("give me your age:"); 
    const person = {}
    person.fullName = userInputName + " " + userLastName;
    person.age = userInputAge;
    person.date = new Date();
    person.email = userInputName + "@jmail.com";
     
    return person;
}
// console.log(getFullInfoWtihDate());
