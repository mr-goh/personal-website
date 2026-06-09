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
        '/images/refugeeIntegration/percentageSpend.png',
        '/images/refugeeIntegration/spendIncome.png',
        '/images/refugeeIntegration/spendHousing.png',
    ],
    'prev-ref', 'next-ref', 'image-ref'
);
