import React from 'react';

const Wind = ({ surf }) => {
    const windStyle = {
        marginLeft: '2%',
        marginRight: '2%'
    };

        let windsArr = [];
        for (let i = 0; i <= 7; i++) {
            windsArr.push(<span className="col s1" style={windStyle}>{surf.surfSpot.reports[i].wind.speed}</span>);
        }

    return (
        <div>
            <div className="card cardOpacity" >
                    <div className="card-content center flow-text" >
                        <span>Wind (mph)</span>
                        <div className="row section">
                            {windsArr.map(item => item)}
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
