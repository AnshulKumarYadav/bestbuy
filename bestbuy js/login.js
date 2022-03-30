var forSignIn = JSON.parse(localStorage.getItem("bestBuyUserDetails"));
// console.log(forSignIn);
// console.log("***********************************************************************");
// console.log(forSignIn);
document.querySelector("#form").addEventListener("submit", signInFunction);
var signInArray = [];
function signInFunction() {
      event.preventDefault();
      var email = document.querySelector("#email").value;
      var password = document.querySelector("#pass").value;
      for (var i = 0; i < forSignIn.length; i++) {
            if (email == forSignIn[i].email && password == forSignIn[i].password) {
                if(email!=null || password!=null){
                        // alert("sign in successfull")
                        window.open("https://www.bestbuy.ca/en-ca","_self");
                        return;
                }
            }
             else if(i==forSignIn.length-1) {
                        alert("Wrong password or email"); 
            }
      }
}