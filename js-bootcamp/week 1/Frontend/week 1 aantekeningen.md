7 soorten primitive data typen
number
string
null
undefined
bolean
bigint
symbol

string + nummer = string met nummer erachter
14 + 1 = 14 1

var grade =
var is keyword
grade is variabel
= is assignment operator

1 + "14" is implicit - laat string string
explicit is 1 + Number("14") - maakt string een getal

je hebt var/let/const
var student = "henk" ;
als student opgevraagd wordt krijg je henk
je kan later nog student = "jan" geven
als je const gebruik is dit niet opnieuw te definen.
const asd = 123
dan is asd = 123
asd = 435 kan niet ingevoerd worden, kan geen nieuwe waarde krijgen.
let grade = 10
grade = 10 / in console invoeren
block of let scope.

Functies is een makkelijke manier om code te schrijven die je wilt hergebruiken.
function sum(a,b){
return a+b
}
sum(1,2)
3
function is een keyword(
(a,b) zijn de parameters
(1,2) zijn de arguments.
sum is een scope

een string heeft bepaalde methods
"henk".include("h")
true

verschil tussen Null en Undefined
null geeft een waarde zonder waarde
undefined is een waarde wat niet mogelijk is, de waarde bestaat niet

sum (1,2)
var sum = function sum(a,b) {
return(a,b)
}
de function gebeurt in runtime, is dus voor nu undefined. dat komt door het gebruik van de var

var student = null
var grade = null
if(student) {
student.grade = 10
} if else(grade) {
grade = 0
} else {
console.error("no student grade found")
}

for (var index = 0; index < 10; index ++) {
console.log(index)
}
geeft 0 t/m 9

object is samengesteld uit key:value pairs
object{
}
var student = {
grade: 10
}
var student = {
name: "henk"
grade : 10
}
student.name is henk
etc
person2 = {
name:"jan"
age:20
}
if(person2.age ≥ 20) {
console.log ( "match with" + student.name)
later kan je nog dingen toevoegen door
person2.wnatsage=50

ARRAY Var students = [ 1 , "1" , true]
bijv
var grades = [ 1, 2, 3, 4, 5]
var students [{
name:"jan"
},{
name:"henk"
}]
for loop voor array
for(var index = 0; index < students.length - 1; index++){
var students = students[index]
console.log(student)
}
met arrays wordt er geteld vanuit 0. wil je 100 hebben moet je 99 vragen.

window geeft alle informatie terug over een pagina.

foreach is een method met een functie erin :
students.forEach((function(students){
console.log(students)
})
bovenste students is een parameter
onderste is een argument.

students.push({name: "Piet"})
dan komt er bij students piet bij.

3 methods
map / filter / reduce
map geeft een nieuw array met het geen wat je opvraagt
filter geeft een nieuw array met hetgeen wat true condition heeft
reduce geeft terug met wat je zelf maar wilt
students.map(function(student){
return student.name + '1'
})
return is een keyword van javascript
hierdoor krijg je alle namen van de students terug met 1 erachter in een nieuw array.
het stukje student is een variabele naam die je zelf kan invoeren.
students.filter(function(student){
return student.name = = = 'piet'
})
geeft alleen piet terug want die is true
je krijgt echt een nieuwe array, students wordt niet aangepast!
als je hier een variabele voor zet kan je de nieuw gemaakte array opnieuw gebruiken.
[{grade:5],{grade10}]
students.reduce(function(sum, student){
return sum+student.grade
}, 0)
eerste keer krijg je 5 en 10 terug
tweede keer krijg je 10 en 20 terug
var cyclists = [

{

time: 102

},

{ 

time: 50

},

{

time: 40

},

{

time: 192

},

{

time:45

},

{

time:51

}

]

cyclists.reduce(function(fastestTime, currentTime) {
 if(fastestTime > currentTime.time) {
		return currentTime.time
	} else {
		return fastestTime.time
	
}, infinity)
wat je returned komt als eerste parameter terug in de code.
eerst vergelijkt die infinity met de eerste tijd
dan wordt de return teruggeplaatst
en die met de volgende vergeleken.
