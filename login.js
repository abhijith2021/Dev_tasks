// valid username conditions for login
// ^[A-Z][a-z]+(?: [A-Z][a-z]+)*$
document.getElementById('frm1').addEventListener('submit', function(event){
    event.preventDefault();
    const first_name = document.getElementById('fname').value;
    const mail = document.getElementById('mail').value;
    const phone_number = document.getElementById('phn').value;
    const password = document.getElementById('pass').value;
    const confirm_password = document.getElementById('cnf').value;

    console.log('your first name is:' , first_name);
    console.log('your mail id is:' , mail);
    console.log('your phone number is:' , phone_number);
    console.log('your password is:' , password);
    console.log('your confirmed password is:' , confirm_password);


});