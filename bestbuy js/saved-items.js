
var saved = document.querySelector("#saved").addEventListener("click",showFunction)
var close = document.querySelector("#close").addEventListener("click",hideFunction)
var box = document.querySelector("#saved-content");
var save = document.querySelector("#saved-items");
function showFunction()
{
    box.style.opacity="1";
    save.style.backgroundColor="rgba(0,0,0,0.3)";
    
}
function hideFunction()
{
    box.style.opacity="0";
    save.style.backgroundColor=none;
}


