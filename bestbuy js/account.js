document.querySelector("#form").addEventListener("submit", createAccountFun);
var userObjectArray=JSON.parse(localStorage.getItem("bestBuyUserDetails"))|| [];
function createAccountFun() {
    event.preventDefault();
    var firstName = document.querySelector("#fName").value;
    var lastName = document.querySelector("#lName").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#pass").value;
    var confirmPass = document.querySelector("#confirmPass").value;
    var mobile = document.querySelector("#mobile").value;
    var userObject = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPass: confirmPass,
        mobile: mobile
    }
    userObjectArray.push(userObject);
    localStorage.setItem("bestBuyUserDetails",JSON.stringify(userObjectArray));
    // firstName.innerText="";
    // mobile.innerText="";
    // window.location.reload();
    console.log(userObjectArray);
}