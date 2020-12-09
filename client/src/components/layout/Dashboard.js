import React from 'react';
import img from '../../images/pexels-george-keating-948331.jpg'

const Dashboard = () => {
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '84vh' }}>

            {/* if user DOESN'T have favorite spots */}
            
            <div className="row" style={{ paddingTop: '30vh' }}>
                    <div className="col s6 offset-s3 center">
                        <div className="card cyan darken-3">
                            <div className="card-content white-text">
                                <span className="card-title">Your Surf Spots</span>
                                <p>Once you add one or more favorite surf spots they will be listed here. Get started!</p>
                            </div>
                            <section>
                            <div className="card-action">
                                <a href="#reports"><i className="material-icons" style={{ verticalAlign: 'middle' }}>add</i><span style={{ verticalAlign: 'middle' }}>Add favorites</span></a>
                            </div>
                            </section>
                            
                        </div>
                        
                    </div>
                </div>
            
            
            
            
            
                
            {/* if user DOES have favorite spots */}


            
        </div>
    )
};

export default Dashboard;
