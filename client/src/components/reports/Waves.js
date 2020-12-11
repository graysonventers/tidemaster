import React, { Fragment } from 'react'

const Waves = () => {
    const waveHeightStyle = {
        marginLeft: '2%',
        marginRight: '2%'
    };

    return (
        <Fragment>
            <div className="card">
                    <div className="card-content center">
                        <span>Wave Heights (ft)</span>
                        
                        <div className="row section">
                            <span className="col s1" style={waveHeightStyle}>2-3</span>
                            <span className="col s1" style={waveHeightStyle}>2-3</span>
                            <span className="col s1" style={waveHeightStyle}>2-3</span>
                            <span className="col s1" style={waveHeightStyle}>2-3</span>
                            <span className="col s1" style={waveHeightStyle}>2-3</span>
                            <span className="col s1" style={waveHeightStyle}>2-3</span>
                            <span className="col s1" style={waveHeightStyle}>2-3</span>
                            <span className="col s1" style={waveHeightStyle}>2-3</span>
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
}

export default Waves
