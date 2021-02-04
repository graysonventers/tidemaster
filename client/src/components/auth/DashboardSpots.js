import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class DashboardSpots extends Component {
    
    deleteFavoriteSpot = e => {
        e.preventDefault();

        // call deleteFavorites action


        console.log(e.currentTarget.id);
        // console.log('favoriteSpot deleted');

        // console.log(this.props.auth.user.favoriteSpots);
        
        // THIS SHOULD ALL BE DONE IN ACTION
        // Delete surfSpot from user's favorites
        // const index = this.props.auth.user.favoriteSpots.indexOf(e.target.id);
        // this.props.auth.user.favoriteSpots.splice(index, 1);

        // // update database with delete favoriteSpots action
        // return this.props.auth.user.favoriteSpots;
    };

    render() {
        return (<Fragment>
            {this.props.spots.map((spot, index) => {
                
                return <div key={index} className="container" style={{ paddingTop: '5%' }}>
                <Link to="/reports/:id">
                    <div className="card hoverable black-text center cardOpacity" style={{ height: '80px' }}>
                        
                        <div className="row card-content" style={{ height: '100%' }}>
                            <div id="surfSpotName" style={{ marginTop: '14px', fontSize: '35px' }} className="col s3">{spot}</div>
                            <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s3">3-4 ft</div>
                            <div style={{ marginTop: '25px', fontSize: '20px' }} className="col s4">Fair to Good</div>
                            
                            <div style={{ marginTop: '25px' }} className="col s1 offset-s1">
                                <button id="deleteButton" onClick={e => this.deleteFavoriteSpot(e)} style={{ color: '#ee6e73', background: 'none', border: 'none' }}>
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
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(DashboardSpots);
