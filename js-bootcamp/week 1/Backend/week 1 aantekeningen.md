methods zijn voor objects.
name.length is een method van de object name
this.name refereert naar de naam in het betreffende object.
global scope
function scope
block scope
global scope bijv:
const name = "danny";

console.log(name)
global scope pakt het eerst vd javascript, hoe diep je ook zit. De variabele die op het hoogste niveau is gedeclareerd kun je altijd aanroepen.
local scope
function greeting() {
const name = "danny" ;

}

console.log(name)'
dit werkt niet
de console log wilt toegang tot greeting maar dat krijgt die niet door de gatekeepers de {}.
daarom werkt deze niet.
function greeting() {
const name = "danny" ;
console.log(name)'
}

greeting()
dit dit werkt wel omdat de console log binnen de gatekeepers staat.
block scope
if (true) {
var x = 5;
}

console.log(x)
bij een block scope geef je alleen de var toestemming om buiten om de gate keepers een bepaalde waarde op te pakken. dit is alleen bij var. bij const of let werkt dit niet.
block scope is minder streng. is ook een if state of een condition. dit werkt ook als de if statement in een function staat.
hoisting
console.log(num)
var num;
num = 6;
dit geeft undifened

num = 6;
console.log(num);
var num;
dit geeft 6
js denkt oh er staat geen var voor num dus hij wordt gehoist, hierdoor onthoudt die hem.
het num stukje is hoisten
myJob = "developer"
console.log("my job is" = myJob);
var = myJob
myJob wordt gehost
beste is :

var myJob = "developer"
console.log("my job is" = myJob);
