const originalText = "I love my Country Pakistan.<br>I Love My Homeland.<br>I love My City.";
const cities      = ["Faislabad","Islamabad","Kashmir","Lahore"];
document.getElementById('originalText').innerHTML = originalText;

var input = document.getElementById('inputText');
var output = document.getElementById('output');

const clearInput = function(){
 return input.value = "";
}
const clearOutput = ()=>{
 return output.innerHTML = "";
}
   
const showOutput = (outputData) =>{
output.innerHTML = outputData;
}

const toLower = ()=>{
   showOutput(originalText.toLowerCase());
}
const toUpper = () => {
    showOutput(originalText.toUpperCase());
}

const toCap = () => {
    const words = originalText.split(" ");
    for(let i = 0; i<words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
    showOutput(words.join(" "));
}
const betterFormat = () => {
    let inputVal = input.value;
    const words = inputVal.split(" ");
    for(let i = 0; i<words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
    showOutput(words.join(" "));
}
let allCities = () => {
    let citties = "";
    cities.map((e,index) => {
        citties =  citties+ (index + 1) +") " + e + "<br>";
    });

        showOutput(citties);
}

  let adddCities= ()=>{
    adddcities=cities.concat(input.value);
    showOutput(adddcities);
}
const checkcity=()=>{
const checkCity=cities.includes(input.value);
if(checkCity){
    showOutput(input.value + " is present in cities");
}else{
    showOutput(input.value + " is not present in cities");
}
}

const findword=()=>{
let find=cities.find((cities) => cities == input.value);

if(find){
    showOutput(find + " is present");
}
    else{
        showOutput(find)
    }
}
const replaceword=()=>{
    // const index = arr.indexOf(input.value); 
    let replace=cities.splice( 1, input.value);
     console.log(replace)
     
    if( input.value!= cities){
        showOutput(input.value + " is replaced");
    }
        else{
            showOutput("this is already present")
        }
    }
