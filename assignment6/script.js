document.getElementById("concatenate").onclick=function(){
    let h1=prompt("please enter a string")
    let h2=prompt("please enter another string")
    // let h2="hamad"
    // let h3="hassan"
    // let h=h1+h2+h3
    // console.log(h)
    alert("Welcome!"+ " " + h1 +" " + h2)
    document.getElementById("originalStatement").innerText=""  
   
    document.getElementById("outputStatement").innerHTML="Welcome!"+ " "+h1+ " "+h2
    
}
// ask name 
document.getElementById("askname").onclick=function(){
    let name=prompt("please enter your name")
  alert("Good Morning!"+ "   "+name)
    console.log(name)
    document.getElementById("originalStatement").innerText= ""
    document.getElementById("outputStatement").innerHTML="<span style=color:green; >Good Morning! </span>"+name
   
}
// comparison operator 
document.getElementById("comparison").onclick=function(){
    let v1=prompt("enter a value")
    let v2=prompt("enter 2nd value")
  if(v1==v2){
    alert("both are equal")
  }
  else{
alert("false")
  }
    
  
   
}
// ifelseif 
document.getElementById("ifelseif").onclick=function(){
    let h1=+prompt("please enter a number")
    let h2=+prompt("please enter another number ")
  if (h1<h2){
  alert ('2nd Number is greater')
  
    document.getElementById("outputStatement").innerHTML="2nd Number is greater"}
   
    else if(h1>h2){
    alert("1st Number is greater")
    document.getElementById("outputStatement").innerHTML="1st Number is greater"
    }
    else if(h1===h2){
        alert("Both values are equal")
        document.getElementById("outputStatement").innerHTML="Both values are equal"
    }

    else{
        document.getElementById("outputStatement").innerHTML="error "
        alert("error")
    }
}

// testing set of conditions 

document.getElementById("testingsetof").onclick=function(){
    var age= +prompt("your age?")
var weight= +prompt("your weight?");
if (age>=18 && weight>=70){
    alert("you are a smart boy")
}
else if(age>=18 && weight>=60){
    alert("you are handsome")
}
else{
   alert("you are a baby") 
}}


// if statement nested 

document.getElementById("ifstatement").onclick=function(){
    var age= +prompt("your age?")

if (age>=18){
    var weight= +prompt("your weight?")
if(weight>=70){
alert("You Are Braveman")}
else if(weight>=60){
    alert("You Are Handsome")
    }
    else if(weight>=50){
        alert("You are cutee")
    }
    else {
        alert("you Are A Baby")
    }

}
else{
    alert("You Are Baby")
}
}







// login 
document.getElementById("login").onclick=function(){
    let id=prompt("please enter your id")
    let pass=prompt("please enter your password")

    if(id==="hamad" && pass === "123"){
alert("congrations! you are logeed in")
document.getElementById("outputStatement").innerHTML="<span style=color:green> Congrations!</span> you are logged in"
    }
    else{
        alert("You entered wrong Id or Password")
        document.getElementById("outputStatement").innerHTML="You enterd <span style=color:red>Wrong</span> Id or Password"
    }
}




// clear statement 
document.getElementById("clearOriginalStatement").onclick=function(){
    document.getElementById("originalStatement").innerHTML="" 
}

document.getElementById("clearOutputStatement").onclick=function(){
    document.getElementById("outputStatement").innerHTML="" 
}
