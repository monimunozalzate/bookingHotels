// Takes the StarRating number that comes from the json and turns it into a string of star icons
export function createStarRatingString(star) {
    let singleStar = "★";
    let newStarRatingString = "";
    if (star === "") {
        newStarRatingString += singleStar;
    } else {
        for (let i = 0; i <= star - 1; i++) {
            newStarRatingString += singleStar;
        }
    }
    return newStarRatingString;
}

export function transformNumberRatingToTextEquivalent(number) {
    switch (number) {
        case 1:
        case 2:
        case 3:
            return "Malo"
            break;
        case 4:
            return "Aceptable"
            break;
        case 5:
        case 6:
            return "Bueno"
            break;
        case 7:
        case 8:
            return "Muy bueno"
            break;
        case 9:
        case 10:
            return "Excelente"
            break;
        default:
            break;
    }
}