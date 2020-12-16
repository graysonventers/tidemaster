import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

const Search = ({ backgroundPrimary }) => {
    return (
        <Fragment>
            <Navbar />
            <div style={backgroundPrimary}>
                <nav>
                    <div class="nav-wrapper">
                        <form>
                            <div class="input-field">
                            <input id="search" type="search" required></input>
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="container section center">
                    <div className="card" style={{ opacity: '80%' }}>
                        <div className="card-content">
                            <span className="card-title center">Search surf spots...</span><br></br>
                            <span>Actual results</span><br></br><br></br>
                            <span>Actual results</span><br></br><br></br>
                            <span>Actual results</span><br></br>
                            <span>Actual results</span>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <Footer />
        </Fragment>
    )
};

export default Search;