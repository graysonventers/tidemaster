import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DashboardNoSpots extends Component {
    render() {
        return (
            <div className="row" >
                <div className="col s6 offset-s3" style={{ paddingTop: '30vh' }}>
                    <div className="card cyan darken-3">
                        <div className="card-content white-text">
                            <span className="card-title">Your Top Spots</span>
                            <p>Add one or more of your favorite surf spots</p>
                        </div>
                        <section>
                            <div className="card-action">
                                <Link to="/reports"><i className="material-icons verticalAlign" >add</i><span>Add favorites</span></Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
};
