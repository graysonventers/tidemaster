import React, { Fragment } from 'react';
import { getWaveHeight } from '../../utilities/surfReportHelperFunctions';

const Waves = ({ surf }) => {
    const waveHeightStyle = {
        marginLeft: '2%',
        marginRight: '2%'
    };

    const timeStampIncrement = surf.surfSpot.reports;


    return (
        <Fragment>
            <div className="card cardOpacity">
                    <div className="card-content center flow-text">
                        <span>Wave Heights (ft)</span>
                        
                        <div className="row section">
                            <span className="col s1" style={waveHeightStyle}>{`${getWaveHeight(timeStampIncrement[0])}`}</span>
                            <span className="col s1" style={waveHeightStyle}>{`${getWaveHeight(timeStampIncrement[1])}`}</span>
                            <span className="col s1" style={waveHeightStyle}>{`${getWaveHeight(timeStampIncrement[2])}`}</span>
                            <span className="col s1" style={waveHeightStyle}>{`${getWaveHeight(timeStampIncrement[3])}`}</span>
                            <span className="col s1" style={waveHeightStyle}>{`${getWaveHeight(timeStampIncrement[4])}`}</span>
                            <span className="col s1" style={waveHeightStyle}>{`${getWaveHeight(timeStampIncrement[5])}`}</span>
                            <span className="col s1" style={waveHeightStyle}>{`${getWaveHeight(timeStampIncrement[6])}`}</span>
                            <span className="col s1" style={waveHeightStyle}>{`${getWaveHeight(timeStampIncrement[7])}`}</span>
                        </div>
                        <div className="row">
                            <span className="col s1" style={waveHeightStyle}>12am</span>
                            <span className="col s1" style={waveHeightStyle}>3am</span>
                            <span className="col s1" style={waveHeightStyle}>6am</span>
                            <span className="col s1" style={waveHeightStyle}>9am</span>
                            <span className="col s1" style={waveHeightStyle}>12pm</span>
                            <span className="col s1" style={waveHeightStyle}>3pm</span>
                            <span className="col s1" style={waveHeightStyle}>6pm</span>
                            <span className="col s1" style={waveHeightStyle}>9pm</span>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
};

export default Waves
