import React from 'react';

const Wind = () => {
    const windStyle = {
        marginLeft: '2%',
        marginRight: '2%'
    };

    return (
        <div>
            <div className="card cardOpacity" >
                    <div className="card-content center flow-text" >
                        <span>Wind (mph)</span>
                        <div className="row section">
                            <span className="col s1" style={windStyle}>2</span>
                            <span className="col s1" style={windStyle}>2</span>
                            <span className="col s1" style={windStyle}>2</span>
                            <span className="col s1" style={windStyle}>4</span>
                            <span className="col s1" style={windStyle}>8</span>
                            <span className="col s1" style={windStyle}>12</span>
                            <span className="col s1" style={windStyle}>10</span>
                            <span className="col s1" style={windStyle}>5</span>
                        </div>
                        <div className="row">
                            <span className="col s1" style={windStyle}>12am</span>
                            <span className="col s1" style={windStyle}>3am</span>
                            <span className="col s1" style={windStyle}>6am</span>
                            <span className="col s1" style={windStyle}>9am</span>
                            <span className="col s1" style={windStyle}>12pm</span>
                            <span className="col s1" style={windStyle}>3pm</span>
                            <span className="col s1" style={windStyle}>6pm</span>
                            <span className="col s1" style={windStyle}>9pm</span>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Wind;
