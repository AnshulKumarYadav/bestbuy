 var cartItem = JSON.parse(localStorage.getItem("cartData"));

 var addItembox = JSON.parse(localStorage.getItem("addItembox")) || [];
 cartItem.map(function(elem){
    var img = document.querySelector("#addImg");
    // img.src = elem.img;
    img.src=elem.img;

    var name = document.querySelector("#addName");
    name.innerText=elem.name;

    var price = doucment.querySelector("#price");
    price.innerText = elem.price;

    var obj = {
        img,
        name,
        price,
    }
    addItembox.push(obj);
    console.log(addItembox);

    localStorage.setItem("forSaved", JSON.stringify(addItembox))
 })

 
 