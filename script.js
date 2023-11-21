// Ideation carousel

const images = ['/images/groceryTransport/robustWheels.jpeg', '/images/groceryTransport/compartmentBag.jpeg', '/images/groceryTransport/fabricCart.jpeg', '/images/groceryTransport/collapsibleCart.jpeg'];
let currentIndex = 0;

const prevBtn = document.getElementById("arrow-prev");
const nextBtn = document.getElementById("arrow-next");

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        document.getElementById('carousel-image').src = images[currentIndex];
    }
});

nextBtn.addEventListener("click", () => {
    if (currentIndex < 3) {
        currentIndex +=1;
        document.getElementById('carousel-image').src = images[currentIndex];
    }
    
});


// Prototype 2 carousel

const imagesP2 = ['images/groceryTransport/prototype2.png', "images/groceryTransport/prototype2Fold.png"];
let indexP2 = 0;

const prevP2 = document.getElementById("prev-p2");
const nextP2 = document.getElementById("next-p2");

prevP2.addEventListener("click", () => {
    if (indexP2 > 0) {
        indexP2 -=1;
        document.getElementById("image-p2").src = imagesP2[indexP2];
    }
});

nextP2.addEventListener("click", () => {
    if (indexP2 < 1) {
        indexP2 +=1;
        document.getElementById("image-p2").src = imagesP2[indexP2];
    }
});

// Final design carousel

const imagesFinal =["images/groceryTransport/finalCart.png", "images/groceryTransport/finalCartFold.png", "images/groceryTransport/finalCartRatio.png"];
indexFinal = 0;

const prevFinal = document.getElementById("prev-final");
const nextFinal = document.getElementById("next-final");

prevFinal.addEventListener("click", () => {
    if (indexFinal > 0) {
        indexFinal -=1;
        document.getElementById("image-final").src = imagesFinal[indexFinal];
    }
});

nextFinal.addEventListener("click", () => {
    if (indexFinal < 2) {
        indexFinal +=1;
        document.getElementById("image-final").src = imagesFinal[indexFinal];
    }
});

