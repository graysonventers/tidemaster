import React from 'react';

const Swell = () => {
    const swellStyle = {
        marginLeft: '2%',
        marginRight: '2%'
    };

    return (
        <div>
            <div className="card cardOpacity">
                    <div className="card-content center flow-text">
                        <span>Swell Direction (ft)</span><br></br>
                        
                        <span>Primary Swell</span>
                        <div className="row section">
                            <span className="col s1" style={swellStyle}>2 wnw</span>
                            <span className="col s1" style={swellStyle}>2 wnw</span>
                            <span className="col s1" style={swellStyle}>2 wnw</span>
                            <span className="col s1" style={swellStyle}>2 wnw</span>
                            <span className="col s1" style={swellStyle}>2 wnw</span>
                            <span className="col s1" style={swellStyle}>2 wnw</span>
                            <span className="col s1" style={swellStyle}>2 wnw</span>
                            <span className="col s1" style={swellStyle}>2 wnw</span>
                        </div>
                        <span>Secondary Swell</span>
                        <div className="row section">
                            <span className="col s1" style={swellStyle}>2 w</span>
                            <span className="col s1" style={swellStyle}>2 w</span>
                            <span className="col s1" style={swellStyle}>2 w</span>
                            <span className="col s1" style={swellStyle}>2 w</span>
                            <span className="col s1" style={swellStyle}>2 w</span>
                            <span className="col s1" style={swellStyle}>2 w</span>
                            <span className="col s1" style={swellStyle}>2 w</span>
                            <span className="col s1" style={swellStyle}>2 w</span>
                        </div>
                        <div className="row">
                            <span className="col s1" style={swellStyle}>12am</span>
                            <span className="col s1" style={swellStyle}>3am</span>
                            <span className="col s1" style={swellStyle}>6am</span>
                            <span className="col s1" style={swellStyle}>9am</span>
                            <span className="col s1" style={swellStyle}>12pm</span>
                            <span className="col s1" style={swellStyle}>3pm</span>
                            <span className="col s1" style={swellStyle}>6pm</span>
                            <span className="col s1" style={swellStyle}>9pm</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Swell;
