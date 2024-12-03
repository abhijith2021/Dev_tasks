
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

function validate(fname,mail)
{
    
    console.log(fname);
    var namePattern = /^[a-zA-z\s]$/;
    if (!namePattern.test(fname))
        {
         alert( "invalid name entered");
         return "invalid name";
        }
    
    var mailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
    if(!mailpattern.test(mail)){
        alert("invalid mail entered");
        return "invalid mail";

    }
    
    alert("you are good to go");
    return "valid";
}
function validForm(){
    var firstname = document.getElementById("fname").value;
    var emailAddress = document.getElementById("mail").value
    var validNotification = validate(firstname);
    var mailNotification = validate(emailAddress);
    if (validNotification === "valid" && mailNotification === "valid"){
        document.getElementById("notification").textContent = "form submitted successfully";
    }
    else{
        document.getElementById("notification").textContent = "invalid credentials entered"
    }
    
    console.log(validNotification);
    console.log(mailNotification);
}
