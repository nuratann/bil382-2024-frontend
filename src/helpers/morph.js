export function morph(number) {
    const forms = ['отзыв', 'отзыва', 'отзывов'];
    const mod100 = number % 100;
    const mod10 = number % 10;

    if (mod100 > 4 && mod100 < 20) {
        return forms[2];
    } else {
        switch (mod10) {
            case 1:
                return forms[0];
            case 2:
            case 3:
            case 4:
                return forms[1];
            default:
                return forms[2];
        }
    }
}