import React from 'react';

const Report = () => {
    const dayBtnStyle = { 
        margin: '5px',
        backgroundColor: '#00838f',
    };

    return (
        <div className="" style={{ backgroundColor: '#b2ebf2', minHeight: '84vh'}}>
           
           <div className="row">
                <div className="col s12 center">
                    <h4>Trails, Orange County, CA</h4>
                    <button className="center btn btn-small cyan darken-3">Add to Favorites</button>
                </div>
            </div>
            <div className="container">
                <button style={dayBtnStyle} className="btn">Mon 11/23</button>
                <button style={dayBtnStyle} className="btn">Tue 11/24</button>
                <button style={dayBtnStyle} className="btn">Wed 11/25</button>
                
            </div>

        </div>
    )
}

export default Report;
