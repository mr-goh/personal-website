import { createCarousel } from './carousel.js';
import percentageSpend from './images/refugeeIntegration/percentageSpend.png';
import spendIncome from './images/refugeeIntegration/spendIncome.png';
import spendHousing from './images/refugeeIntegration/spendHousing.png';

createCarousel(
    [
        { src: percentageSpend, alt: 'Chart showing percentage of spending by category' },
        { src: spendIncome, alt: 'Chart showing spending by income' },
        { src: spendHousing, alt: 'Chart showing spending by housing type' },
    ],
    'prev-ref', 'next-ref', 'image-ref'
);
