"use strict";
var $ = function (id) {
    return document.getElementById(id);
};
var myError = document.getElementById("errorMsg");

function checkFirst() {
    var fname = $("first").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if (!testName.test(fname)) {
        myError.innerHTML = "Names should only include text characters without spaces";
        $("first").value = "";
    }
    else {
        myError.innerHTML = "First Name Meets Requirements";
    }
}

function checkLast(){
    var lname = $("last").value;
    var testName = new RegExp("^[a-zA-Z]+$");
    if(!testName.test(lname)){
        myError.innerHTML = "Names should only include text characters without spaces";
        $("last").value = "";
    }else{
        myError.innerHTML = "Last Name Meets Requirments";
    }

}

function checkEmail(){
    var myEmail = $("email").value;
    var testEmail = new RegExp(".+\@.+\..+");
    if(!testEmail.test(myEmail)){
        myError.innerHTML = "That is not a proper email; please add an @ symbol and a domain";
        $("email").value = "";
    }
    else{
        myError.innerHTML = "Email Meets Requirements";
    }
}


function checkPhone(){
    var phone = $("phone").value;
    var testPhone = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if(!testPhone.test(phone)){
        myError.innerHTML="Please use the format (999) 999-9999";
        $("phone").value = "";
    }
    else{
        myError.innerHTML = "Phone Number Meets Requirements";
    }

}


function checkAddress(){
    var address = $("address").value;
    var testAddress = new RegExp( 	
"[A-Za-z0-9'\.\-\s\,]");
    if(!testAddress.test(address)){
        myError.innerHTML="Address should only include text characters and numbers";
        $("address").value = "";
    }
    else{
        myError.innerHTML = "Address Meets Requirements";
    }

}