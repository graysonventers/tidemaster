import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';

import dataCollection from '../../sampleData/dataCollection.json'

const Search = () => {

    // set surfspot names to an array to use to search
    let surfSpotsList = [];
    dataCollection.forEach(item => surfSpotsList.push([item.name, item.surfSpotId]));

    const [surfSpots, setSurfSpots] = useState([]);

    const onChange = e => {
        
        const filtered = surfSpotsList.filter(spot => {
            return spot[0].toLowerCase().includes(e.target.value.toLowerCase())
        })

        setSurfSpots(e.target.value !== '' ? filtered : []);
    }

    return (
        <Fragment>
            <Navbar />
            <div className="backgroundPrimary">
                <nav>
                    <div className="nav-wrapper">
                        <form onSubmit={e => e.preventDefault()}>
                            <div className="input-field">
                            <input id="search" type="search" required placeholder="search for surfspots..." onChange={onChange} />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="container section center">
                    <div className="card" style={{ opacity: '80%' }}>
                        <div className="card-content">

                            <span className="card-title center">Search Results</span><br></br>
                            {surfSpots.map(item => <span key={item[1]}><Link to={`/reports/${item[1]}`}>{item[0]}</Link><br></br></span>)}
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
};

export default Search;