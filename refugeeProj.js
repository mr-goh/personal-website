// Refugee chart carousel

const imagesRef = ["images/refugeeIntegration/percentageSpend.png", "images/refugeeIntegration/spendIncome.png", "images/refugeeIntegration/spendHousing.png"];
indexRef = 0;

const prevRef = document.getElementById("prev-ref");
const nextRef = document.getElementById("next-ref");

prevRef.addEventListener("click", () => {
    if (indexRef > 0) {
        indexRef -=1;
        document.getElementById("image-ref").src = imagesRef[indexRef];
    }
});

nextRef.addEventListener("click", () => {
    if (indexRef < 2) {
        indexRef +=1;
        document.getElementById("image-ref").src = imagesRef[indexRef];
    }
});