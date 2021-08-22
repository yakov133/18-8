//targil 1
function targil1(str) {
    if(str.length > 5){
        return "long";
    }
    return "short";
}
// console.log(targil1("yakov"));


//targil 2
function targil2(str) {
    if(str.indexOf("a") != -1){
        return str.indexOf("a");
    }
    return "not found"; 
}
// console.log( targil2("yakov"));

//targil 3
function targil3(str) {
    if(str.indexOf("r") != -1){
        return true;
    }
    return false; 
}
// console.log( targil3("yakov"));


//targil 4
function tagril4(str,tav) { 
    if(str.indexOf(tav) != -1){
        return true;
    }
    return false;
}
//targil 5
function targil5(str,tav) {
    if(str.indexOf(tav) != -1){
        console.log(str.indexOf(tav));
    }
    else{
        console.log("not found");
    }
}
// targil5("yakov", "a");

//targil 6
function targil6() {
    console.log("sayonara".substr(0,3));
}
// targil6();


//targil 7
//this qwestion was deleted.

//taegil 8
function targil8() {
    return "sayonara".substr(3);
}
// console.log(targil8());

//targil 9
function targil9(str,index) {
    if(index > str.length){
        return "the index is bigger"
    }
    return str.substr(index);
}
// console.log(targil9("sayonara",3));


//targil 10
function targil10(str,index) {
    if(index > str.length){
        return "the index is bigger"
    }
    return str.substr(index,index+3);
}
// console.log(targil10("sayonara",0));

//targil 11
function targil11(str,num1,num2) {
    if(num1<str.length && num2<str.length){
        if(num1 < num2){
            return str.substr(num1,num2);
        }else{
            return str.substr(num2,num1);
        }
    }
    return "input Error";
    
}
// console.log(targil11("sayonara",3,0));

//tagril 12
function targil12() {
    return "sayonara".substring(0,3);
}
// console.log(targil12());

//targil13
function targil13() {
return  "sayonara".substring(2,6)    
}
// console.log(targil13());

//targil 14
function targil14() {
    return "sayonara".substring(3 );
}
// console.log(targil14());

//targil 15
function targil15(fullName) {
    console.log(`the length of the full name: ${fullName.length}`);
    let space = fullName.indexOf(" ");

    if(space != -1){
        console.log("there is spac in full name")
        console.log(fullName.substr(0,space));
        console.log(fullName.substr(space+1));
    }
    else{
     console.log("didnt find space in the full name"); 
    }
}
// targil15("yakov kassa")


//targil16
function targil16(str1,str2) {
    if(str1.toLowerCase() == str2.toLowerCase()){
        return "they are the same";
    }
    return "there are not equal";
}
// console.log((targil16("yakov", "YAKOV")));

//targil17 
function targil17(str1,str2) {
    
    if(str1.toUpperCase() == str2.toUpperCase()){
        return "they are the same";
    }
    return "there are not equal";
}
// console.log((targil17("yakov", "YAKOV")));

//targil 18
function targil18(userName,userLastName) {
    if(userName.length > userLastName.length){
        return userName;
    }
    return userLastName;
}
// console.log(targil18("yakov","kassa"));

//targil 19
function taegril19(userName,userLastName) {
    if(userName.indexOf("a") != -1){
        console.log("the name has 'a'");
    }
    if(userLastName.indexOf("api") != -1){
        console.log("the name has 'api'");
    }
}
// taegril19()

//targil20
//like targil 1

//targil 21
function targil21(state) {
    if(state.length<3){
        return "yes";
    } 
    return  "no"
}
// console.log(targil21("israel"));

//tagril 22
function targil22(str,tav) {
    if(str.length > 6){
        return str;
    }
    else{
        if(str.indexOf(tav) != -1){
            return str.indexOf(tav);
        }
        return `the ${tav} dont exist in ${str}`
    }
}
// console.log(targil22("yakov","r"));

//targil 23
function targil23(str,tav){
    if(str.indexOf(tav) != -1){
        return str.indexOf(tav)
    }
    return str;
}
// console.log(targil23("yakov","s"));


//targil 24
function targil24(str1,str2) {
    return str1[0] + ". " +str2.substr(1).toUpperCase(); 
}
// console.log(targil24("yakov","kassa"));

//targil 25
function targil25(str1,str2) {
    if(str1.length > str2.length){
        console.log(str2);
        return str1
    }
    console.log(str1);
    return str2;
}
// console.log(targil25("yakov","ka"));    

//targil 26
function targil26(str1,tav) {
    if(str1.indexOf(tav) != -1){
        return str1;
    }
    alert(`didnt found the tav: ${tav}`)
}
// console.log(targil26("yakov","w"));

//targil 27 bonus
function targil27(str) {
    if(str.indexOf(" ") == -1){
        console.log("cas 1");
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    else if ((str.indexOf(" ") == str.lastIndexOf(" ")) && (str.indexOf(" ") != -1 )){
        console.log("case 2");
        return [str.slice(0,str.indexOf(" ")), str.slice(str.indexOf(" ")+1)]
    }
    else{
        let name = str.slice(0,str.indexOf(" "));
        let nikName = str.slice( str.indexOf(" ")+1 , str.lastIndexOf(" "));
        let lastName = str.slice( str.lastIndexOf(" ")+1)
        return `the name is: ${name}, last Name: ${lastName}, nik Name: ${nikName}`
     } 
    }
console.log(targil27("yakov adefres kassa"));
