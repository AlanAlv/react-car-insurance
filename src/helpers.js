// Gets year difference
export function getYearDifference (year){
    return new Date().getFullYear() - year;
}

// Calculates total cost by brand
export function calculateBrand(brand){
    let increment;

    switch (brand) {
        case 'european':
            increment = 1.30;
            break;
        case 'american':
            increment = 1.15;
            break;
        case 'asian':
            increment = 1.05;
            break;         
        default:
            break;
    }

    return increment;
}

// Calculates insurance plan
export function getPlan(plan){
    return (plan === 'basic') ? 1.2 : 1.5;
}