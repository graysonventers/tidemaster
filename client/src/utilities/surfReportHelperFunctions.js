
// get wave height by spot
export const getWaveHeight = (spot) => {
    const minHeight = spot.swell.minBreakingHeight;
    const maxHeight = spot.swell.maxBreakingHeight;
    return `${minHeight} - ${maxHeight}`;
};

// get wave quality by spot
export const getWaveQuality = (spot) => {
    const fadedRating = spot.fadedRating;
    const solidRating = spot.solidRating;
    const averageRating = fadedRating + solidRating / 2;
   
    switch (true) {
        case (averageRating >= 4):
            return 'Good';
        case (averageRating >= 3 && averageRating < 4):
            return 'Fair';
        case (averageRating >= 2 && averageRating < 3):
            return 'Poor to Fair';
        case (averageRating < 2):
            return 'Poor';
        default:
            return 'Hoping for good!';
    }
};

// celcius to fahrenheit
export const getFahrenheit = temp => {
    return (temp * 9/5) + 32;
}

