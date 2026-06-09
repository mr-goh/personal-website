function createCarousel(images, prevId, nextId, imgId) {
    let index = 0;
    const img = document.getElementById(imgId);

    document.getElementById(prevId).addEventListener("click", () => {
        if (index > 0) {
            img.src = images[--index];
        }
    });

    document.getElementById(nextId).addEventListener("click", () => {
        if (index < images.length - 1) {
            img.src = images[++index];
        }
    });
}

createCarousel(
    [
        '/images/groceryTransport/robustWheels.jpeg',
        '/images/groceryTransport/compartmentBag.jpeg',
        '/images/groceryTransport/fabricCart.jpeg',
        '/images/groceryTransport/collapsibleCart.jpeg',
    ],
    'arrow-prev', 'arrow-next', 'carousel-image'
);

createCarousel(
    [
        '/images/groceryTransport/prototype2.png',
        '/images/groceryTransport/prototype2Fold.png',
    ],
    'prev-p2', 'next-p2', 'image-p2'
);

createCarousel(
    [
        '/images/groceryTransport/finalCart.png',
        '/images/groceryTransport/finalCartFold.png',
        '/images/groceryTransport/finalCartRatio.png',
    ],
    'prev-final', 'next-final', 'image-final'
);
