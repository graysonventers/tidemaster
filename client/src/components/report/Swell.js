import React from 'react';

const Swell = ({ surf }) => {
    const swellStyle = {
        marginLeft: '2%',
        marginRight: '2%',
    };

    const primarySwell = [];
    const primarySwellDirection = [];
    const secondarySwell = [];
    const secondarySwellDirection = [];

    for (let i = 0; i <= 7; i++) {
        // primary swell height
        primarySwell.push(<span key={surf.surfSpot.reports[i].localTimestamp} className="col s1" style={swellStyle}>{surf.surfSpot.reports[i].swell.components.primary.height}</span>);

        // primary swell direction
        primarySwellDirection.push(<span key={surf.surfSpot.reports[i].localTimestamp} className="col s1" style={swellStyle}>{surf.surfSpot.reports[i].swell.components.primary.compassDirection}</span>);

        // if secondary swell
        if (surf.surfSpot.reports[i].swell.components.secondary) {
            secondarySwell.push(<span key={surf.surfSpot.reports[i].localTimestamp} className="col s1" style={swellStyle}>{surf.surfSpot.reports[i].swell.components.secondary.height}</span>);
        } else {
            secondarySwell.push(<span key={i} className="col s1" style={swellStyle}>∙</span>)
        }
        

        // if secondary swell direction
        if (surf.surfSpot.reports[i].swell.components.secondary) {
            secondarySwellDirection.push(<span key={surf.surfSpot.reports[i].localTimestamp} className="col s1" style={swellStyle}>{surf.surfSpot.reports[i].swell.components.secondary.compassDirection}</span>);
        } else {
            secondarySwellDirection.push(<span key={i} className="col s1" style={swellStyle}>∙</span>);
        }
        
    }

    return (
        <div>
            <div className="card cardOpacity">
                    <div className="card-content center flow-text">
                        <span className="section">Swell Direction (ft)</span><br></br>
                        
                        <span>Primary Swell</span>
                        <div className="row">
                            
                            {primarySwell.map(item => item)}
                            
                        </div>
                        <div className="row">
                            {primarySwellDirection.map(item => item)}
                        </div>
                        <span>Secondary Swell</span>
                        <div className="row">

                            {secondarySwell.map(item => item)}
                            

                        </div>
                        <div className="row">
                        {secondarySwellDirection.map(item => item)}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Swell;
