 var cartItem = JSON.parse(localStorage.getItem("cartData"));

var sumObj=[];
 cartItem.map(function(elem){
    var imgbox = document.querySelector("#imagetoCart");
    var img = document.createElement("img"); 
    img.src = elem.image;
   imgbox.append(img);

   var form = document.querySelector("#form");
   var formbox1 = document.createElement("div");
   var address1 = document.createElement("input");
   address1.type="radio";
   var addresslabel1 = document.createElement("label");
   addresslabel1.innerText="Pickup atNorth Anchorage North Anchorage Available Today at a store 6 miles awayEligible for curbside pickup";
   formbox1.append(address1,addresslabel1);

   var formbox2 = document.createElement("div");
   var address2 = document.createElement("input");
   address2.type="radio";
   var addresslabel2 = document.createElement("label");
   addresslabel2.innerText="Delivery to96939 96939Unavailable in your area";
   formbox2.append(address2,addresslabel2);

   form.append(formbox1,formbox2);

    var name = document.querySelector("#nameofItem");
    name.src=elem.name;

    var price = document.querySelector("#price");
    var Itemprice = document.createElement("h4")
    Itemprice.innerText=elem.price;

    var Saveprice = document.createElement("h5")
    Saveprice.innerText=elem.save;
    Saveprice.innerText = Saveprice.innerText.slice(1);

    var Wasprice = document.createElement("h6")
    Wasprice.innerText=elem.wasPrice;
    Wasprice.innerText = Wasprice.innerText.slice(1);
    // console.log(Wasprice.innerText);

    price.append(Itemprice,Saveprice,Wasprice);

   

   var displaywasPrice = Number(Wasprice.innerText);
   var displaysavePrice = Number(Saveprice.innerText);
//    console.log(displaywasPrice);
   var obj = {
       displaywasPrice,
       displaysavePrice,

   }
   sumObj.push(obj);
 })
 
//    console.log(sumObj)
const sumall = sumObj.map(item => item.displaywasPrice).reduce((prev, curr) => prev + curr, 0);
const Savesum = sumObj.map(item => item.displaysavePrice).reduce((prev, curr) => prev + curr, 0);
var originalprice =  document.querySelector("#originalPrice");
   originalprice.innerText=sumall;
// console.log(sumall);
var saving = document.querySelector("#saving").innerText=Savesum;
document.querySelector("#storepickup").innerText="FREE";
 var total = eval(sumall-Savesum);
 document.querySelector("#totalAmount").innerText=total;


 
//  document.querySelector("#remove").addEventListener("click",removefunction)
//  function removefunction()
//  {
//      var x = document.querySelector("#addItemstoCart");
//      x.style.display="none";
//  }

//  document.querySelector("#save").addEventListener("click",savefunction)
//  function savefunction(elem)
//  {
//     var y =  document.querySelector("#items-to-save").innerText=elem;
//  }





//  document.querySelector("#originalPrice").innerText=elem.wasPrice;