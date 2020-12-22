import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Overview from '../report/Overview';
import Waves from '../report/Waves';
import Swell from '../report/Swell';
import Wind from '../report/Wind';
import Tide from '../report/Tide';

const Report = ({ backgroundPrimary }) => {
    const dayBtnStyle = { 
        margin: '5px',
        backgroundColor: '#00838f',
    };

    const cardStye = {
        opacity: '80%'
    };

    // backgroundColor: '#b2ebf2', minHeight: '160vh'

    return (
        <Fragment>
            <Navbar />
            <div style={backgroundPrimary} >
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
                    <Overview cardStyle={cardStye} />
                    <Waves cardStyle={cardStye}/>
                    <Swell cardStyle={cardStye}/>
                    <Wind cardStyle={cardStye}/>
                    <Tide cardStyle={cardStye}/>
                    
                </div>
            </div>
            <Footer />
        </Fragment>
    )
};

export default Report;
