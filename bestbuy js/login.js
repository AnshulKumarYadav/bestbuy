var forSignIn = JSON.parse(localStorage.getItem("bestBuyUserDetails"));
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
                        window.open("profile.html" ,"_self");
                        return;
                }
            }
             else if(i==forSignIn.length-1) {
                        alert("Wrong password or email"); 
            }
      }
      document.querySelector("#email").value = "";
       document.querySelector("#pass").value = "";
}