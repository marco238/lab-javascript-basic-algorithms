// Names and Input
var hacker1 = "Marco";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("The navigator's name is:");
console.log("The navigator's name is " + hacker2);

//Conditionals
var len1 = hacker1.length;
var len2 = hacker2.length;

if(len1 > len2) {
  console.log("The Driver has the longest name, it has " + len1 + " characters");
} else if(len1 < len2){
  console.log("Yo, navigator got the longest name, it has " + len2 + " characters");
} else {
  console.log("wow, you both got equally long names, " + len1 + " characters!!");
}

//Loops
var uCaseDriver = "";
for( i=0; i < len1; i++){
  uCaseDriver += hacker1.toUpperCase()[i] + " ";
}
uCaseDriver = uCaseDriver.slice(0, uCaseDriver.length-1);
console.log(uCaseDriver);

console.log(hacker2.split("").reverse().join(""));

if(hacker1.localeCompare(hacker2) < 0){
  console.log("The driver's name goes first");
} else if(hacker1.localeCompare(hacker2) > 0){
  console.log("Yo, the navigator goes first definitely");
} else console.log("What?! You both got the same name?");

// Lorem ipsum generator
