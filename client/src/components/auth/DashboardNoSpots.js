import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DashboardNoSpots extends Component {
    render() {
        return (
            <div className="row" style={{ paddingTop: '30vh' }}>
                <div className="col s6 offset-s3 center">
                    <div className="card cyan darken-3">
                        <div className="card-content white-text">
                            <span className="card-title">Your Top Spots</span>
                            <p>Add one or more of your favorite surf spots</p>
                        </div>
                        <section>
                        <div className="card-action">
                            <Link to="/reports"><i className="material-icons" style={{ verticalAlign: 'middle' }}>add</i><span style={{ verticalAlign: 'middle' }}>Add favorites</span></Link>
                        </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
};
