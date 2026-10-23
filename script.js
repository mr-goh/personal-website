import { createCarousel } from './carousel.js';
import robustWheels from './images/groceryTransport/robustWheels.jpeg';
import compartmentBag from './images/groceryTransport/compartmentBag.jpeg';
import fabricCart from './images/groceryTransport/fabricCart.jpeg';
import collapsibleCart from './images/groceryTransport/collapsibleCart.jpeg';
import prototype2 from './images/groceryTransport/prototype2.png';
import prototype2Fold from './images/groceryTransport/prototype2Fold.png';
import finalCart from './images/groceryTransport/finalCart.png';
import finalCartFold from './images/groceryTransport/finalCartFold.png';
import finalCartRatio from './images/groceryTransport/finalCartRatio.png';

createCarousel(
    [
        { src: robustWheels, alt: 'Ideation concept: robust wheels' },
        { src: compartmentBag, alt: 'Ideation concept: compartment bag' },
        { src: fabricCart, alt: 'Ideation concept: fabric cart' },
        { src: collapsibleCart, alt: 'Ideation concept: collapsible cart' },
    ],
    'arrow-prev', 'arrow-next', 'carousel-image'
);

createCarousel(
    [
        { src: prototype2, alt: 'Second prototype design' },
        { src: prototype2Fold, alt: 'Second prototype folded for storage' },
    ],
    'prev-p2', 'next-p2', 'image-p2'
);

createCarousel(
    [
        { src: finalCart, alt: 'Final cart design' },
        { src: finalCartFold, alt: 'Final cart folded for storage' },
        { src: finalCartRatio, alt: 'Final cart dimensions and proportions' },
    ],
    'prev-final', 'next-final', 'image-final'
);
