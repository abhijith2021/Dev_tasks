const form = document.getElementById("frm1");
form.addEventListener('input', (event) =>{
    const form = new FormData(form)
    const FormDataObject = {};
    
    formData.forEach((value,key) =>{
        FormDataObject[key] = value;
    });
    console.clear();
    console.log(FormDataObject);

});