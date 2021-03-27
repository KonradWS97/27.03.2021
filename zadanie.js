console.log("hej swiat")
let liczba = 5
let aa = document.getElementById("opis")
let bb = document.getElementsByClassName("opisclasa")
 console.log(bb)
 console.log(aa)
if (liczba > 0)
{
    bb
    [0].innerHTML= "<h1> działa jest dodatnie </h1>"
console.log("działa, dodatnia")
}
else 
{
    console.log( "zero lub ujemna")
}
//                  zadanie 2
let b = document.getElementById("opis_zadanie2")
let ocena = 4;
//zrobic inputa by mozna było wpisac
switch(ocena)
{
    case 1 : 
        console.log("case dla oceny 1")
        a.innerHTML= "jedynka"

    break;
    case 2 : 
        console.log("case dla oceny 2")
        b.innerHTML= "dwojka"
    break; 
    case 3 : 
    console.log("case dla oceny 3")
    b.innerHTML= "trzy"
    break; 
    case 4 : 
    console.log("case dla oceny 4")
    b.innerHTML= "czwórka"
    break; 
    case  5: 
    console.log("case dla oceny 5")
    b.innerHTML= "piateczka !!!"
    break; 
    default : 
    console.log("ocena nie z przedziału")
    b.innerHTML= "ocena nie z przedziału"
}
//                  zadanie 3
let button1 = document.getElementById("przycisk")
let c = document.getElementById("opis")
button1.addEventListener("click", function(c)
{
    a.innerHTML = " Witaj swiecie!!!!"
    button1.style.display="none";

})
// //                  zadanie 4
let suwak1 = document.getElementById("suwak")
let a = document.getElementById("opis_zadanie4")
suwak1.addEventListener("input",function(){
console.log(suwak.value)
a.innerHTML = (suwak.value)
})
//                  zadanie 5
const elementy=document.querySelectorAll('.przycisk');
let f = document.getElementById("opis_zadanie5")
// console.log(elementy)
for(const element of elementy)
{
    // console.log(element)
    element.addEventListener("click", function(l)
    {
        a.innerHTML=(l.target.innerText)
    })
}
