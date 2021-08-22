//targil 6
function getInfo() {
  let userName = prompt("enter your name");
  let userAge = prompt("enter your age");
  document.write(`Name: ${userName} ,Age:${userAge}`);
}
// getInfo();

//targil 7
function getFullInfo() {
  let userName = prompt("enter your name");
  let userLastName = prompt("enter your last name");
  let userAge = prompt("enter your age");
  document.write(
    `Name: ${userName}  ,Last Name: ${userLastName}  ,Age: ${userAge}`
  );
}
// getFullInfo();

//targil 8
const div1 = document.getElementById("div1");
function writeToDiv() {
  let userName = prompt("enter your name");
  let userAge = prompt("enter your age");
  div1.innerText = `name: ${userName}  ,age: ${userAge}`;
}
// writeToDiv();

//targil 9
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
function writeTodivs() {
  let userName = prompt("enter your name");
  let userLastName = prompt("enter your last name");
  let userAge = prompt("enter your age");
  div2.innerText = `name: ${userName}`;
  div3.innerText = `last name: ${userLastName}`;
  div4.innerText = `age: ${userAge}`;
}
// writeTodivs();

//targil 10

function FromUserToNewDiv() {
  let userName = prompt("enter your name");
  let age = prompt("enter your age");
  document.write(`<div> name: ${userName} ,age: ${age}</div>`);
}
// FromUserToNewDiv();

//targil 11
function getFromPargra() {
  let userName = prompt("enter your name");
  let userLastName = prompt("enter your last name");
  let userAge = prompt("enter your age");
  document.write(`<div><p>name: ${userName}</p>
    <p>last name: ${userLastName}</p>
    <p>age: ${userAge}</p></div>`);
}
// getFromPargra()

//new order of exrasices
//targil  10

function writeToPwithId() {
  let userName = `name: ${prompt("enter your name")}`;
  let userLastName = ` ,last name: ${prompt("enter your last name")}`;
  let userAge = ` ,age: ${prompt("enter your age")}`;
  document.write(`<div>
    <p id="myP">${userName} ${userLastName}  ${userAge}</p>
    </div>`);
}
// writeToPwithId()

//targil 11
// function printNameToPragrph(){
//     let userName = `name: ${prompt("enter your name")}`;
//     document.write(`<p id="targil11">${userName}</p>`)
// }
// printNameToPragrph();

// function addLastName() {
//     const pointOfName = document.getElementById("targil11");
//     let userLastName = ` ,last name: ${prompt("enter your last name")}`;
//     pointOfName.innerText += `${userLastName}`
// }
// addLastName();

//targil 12
//A
function windowPrintPElemt(params) {
  let userName = `name: ${prompt("enter your name")}`;
  document.write(`<p id="targil12">${userName}</p>`);
}
//B
function PrintToPElemntThrowId() {
  let userLastName = ` ,last name: ${prompt("enter your last name")}`;
  const pointer = document.getElementById("targil12");
  pointer.innerText += userLastName;
}
// windowPrintPElemt()
// PrintToPElemntThrowId()

//targil 13
function creatObj() {
  let color = prompt("give me a color of the car");
  let compeny = prompt("give me the compeny name");
  let samak =  Number(prompt("give me the samak"));
  const car = {
    color,
    compeny,
    samak,
  };
  console.log(car);
}
// creatObj()



// targil14
function creatObjWtihDateYear() {
    let color = prompt("give me a color of the car");
    let compeny = prompt("give me the compeny name");
    let samak =  Number(prompt("give me the samak"));
    const car = {
      color,
      compeny,
      samak,
      year:new Date().getFullYear(  )
    };
    console.log(car);
  }
//   creatObjWtihDateYear()

//targil 15
function creatObjToDivElement() {
    const pointer = document.getElementById("targil15");
    let color = prompt("give me a color of the car");
    let compeny = prompt("give me the compeny name");
    let samak =  Number(prompt("give me the samak"));
    const car = {
      color,
      compeny,
      samak,
    //   year:new Date().getFullYear(  )
    };
    pointer.innerText = `color: ${car.color}, compeny: ${car.compeny}, samak: ${car.samak}`;
  }
//   creatObjToDivElement();


//targil 16
function creatObjToDivElementWithInsideElemts() {
    let color = prompt("give me a color of the car");
    let compeny = prompt("give me the compeny name");
    let samak =  Number(prompt("give me the samak"));
    const car = {
      color,
      compeny,
      samak,
      year:new Date().getFullYear(  )
    };
    document.write(`
    <div
    ><p>color: ${car.color}</p> 
    <p>compeny: ${car.compeny}</p> 
    <p>samak: ${car.samak}</p>
        <p>year: ${car.year}</p>
    </div>`);
  }
// creatObjToDivElementWithInsideElemts();


//targil 17
function creatObjToDivElementWithInsideElemtsAndId() {
    let color = prompt("give me a color of the car");
    let compeny = prompt("give me the compeny name");
    let samak =  Number(prompt("give me the samak"));
    const car = {
      color,
      compeny,
      samak,
      year:new Date().getFullYear(  )
    };
    document.write(`
    <div
    ><p id="color"> color: ${car.color}</p> 
    <p id="compeny"> compeny: ${car.compeny}</p> 
    <p id="samak"> samak: ${car.samak}</p>
    <p id="year"> year: ${car.year}</p>
    </div>`);
  }
//   creatObjToDivElementWithInsideElemtsAndId();  