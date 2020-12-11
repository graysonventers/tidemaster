import React from 'react';
import Overview from '../reports/Overview';

const Report = () => {
    const dayBtnStyle = { 
        margin: '5px',
        backgroundColor: '#00838f',
    };

    const waveHeightStyle = {
        marginLeft: '2%',
        marginRight: '2%'
    }

    return (
        <div className="" style={{ backgroundColor: '#b2ebf2', minHeight: '84vh'}}>
           
           <div className="row">
                <div className="col s12 center">
                    <h4>Trails, Orange County, CA</h4>
                    <button className="center btn btn-small cyan darken-3">Add to Favorites</button>
                </div>
            </div>
            <div className="container">
                <div id="reportDayBtn">
                    <button style={dayBtnStyle} className="btn">Mon 11/23</button> 
                    <button style={dayBtnStyle} className="btn">Tue 11/24</button>
                    <button style={dayBtnStyle} className="btn">Wed 11/25</button>
                </div>
                <h5>Monday, 11/23/2020</h5>
                <Overview />
                {/* waveHeights detailed card */}
                <div className="card">
                    <div className="card-content">
                        <span>Wave Heights (ft)</span>
                        
                        <div className="row">
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
                
            </div>

           


        </div>
    )
}

export default Report;
