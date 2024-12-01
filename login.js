
// function show(){
// var fname = document.getElementById('fname').value;
// // var name_main = fname.value;
// var phn = document.getElementById('phn').value;
// var pass = document.getElementById('pass').value;
// var cnf = document.getElementById('cnf').value;
// var mail = document.getElementById('mail').value;
// console.log("your first name is:" + fname);
// // console.log(mail);
// console.log("your phone number is:" + phn);
// console.log("your password is:" + pass);
// console.log(cnf);
// console.log("your mail id is:" + mail);
// const a = [];
// console.log(a.push({name: fname, password: pass}))
// console.log(a)

// }

function validate(fname){
    
    console.log(fname);
    var namePattern = /^[a-zA-z]$/;
    if (!namePattern.test(fname)){
        alert( "invalid name entered");
    }
    alert("you are good to go");
    
    
}
function validForm(){
    var firstname = document.getElementById("fname").value;
    
    var validNotification = validate(firstname);
    // ocument.getElementById("notification").textContent = validNotification;
    console.log(validNotification);
}
