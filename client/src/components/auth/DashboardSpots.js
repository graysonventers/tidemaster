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
        this.props.deleteFavoriteSpot(parseInt(e.currentTarget.id));
    };

    render() {
        return (<Fragment>
            {this.props.surf.surfSpots.map((spot, index) => {
                
                return <div key={index} className="container" style={{ paddingTop: '5%' }}>
                <Link to={`/reports/${spot.surfSpotId}`}>
                    <div className="card hoverable black-text center cardOpacity" style={{ height: '80px' }}>

                        <div className="row card-content" style={{ height: '100%' }}>
                            <div id="surfSpotName" style={{ marginTop: '14px', fontSize: '35px' }} className="col s3">{spot.name}</div>
                            <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s3">3-4 ft</div>
                            <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s4">Fair to Good</div>
                            
                            <div style={{ marginTop: '25px' }} className="col s1 offset-s1">
                                <button id={spot.surfSpotId} onClick={e => this.deleteFavoriteSpotClick(e)} style={{ color: '#ee6e73', background: 'none', border: 'none' }}>
                                    <i className="material-icons small">clear</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            })}
        </Fragment>
        )
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
