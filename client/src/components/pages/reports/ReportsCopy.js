import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';

// Data

import dataCollection from '../../../sampleData/dataCollection.json';

const Reports = () => {
    useEffect(() => {
        getContinents();
    }, []);

    const [selectedContinent, setSelectedContinent] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [continents, setContinents] = useState([]);

    const newReportData =[];
    

    // Get continents
    const getContinents = () => {
        let continents = [];
        dataCollection.forEach(item => {
            if (!continents.includes(item.continent)) {
                continents.push(item.continent)
            } else {
                return;
            } 
        });
        return setContinents(continents); 
    };
    
    // Get regions
    const getRegions = () => {
        dataCollection.forEach(item => {

        });
    };

    // Get surfSpotNames

    const surfSpotNames = () => {

    };
        

    const onClickContinent = (e) => {
        e.preventDefault();
        setSelectedContinent(e.target.text);
        setSelectedRegion('');
    };

    const onClickRegion = (e) => {
        e.preventDefault();
        setSelectedRegion(e.target.text);
    };

    return (
        <Fragment>
            <Navbar />
            <div className="backgroundPrimary">
                <div className="container section">
                    <div className="card cardOpacity">
                        <div className="card-content">
                            <span className="card-title center">Reports</span><br></br>
                            <div className="row">
                                <div className="section col s4">
                                    <ul>
                                        <h6>Continents</h6>
                                        {continents.map((item, index) => (
                                            <li key={index}>
                                                <a href="#!" onClick={(e) => onClickContinent(e)}>{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {selectedContinent !== '' && (
                                    <div className="section col s4">
                                    <ul>
                                        <h6>Regions</h6>
                                        {newReportData.map((item) => (
                                            item.continent === selectedContinent && (
                                                Object.keys(item.regions).map((item, index) => (
                                                    <li key={index}>
                                                        <a href="#!" onClick={(e) => onClickRegion(e)}>{item}</a>
                                                    </li>
                                                ))
                                            )
                                        ))}
                                    </ul>
                                </div>)}
                                {selectedRegion !== '' && (
                                    <div className="section col s4">
                                        <ul>
                                            <h6>Surf Spots</h6>
                                            {newReportData.map(item => (
                                                Object.keys(item.regions).map(region => (
                                                    region === selectedRegion && (
                                                        item.regions[region].surfSpots.map((surfSpot, index) => (
                                                            <li key={index}>
                                                                <Link to="/report">{surfSpot}</Link>
                                                            </li>
                                                        ))
                                                    )
                                                ))
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <Footer />
        </Fragment>
    )
};

export default Reports;