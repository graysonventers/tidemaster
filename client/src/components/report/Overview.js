import React, { Fragment } from 'react';
import { getWaveHeight, getWaveQuality, getFahrenheit } from '../../utilities/surfReportHelperFunctions';

const Overview = ({ surf: { surfSpot } }) => {

    const currentReport = surfSpot.reports[0];
    
    return (
        <Fragment>
            <div className="card cardOpacity">
                    <div className="card-content center flow-text">
                        <span>Overview</span>
                        <div className="row section">
                            <span className="col s3">Wave Height</span>
                            <span className="col s3">Rating</span>
                            <span className="col s3">Wind</span>
                            <span className="col s3">Air Temp</span>
                        </div>
                        <div className="row">
                            <span className="col s3">{getWaveHeight(currentReport)}ft</span>
                            <span className="col s3">{getWaveQuality(currentReport)}</span>
                            <span className="col s3">{currentReport.wind.speed + ' ' + currentReport.wind.unit}</span>
                            <span className="col s3">{getFahrenheit(currentReport.condition.weather) + ' ' + 'f°'}</span>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
};

export default Overview;
