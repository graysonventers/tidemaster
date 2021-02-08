import React, { Fragment, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Overview from '../report/Overview';
import Waves from '../report/Waves';
import Swell from '../report/Swell';
import Wind from '../report/Wind';
import Tide from '../report/Tide';
import Loading from '../layout/Loading';
import { connect } from 'react-redux';
import { getSurfSpot } from '../../redux/actions/surfSpotActions';

const Report = ({ surf, surf: { surfSpot }, match, getSurfSpot }) => {
    
    useEffect(() => {
        getSurfSpot(match.params.id);
    }, [getSurfSpot, match.params.id]);

    const dayBtnStyle = { 
        margin: '5px',
        backgroundColor: '#00838f'
    };

    return surf.loading ? (<Loading />) : (
        <Fragment>
            <Navbar />
            <div className="backgroundPrimary">
                <div className="row">
                    <div className="col s12 center">
                        <h4>{surfSpot.name}</h4>
                        <h5>{surfSpot.region}, {surfSpot.continent}</h5>
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
                    <Overview surf={surf}/>
                    <Waves surf={surf}/>
                    <Swell surf={surf}/>
                    <Wind surf={surf}/>
                    <Tide surf={surf}/>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
};

const mapStateToProps = state => ({
    surf: state.surf
});

export default connect(mapStateToProps, { getSurfSpot })(Report);
