document.querySelector("#form").addEventListener("submit", createAccountFun);
var userObjectArray = JSON.parse(localStorage.getItem("bestBuyUserDetails")) || [];
// console.log(userObjectArray.length);
function createAccountFun() {
       event.preventDefault();
       var firstName = document.querySelector("#fName").value;
       var lastName = document.querySelector("#lName").value;
       var email = document.querySelector("#email").value;
       var password = document.querySelector("#pass").value;
       var confirmPass = document.querySelector("#confirmPass").value;
       var mobile = document.querySelector("#mobile").value;

       for (var i = 0; i < userObjectArray.length; i++) {
              if (email == userObjectArray[i].email) {
                     alert("Email id is already in used!");
                     clearInputField();
                     return;
              }
       }
       if (password == confirmPass) {
              var userObject = {
                     firstName: firstName,
                     lastName: lastName,
                     email: email,
                     password: password,
                     confirmPass: confirmPass,
                     mobile: mobile
              }
              userObjectArray.push(userObject);
       }
       else {
              alert("password are not same");
       }
       localStorage.setItem("bestBuyUserDetails", JSON.stringify(userObjectArray));
       clearInputField();
}
function clearInputField() {
       document.querySelector("#fName").value = "";
       document.querySelector("#lName").value = "";
       document.querySelector("#email").value = "";
       document.querySelector("#pass").value = "";
       document.querySelector("#confirmPass").value = "";
       document.querySelector("#mobile").value = "";
}