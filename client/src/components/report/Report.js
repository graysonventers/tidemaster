import React, { Fragment, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Overview from '../report/Overview';
import Waves from '../report/Waves';
import Swell from '../report/Swell';
import Wind from '../report/Wind';
import Loading from '../layout/Loading';
import { connect } from 'react-redux';
import { getSurfSpot } from '../../redux/actions/surfSpotActions';
import { Redirect } from 'react-router-dom';
import { addFavoriteSpot, deleteFavoriteSpot } from '../../redux/actions/authActions';

const Report = ({ auth: { user }, surf, surf: { surfSpot, loading }, match, getSurfSpot, addFavoriteSpot, deleteFavoriteSpot }) => {
    
    useEffect(() => {
        getSurfSpot(match.params.id);
    }, [getSurfSpot, match.params.id]);

    // eslint-disable-next-line
    if (!loading && surfSpot === null || !loading && surfSpot === undefined) return <Redirect to="/notfound" />

    return surf.loading ? (<Loading />) : (
        <Fragment>
            <Navbar />
            <div className="backgroundPrimary">
                <div className="row">
                    <div className="col s12 center">
                        <h4 className="reportHeader" >{surfSpot.name}</h4>
                        <h5 className="reportSubheader">{surfSpot.region}, {surfSpot.continent}</h5>
                        {(user !== null) && (user.favoriteSpots &&
                            user.favoriteSpots.includes(surfSpot.surfSpotId.toString()) ? 
                            (<button onClick={() => deleteFavoriteSpot(surfSpot.surfSpotId)} className="center btn btn-small cyan darken-3">Delete from Favorites</button>)
                             : (<button onClick={() => addFavoriteSpot(surfSpot.surfSpotId)} className="center btn btn-small cyan darken-3">Add to Favorites</button>))}
                    </div>
                </div>
                <div className="container">
                    
                    <Overview surf={surf}/>
                    <Waves surf={surf}/>
                    <Swell surf={surf}/>
                    <Wind surf={surf}/>
                    
                </div>
            </div>
            <Footer />
        </Fragment>
    )
};

const mapStateToProps = state => ({
    surf: state.surf,
    auth: state.auth
});

export default connect(mapStateToProps, { getSurfSpot, addFavoriteSpot, deleteFavoriteSpot })(Report);
