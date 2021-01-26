const mongoose = require('mongoose');

const SurfSpotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    magicSeaweedSpotId: {
        type: Number,
        required: true
    },
    reports: [
        {
            timestamp: {
                type: Number,
                required: true
            },
            localTimestamp: {
                type: Number,
                required: true
            },
            issueTimeStamp: {
                type: Number,
                required: true
            },
            fadedRating: {
                type: Number
            },
            solidRating: {
                type: Number
            },
            swell: {
                minBreakingHeight: {
                    type: Number
                },
                maxBreakingHeight: {
                    type: Number
                },
                unit: {
                    type: String
                },
                primary: {
                    height: {
                        type: Number
                    },
                    period: {
                        type: Number
                    },
                    direction: {
                        type: Number
                    },
                    compassDirection: {
                        type: String
                    }
                },
                secondary: {
                    height: {
                        type: Number
                    },
                    period: {
                        type: Number
                    },
                    direction: {
                        type: Number
                    },
                    compassDirection: {
                        type: String
                    }
                }
            },
            wind: {
                speed: {
                    type: Number
                },
                direction: {
                    type: Number
                },
                compassDirection: {
                    type: String
                },
                unit: {
                    type: String
                }
            },
            airTemperature: {
                type: Number
            }
        }
    ]
});

module.exports = mongoose.model('SurfSpot', SurfSpotSchema);