import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSurfSpots } from '../../redux/actions/surfSpotActions';
import { deleteFavoriteSpot } from '../../redux/actions/authActions';


class DashboardSpots extends Component {

    componentDidMount() {
        this.props.getSurfSpots();
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.auth.user.favoriteSpots !== this.props.auth.user.favoriteSpots) {
            this.props.getSurfSpots();
        }
    };

    deleteFavoriteSpotClick = e => {
        e.preventDefault();
        this.props.deleteFavoriteSpot(e.currentTarget.id);
    };

    getWaveHeight = (spot) => {
        const minHeight = spot.reports[0].swell.minBreakingHeight;
        const maxHeight = spot.reports[0].swell.maxBreakingHeight;
        return `${minHeight} - ${maxHeight}`;
    };

    getWaveQuality = (spot) => {
        const fadedRating = spot.reports[0].fadedRating;
        const solidRating = spot.reports[0].solidRating;
        const averageRating = fadedRating + solidRating / 2;
       
        switch (true) {
            case (averageRating >= 4):
                return 'Good';
            case (averageRating >= 3 && averageRating < 4):
                return 'Fair';
            case (averageRating >= 2 && averageRating < 3):
                return 'Poor to Fair';
            case (averageRating < 2):
                return 'Poor';
            default:
                return 'Hoping for good!';
        }
    };

    render() {
        return (<Fragment>
            {this.props.surf.surfSpots.map((spot, index) => {
                return <div key={index} className="row section">
                    <div className="col s10 offset-s1">
                        <Link to={`/reports/${spot.surfSpotId}`}>
                            <div className="card hoverable horizontal cardOpacity dashboardCard valign-wrapper">
                                <div className="col s3">
                                    <h5 className="flow-text">{spot.name}</h5>
                                </div>
                                <div className="col s3">
                                    <h6 className="">{this.getWaveHeight(spot)} ft</h6>
                                </div>
                                <div className="col s3">
                                    <h6>{this.getWaveQuality(spot)}</h6>
                                </div>
                                <div className="col s3">
                                    <button 
                                        id={spot.surfSpotId} 
                                        onClick={e => this.deleteFavoriteSpotClick(e)} 
                                        className="deleteButton right">
                                            <i className="material-icons small verticalAlign">clear</i>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>    
            })}
        </Fragment>)
    }
};

DashboardSpots.propTypes = {
    auth: PropTypes.object.isRequired,
    surf: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    surf: state.surf
});

export default connect(mapStateToProps, {getSurfSpots, deleteFavoriteSpot})(DashboardSpots);
