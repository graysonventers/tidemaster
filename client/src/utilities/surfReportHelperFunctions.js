
// get wave height by spot and timestamp
export const getWaveHeight = (spot, timeStampIndex) => {
    const minHeight = spot.reports[0].swell.minBreakingHeight;
    const maxHeight = spot.reports[0].swell.maxBreakingHeight;
    return `${minHeight} - ${maxHeight}`;
};

// get wave quality by spot and timestamp
export const getWaveQuality = (spot, timeStampIndex) => {
    const fadedRating = spot.reports[0].fadedRating;
    const solidRating = spot.reports[0].solidRating;
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

