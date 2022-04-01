var toCart = document.querySelector(".cart_data").addEventListener("click",myfunction);

function myfunction()
{
    
    localStorage.setItem("cartData",JSON.stringify(toCart));
    
}