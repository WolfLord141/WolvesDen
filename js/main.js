let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes;
let img = document.getElementById('img-1')
async function asyncCall(){
await fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes = data
  });
  
  var randomquote = quotes[Math.floor(Math.random() * Object.keys(quotes).length)]["text"]

  output.innerHTML = randomquote
}
btn.addEventListener('click', function(){
 asyncCall()
 })
 //api ^^^^^^



 //slide show   VVVV


let imageUrls = [
  "/images/drawing.webp",
  "/images/drawing3.jpg",
  "/images/drawing4.webp"
];

let currentImageIndex = 0;

function updateIamge(){
currentImageIndex++;

if(currentImageIndex >= imageUrls.length){
 currentImageIndex = 0;
}

 img.src = imageUrls[currentImageIndex];
}

setInterval(updateIamge, 4500);


















//  let count = 0;

//  function printCountAndIncrement(){
//   count++;
//   console.log(count);
//  }

//  setInterval(printCountAndIncrement, 1000);