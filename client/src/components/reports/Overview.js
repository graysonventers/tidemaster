import React, { Fragment } from 'react';

const Overview = () => {
    return (
        <Fragment>
            <div className="card">
                    <div className="card-content center">
                        <div className="row">
                            <span className="col s2">Wave Height</span>
                            <span className="col s3">Rating</span>
                            <span className="col s2">Tide</span>
                            <span className="col s3">Wind</span>
                            <span className="col s2">Water Temp</span>
                        </div>
                        <div className="row">
                            <span className="col s2">3-4ft</span>
                            <span className="col s3">star star</span>
                            <span className="col s2">4.1 ft</span>
                            <span className="col s3">5 mph</span>
                            <span className="col s2">68*</span>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default Overview;
