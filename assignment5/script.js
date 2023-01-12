
document.getElementById("name").onclick=function(){
    alert("M Junaid Hayat") ;

    document.getElementById("originalStatement").innerHTML="alert('M Junaid Hayat')"
    document.getElementById("outputStatement").innerHTML='M Junaid Hayat'
   
}
document.getElementById("number").onclick=function(){
    alert("0123456789"); 
    document.getElementById("originalStatement").innerHTML="alert('0123456789')";
    document.getElementById("outputStatement").innerHTML='0123456789';
   
}
document.getElementById("variableName").onclick=function(){
   
    document.getElementById("originalStatement").innerText=`<ul>
    <li>A variable name can't contain any spaces.</li>
    <li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li>
    <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
    For example, <code>userAlert</code> and <code>myVar</code> are legal.
    </li>
    <li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a
    <code>Rose</code>. If you assign the string "Floribundas" to the variable <code>rose</code> , and then ask
    JavaScript
    for the value assigned to <code>Rose</code> , you'll come up empty
    </li>
    </ul>`

    document.getElementById("originalStatement").style.color = "#2495ff";

    document.getElementById("outputStatement").innerHTML=`<ul>
    <li>A variable name can't contain any spaces.</li>
    <li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li>
    <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords.
    For example, <code>userAlert</code> and <code>myVar</code> are legal.
    </li>
    <li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a
    <code>Rose</code>. If you assign the string "Floribundas" to the variable <code>rose</code> , and then ask
    JavaScript
    for the value assigned to <code>Rose</code> , you'll come up empty
    </li>
    </ul>`
    document.getElementById("outputStatement").style.color = "#2495ff";
}

// camelcase examples 


document.getElementById("camelCase").onclick = function () {
    document.getElementById("originalStatement").innerText =`<ul>
    <li>userResponse</li>
    <li>userResponse</li>
    <li>userResponseTimeLimit</li>
    <li>userResponse</li>
    </ul>` 
    document.getElementById("outputStatement").innerHTML ="html"


}

// sum numbers 
let sum1 = 20
let sum2 = 25
let sum = sum1 + sum2
console.log(sum)

document.getElementById("sum").onclick = function () {
    document.getElementById("originalStatement").innerText = 
    `let sum1 = 20
     let sum2 = 25
     let sum = sum1 + sum2
         sum = 20 + 25 `
    document.getElementById("outputStatement").innerHTML = sum;
}

// subtract numbers 
let sub1 = 30
let sub2 = 20
let sub = sub1 - sub2
console.log(sub)

document.getElementById("subtract").onclick = function () {
    document.getElementById("originalStatement").innerText = `let sub1 = 30
    let sub2 = 20
    let sub = sub1 - sub2
    sub=30-20`
    document.getElementById("outputStatement").innerHTML = sub;
}

// multiply numbers 
let multi1 = 5
let multi2 = 20
let multiply = multi1 * multi2
console.log(multiply)

document.getElementById("multiply").onclick = function () {
    document.getElementById("originalStatement").innerText = `let multi1 = 5
    let multi2 = 20
    let multiply = multi1 * multi2
    multiply= 5 * 20 `
    document.getElementById("outputStatement").innerHTML = multiply
}

// divide numbers 
let divide1 = 30
let divide2 = 2
let divide = divide1 / divide2
console.log(divide)

document.getElementById("divide").onclick = function () {
    document.getElementById("originalStatement").innerText = `let divide1 = 30
    let divide2 = 2
    let divide = divide1 / dividu2
    divide= 30/2 `
    document.getElementById("outputStatement").innerHTML = divide
}

// calculate some numbers 
let some1 = 36
let some2 = 6
let some3 = 3
let some4 = 2
let some5 = 4
let some6 = 3
let some7 = 5
let calculate = some1 / some2 * some3 ** some4 - some5 * some6 + some7;
console.log(calculate)

document.getElementById("calculate").onclick = function () {
    document.getElementById("originalStatement").innerText = `let some1 = 36
    let some2 = 6
    let some3 = 3
    let some4 = 2
    let some5 = 4
    let some6 = 3
    let some7 = 5
    let calculate = some1 / some2 * some3 ** some4 - some5 * some6 + some7
    calculate = 36 / 6 * 3**2 - 4 * 3 + 5`
    document.getElementById("outputStatement").innerHTML = calculate
}

document.getElementById("clearOriginalStatement").onclick=function(){
    document.getElementById("originalStatement").innerHTML="" ;
}

document.getElementById("clearOutputStatement").onclick=function(){
    document.getElementById("outputStatement").innerHTML="" ;
}





