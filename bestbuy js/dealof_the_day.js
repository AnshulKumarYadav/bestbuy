
var bonusData = [
    {image:"https://www.bowflex.com/dw/image/v2/AAYW_PRD/on/demandware.static/-/Sites-nautilus-master-catalog/default/dw962d7757/images/bowflex/bikes/velocore/100925/velocore-bowflex-bike-16.png?sw=1200&sh=800&sm=fit",name:"Bowflex - VeloCore Bike (16' Console) - Black",price:"$1,099.99",save:"Save $900",wasPrice:"was Price $1,999.99"},
    {image:"https://media.hearstapps.com/vader-prod.s3.amazonaws.com/1648570923-6461452_rd.jpg?width=600",name:"Bella Pro Series - 9-qt. Digital Air Fryer with Dual Flex Basket - Stainless Steel",price:"$79.99",save:"Save $100",wasPrice:"wasPrice $179.99"},
    {image:"https://m.media-amazon.com/images/I/71DwqGSnhEL._SX450_.jpg",name:"Cuisinart - 12-Piece Cookware Set - Stainless Steel",price:"$89.99",save:"Save $9.99",wasPrice:"wasPrice $299.99"},
    {image:"https://m.media-amazon.com/images/I/81906M53GdS._SY450_.jpg",name:"Seagate - Expansion 4TB External USB 3.0 Portable Hard Drive with Rescue Data Recovery Services -",price:"$79.99",save:"Save $25",wasPrice:"wasPrice $104.99"},
    {image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6309/6309234_sd.jpg",name:"Seagate - Game Drive for PlayStation Consoles 2TB External USB 3.2 Gen 1 Portable Hard Drive Officially-",price:"$68.49",save:"Save Save $24",wasPrice:"wasPrice $92.49"},
    {image:"https://www.westerndigital.com/content/dam/store/en-us/assets/products/portable/easystore-desktop/gallery/easystore-desktop-hero.png.thumb.1280.1280.png",name:"WD - easystore 18TB External USB 3.0 Hard Drive - Black",price:"$329.99",save:"Save $187",wasPrice:"wasPrice $516.99"},
    {image:"https://i.ebayimg.com/thumbs/images/g/t34AAOSwP0NiKN7w/s-l300.jpg",name:"Insignia™ - 0.7 Cu. Ft. Compact Microwave - Mint Green",price:"$59.99",save:"Save $30",wasPrice:"wasPrice $89.99"},
    {image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486857_sd.jpg;maxHeight=640;maxWidth=550",name:"bObsweep - PetHair Vision PLUS Wi-Fi Connected Robot Vacuum & Mop - Beech",price:"$259.99",save:"Save $640",wasPrice:"wasPrice $899.99"},
    {image:"https://i5.walmartimages.com/asr/7d0a221d-3f2a-47a9-a304-09043139b421.8f5647264d887542ad51bf92850dd014.jpeg",name:"Philips Norelco - Series 3000 Rechargeable Wet/Dry Electric Shaver - Modern Steel Metallic",price:"$34.99",save:"Save $35",wasPrice:"wasPrice $69.99"},
    {image:"https://m.media-amazon.com/images/I/31e-3y7O84L.jpg",name:"Hover-1 - Kids Flare Foldable Electric Scooter w/3 mi Max Operating Range & 8 mph Max",price:"$149.99",save:"Save $30",wasPrice:"wasPrice $179.99"},
    {image:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-72970-dotd-032922-01-0ec17a02-b983-48bb-b434-8b2bae452cd5.jpg;maxHeight=350;maxWidth=584",name:"Save up to 25% on select Yu-Gi-Oh! trading card games.",price:"$89.99",save:"Save $89.99",wasPrice:"wasPrice $299.99"},
    {image:"https://m.media-amazon.com/images/I/8194p4lS-3L._AC_SL1500_.jpg",name:"SanDisk - Ultra PLUS 128GB SDXC UHS-I Memory Card",price:"$22.99",save:"Save $17",wasPrice:"wasPrice $39.99"},
    {image:"https://pisces.bbystatic.com/BestBuy_US/images/products/5834/5834701_sd.jpg;canvasHeight=350;canvasWidth=350",name:"Dynex™ - 2.4A USB Wall Outlet (2-Pack) - White",price:"$19.99",save:"Save $10",wasPrice:"wasPrice $29.99"},
    {image:"https://m.media-amazon.com/images/I/61YXt-AYiAL._AC_SL1000_.jpg",name:"Save up to 40% on select LED flashlights or POWERCAP rechargeable LED beanie cap.",price:"$79.99",save:"Save $100",wasPrice:"wasPrice $179.99"},
    {image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6480/6480596_sd.jpg;maxHeight=640;maxWidth=550",name:"Walker Edison - Farmhouse Barn Door TV Stand for Most TVs up to 65” - Rustic Oak/brushed white",price:"$204.99",save:"Save $145.99",wasPrice:"wasPrice $349.99"},
    {image:"https://www.cnet.com/a/img/resize/125d5e8f6872a2e770cb61b81a05340a8fd887fb/2020/08/03/b3dd8f41-cce2-4589-ab3a-73cbdf2af2fb/6291884cv18d.jpg?auto=webp&fit=crop&height=675&width=1200",name:"Cuisinart - 12-Piece Cookware Set - Stainless Steel",price:"$89.99",save:"Save $89.99",WasPrice:"wasPrice $299.99"}
]

var arrObj = JSON.parse(localStorage.getItem("arrObj")) || [];

bonusData.map(function(elem){
    var img = document.createElement("img");
    img.src = elem.image;

    var name = document.createElement("h4");
    name.setAttribute("id","namee");
    name.innerText=elem.name;

    var price = document.createElement("h1");
    price.setAttribute("id","pricee");
    price.innerText=elem.price;

    var savePrice = document.createElement("p");
    savePrice.setAttribute("id","saveprice");
    savePrice.innerText = elem.save;

    var wasPrice = document.createElement("p");
    wasPrice.setAttribute("id","wasprice");
    wasPrice.innerText = elem.wasPrice;

    var btn = document.createElement("button");
    btn.innerText="Add To Cart";
    btn.addEventListener("click",function(){
        mufunction(elem);
    });

    var bonusBox = document.createElement("div");

    var x = document.querySelector("#bonus-deals");

    bonusBox.append(img,name,price,savePrice,wasPrice,btn);
    x.append(bonusBox);


})

function mufunction(elem)
{
    arrObj.push(elem);
    // console.log(arrObj)
    localStorage.setItem("cartData",JSON.stringify(arrObj));
}






var sliderData = [
    {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/FeaturedDeals_Blue_Solid_Lg_RGB-104799.png;maxHeight=140;maxWidth=140",Itemname:"Featured Deals",},
    {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479683_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Laptops & Computers",},
    {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6470/6470258_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"TVs & Projectors",},
    {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356072_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Vedio Games",},
    {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443321_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Apple",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6408/6408356_rd.jpg;maxHeight=140;maxWidth=140",Itemname:"Headphones",}, 
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6494/6494419_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Cell Phones",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6403/6403872_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Tablets",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6168/6168626_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Major Appliances",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5850/5850410_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Small Kitchen Appliances",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6443/6443974_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"PC Gaming",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454650_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Sound Bars & Speakers",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6451/6451018_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Cameras & Camcorders",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464601cv13d.jpg;maxHeight=140;maxWidth=140",Itemname:"Wearable Technology",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6461/6461319_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Smart Home & Networking",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6404/6404066_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Floor Care & Home Air Quality",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6482/6482794_sa.jpg;maxHeight=140;maxWidth=140",Itemname:"Movies & Music",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427196_rd.jpg;maxHeight=140;maxWidth=140",Itemname:"Fitness & Recovery",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6459/6459273_rd.jpg;maxHeight=140;maxWidth=140",Itemname:"Personal Care & Beauty",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6483/6483736_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Health & Wellness",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6480/6480937_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Video & Streaming Media PLayer",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6377/6377570_rd.jpg;maxHeight=140;maxWidth=140",Itemname:"Electric Transportation & Recreation",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6423/6423125_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Home & Outdoor",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6319/6319479_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Car Electronics & GPS",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6495/6495444_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Toys, Games & Collectibles",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428776_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Baby Care",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6373/6373937_sd.jpg;maxHeight=140;maxWidth=140",Itemname:"Gift Cards",},
    // {imageItem:"https://pisces.bbystatic.com/image2/BestBuy_US/dam/TopDeals_Services-Icon-56408cba-e222-410f-9e7b-7d53dc23ca37.png;maxHeight=140;maxWidth=140",Itemname:"Support & Services",},


]



sliderData.map(function(element){
    var box2 = document.createElement("div");

    var Itemimg = document.createElement("img");
    Itemimg.src = element.imageItem;

    var Item = document.createElement("p");
    Item.innerText = element.Itemname;

    box2.append(Itemimg,Item);
   var deals =  document.querySelector("#slider-topdeals")
   deals.append(box2);

   
})




var sliderData2 = [
    {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 55 Class 8000 Series LED 4K UHD Smart Tizen TV",},
    {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 58 Class 7 Series LED 4K UHD Smart Tizen TV",},
    {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453024_sd.jpg;maxHeight=272;maxWidth=400",names:"Insignia™ - 50 Class F30 Series LED 4K UHD Smart Fire TV",},
    {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453024_sd.jpg;maxHeight=272;maxWidth=400",names:"Insignia™ - 50 Class F30 Series LED 4K UHD Smart Fire TV",},
    {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456970_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 55 Class 8000 Series LED 4K UHD Smart Tizen TV",},
    //  {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456970_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 58 Class 7 Series LED 4K UHD Smart Tizen TV",}, 
    //  {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=272;maxWidth=400",names:"Insignia™ - 50 Class F30 Series LED 4K UHD Smart Fire TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453024_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 55 Class 8000 Series LED 4K UHD Smart Tizen TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456970_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 58 Class 7 Series LED 4K UHD Smart Tizen TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=272;maxWidth=400",names:"Insignia™ - 50 Class F30 Series LED 4K UHD Smart Fire TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456970_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 55 Class 8000 Series LED 4K UHD Smart Tizen TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453024_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 58 Class 7 Series LED 4K UHD Smart Tizen TV",},
    //   {images:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6456/6456970_sd.jpg;maxHeight=272;maxWidth=400",names:"Samsung - 55 Class 8000 Series LED 4K UHD Smart Tizen TV",},

]

sliderData2.map(function(ele){
    var Sliderimage = document.createElement("img");
    Sliderimage.src=ele.images;
    var SliderName = document.createElement("p");
    SliderName.innerText = ele.names;

    var sliderboxes = document.createElement("div");
    sliderboxes.append(Sliderimage,SliderName);

    document.querySelector("#slider-foryou").append(sliderboxes);
})