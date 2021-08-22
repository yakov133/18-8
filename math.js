//targil 1
function randomNumberFromZeroTo99() {
    return Math.floor(Math.random()*100);
}
// console.log(randomNumberFromZeroTo99());

//targil 2
function randomNumberFromZeroTo54() {
    return Math.floor(Math.random()*55);
}
// console.log(randomNumberFromZeroTo54());


//targil 3
function randomNumberFromZeroTo1000() {
    return Math.floor(Math.random()*1000);
}
// console.log(randomNumberFromZeroTo1000());


//targil 4
function randomNumberFromZeroToNum(num) {
    return Math.floor(Math.random()*(num + 1));
}
// console.log(randomNumberFromZeroToNum(Number(prompt("give me a number"))));

//targil 5
function checkingNumbers(num) {
    let randomNum = Math.floor(Math.random() * 10);
    console.log(`the resulat is: ${randomNum == num}`);
}
// checkingNumbers(Number(prompt("give me a number")));

//tragil 6
function checkingNumbersTill99(num) {
    let randomNum = Math.floor(Math.random() * 100);
    console.log(`the resulat is: ${randomNum == num}`);
}
// checkingNumbersTill99(Number(prompt("give me a number")));

//targil 7
function loto(name,num) {
    let randomNum = Math.floor(Math.random() * 10);
    console.log(`The name: ${name} with the number: ${num} ${num==randomNum? "Win":"Loss"} in the loto`);
    console.log(num,randomNum);
}
// loto(prompt("give me yor name"),Number(prompt("give me a number")));

// צרו פונקציה שמקבלת מהמשתמש מספר בין 0 ל9 ובודקת האם המספר זהה למספר רנדומלי.
// צרו פונקציה שמקבלת מהמשתמש מספר בין 0 ל99 ובודקת האם המספר זהה למספר רנדומלי.
