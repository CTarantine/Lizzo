//homepage modal functions


let openModal = () => {
   //console.log(hello);
modal.style.display = 'block';
}
let closeModal = () => {
    //console.log(adios)
modal.style.display = 'none';
}

//slideshow
//all images from Google images
var pics=["/Images/lizzo-BET-awards.jpg",
"/Images/limeGreen.jpg",
"/Images/METgala.jpg",
"/Images/MTV.jpg",
"/Images/green.jpg",
"/Images/silver.jpg",
"/Images/BETII.jpg",
"/Images/BET.jpg",
"/Images/surprisedFace.jpg",
"/Images/sailorMoon.jpg",
"/Images/redOutfit.jpg"
]
var imagesLength = pics.length -1

var currentSlide = 0
let changePic = (x) => {
currentSlide += x

if(currentSlide > imagesLength){
currentSlide=0
}
if (currentSlide < 0){
currentSlide = imagesLength
}

document.getElementById("pic").src
 = pics[currentSlide]
}

//8 Ball
var answers = ["Yass queen", "You know it", "Without a doubt"]


let reveal = () => {
    console.log(answers[ Math.floor(Math.random() * 3)
    ])
    document.getElementById("eight").innerHTML=answers[ Math.floor(Math.random() * 3)]
}






