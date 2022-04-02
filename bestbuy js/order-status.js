var order = document.querySelector("#order").addEventListener("click",showFunction)
var close = document.querySelector("#close").addEventListener("click",hideFunction)
var box = document.querySelector("#order-content");
var save = document.querySelector("#order-status");
function showFunction()
{
    box.style.opacity="1";
    save.style.backgroundColor="rgba(0,0,0,0.3)";
    
}
function hideFunction()
{
    box.style.opacity="0";
    save.style.backgroundColor="transparent";
}


