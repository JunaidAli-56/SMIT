// clear statement 
document.getElementById("clearoutput").onclick = function () {
    document.getElementById("outputresult").innerHTML = " "
}

let fName = document.getElementById('fName')
let lName = document.getElementById('lName')
let email = document.getElementById('email')
let date = document.getElementById('date')
function addUser() {
    let user = {
        fName: fName.value,
        lName: lName.value,
        email: email.value,
        date: date.value
    }
    let users = localStorage.getItem('users');
    console.log(users)
    if (users == null) {
        usersObj = [];
    }
    else {
        usersObj = JSON.parse(users)
    }
    usersObj.push(user);
    localStorage.setItem('users', JSON.stringify(usersObj))
    Swal.fire(
        'Success!',
        'User Added Successfully',
        'success'
    )
    fName.value = '';
    lName.value = '';
    email.value = '';
    date.value = '';
}


function goGenerate() {
    let outputresult = document.getElementById('outputresult');
    let users = localStorage.getItem('users');
    let table = document.getElementById('table');
    table.style.display = 'block';
    if (users == null) {
        usersObj = [];
    }
    else {
        usersObj = JSON.parse(users)
    }
    let html = '';
    let sno = 0;
    usersObj.forEach(element => {

        html += `<tr>
                    <td>${sno += 1}</td>
                    <td>${element.fName}</td>
                    <td>${element.lName}</td>
                    <td>${element.email}</td>
                    <td>${element.date}</td>
                </tr>`

    });

    outputresult.innerHTML = html;

}

console.log(fiets);
function adddd() {
    console.log(first);
}

