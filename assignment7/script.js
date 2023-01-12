// simple alert 
document.getElementById("simplealert").onclick = function () {
    outputresult.innerHTML = "";
    let simpleAlert = document.getElementById("inputText").value;
    alert(simpleAlert)
    document.getElementById("outputresult").innerHTML =simpleAlert
}
// print my name 
function printMyName() {
    outputresult.innerHTML = "";
    let myName = document.getElementById("inputText").value;
    if (!myName) {
        alert("Please type your name")
        return;
    }
    document.getElementById("outputresult").innerHTML = myName
}



// add city in list 

var city0 = "Islamabad";
var city1 = "Karachi";
var city2 = "Lahore";
var city3 = "Peshawar";
var city4 = "Queta";
var cities=["Faisalabad", "Lahore", "Karachi", "Pishawar", "Islamabad", "Sheikhupura", "Kashmir"]

addcity.onclick = function () {

   

    let addCity = document.getElementById("inputText").value;
    outputresult.innerHTML = "";
    // var city = prompt("Enter your city?");
    if (!addCity) {
        alert("Please enter a city name")
        return;
    }
    cities.unshift(addCity)

    alert(addCity + " has been added into cities array.")

}

// print all cities 
printallcities.onclick = function () {

     outputresult.innerHTML = "";

    for (var index = 0; index < cities.length; index++) {

        outputresult.innerHTML += index+1 +") "  + cities[index] + "<br>";

    }

}



// generate table
generatetable.onclick = function (){
     let number = document.getElementById("inputText").value;
    //  var number = +prompt("Enter a number");

    for (var j = 0; j <= 10; j++) {
        outputresult.innerHTML += " "+ number + "x" + j + " = " + number * j +"<BR>";
    
    }
}




// clear statement 
document.getElementById("button-addon1").onclick =function(){
    document.getElementById("inputText").value = " "
}


document.getElementById("clearoutput").onclick = function () {
    document.getElementById("outputresult").innerHTML = " "
}


// printAllCities.onclick = function () {

//     outputresult.innerHTML = "";

//     for (var index = 0; index < cities.length; index++) {

//         outputresult.innerHTML += "I love: " + cities[index] + "<br>";
// console(cities.length)
//     }

// }
// function printAllCities(){
//     var cities=["Faisalabad", "Lahore", "Karachi", "Pishawar", "Islamabad", "Sheikhupura", "Kashmir"]
 

//     for(let i= 0; i < cities.length; i++){
//         let num= i+1;
//         document.getElementById('outputresult').innerHTML += num + ')' + cities[i] + '<br>';
//     }
// }


// document.getElementById("printmyname").onclick=function(){
//     document.getElementById("typetext").innerHTML="Hamad-Ur-Rehman"
//     document.getElementById("outputresult").innerHTML="Hamad-Ur-Rehman"  

// }

// document.getElementById("printallcities").onclick = function () {
//     document.getElementById("outputresult").innerHTML = `<li> 1) Faisalabad</li>
//     <li>  2) Lahore</li>
//     <li>3) Karachi</li>
//     <li>4) Pishawar</li>
//     <li>5) Islamabad</li>
//     <li>6) Sheikhupura</li>
//     <li>7) Kashmir</li> `
// }
// document.getElementById("addcity").onclick=function(){
// let cities = ["Faisalabad", "Lahore", "Karachi", "Pishawar", "Islamabad", "Sheikhupura", "Kashmir"]
// console.log(cities)
// cities.push("Quetta")
// function addCity(){
//     let addCity=document.getElementById("inputText").value;
//     if(!addCity) {
//         alert("please type your city name");
//         return;
//     }
//     cities.push(addCity);
//     document.getElementById("outputresult").innerHTML='<span> style=color:green; Congratulations!'


// print my name 
// printmyname.onclick = function () {

//     var name = prompt("what is your name?");

//     alert(name);
//     outputresult.innerHTML=name

// }





