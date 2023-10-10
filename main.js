
function btn(){
  var img=document.getElementById("img")
  var images=["images/fleur-orchidee-phalaenopsis_1373-275.avif","/images/rose11.avif","/images/jas2.jpg","/images/téléchargement.jpg","/images/XVM64330e8c-fc47-11ec-ac25-d6fb1b2d2226.webp","/images/istockphoto-1393708668-612x612.jpg"]
var random=Math.floor(Math.random()*5)
img.src=images[random]
 }


 $("button").click(function(){
  $("img").toggle();
});
function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();
function makeSomthing(name,images,price){
  return{
    price:price,
    name:name,
    images:images,
    id:id(),
  }
}

 

















  


  



