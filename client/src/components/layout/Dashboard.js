import React from 'react';
import img from '../../images/pexels-george-keating-948331.jpg'

const Dashboard = () => {
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '84vh' }}>

            {/* if user DOESN'T have favorite spots */}
            
            {/* <div className="row" style={{ paddingTop: '30vh' }}>
                    <div className="col s6 offset-s3 center">
                        <div className="card cyan darken-3">
                            <div className="card-content white-text">
                                <span className="card-title">Your Top Spots</span>
                                <p>Add one or more of your favorite surf spots</p>
                            </div>
                            <section>
                            <div className="card-action">
                                <a href="#reports"><i className="material-icons" style={{ verticalAlign: 'middle' }}>add</i><span style={{ verticalAlign: 'middle' }}>Add favorites</span></a>
                            </div>
                            </section>
                        </div>
                    </div>
                </div> */}
                
            {/* if user DOES have favorite spots */}
            <div className="container" style={{ paddingTop: '10px' }}>
                <a href="#surfspot">
                    <div className="card black-text center valign-wrapper" style={{ opacity: '80%' }}>
                        <div className="container">
                        <div className="row">
                                <div className="col s3"><h5>Trails</h5></div>
                                <div className="col s3">3-4ft</div>
                                <div className="col s3">Fair to Good</div>
                                <div className="col s3">
                                    <button>
                                        <i className="material-icons tiny">clear</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </a>
                
                <div className="card horizontal">
                    <div className="card-content">
                        <h5>Staircase</h5>
                    </div>
                </div>
                <div className="card horizontal">
                    <div className="card-content">
                        <h5>Shitpipe</h5>
                        
                    </div>
                </div>
                <div className="card horizontal">
                    <div className="card-content">
                        <h5>El Porto</h5>
                    </div>
                </div>
            </div>
            
                
                
            
            


            
        </div>
    )
};

export default Dashboard;
