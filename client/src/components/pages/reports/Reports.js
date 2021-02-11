import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import Loading from '../../layout/Loading';

// Data
import dataCollection from '../../../sampleData/dataCollection.json';

const Reports = ({ auth: { loading } }) => {

    const [selectedContinent, setSelectedContinent] = useState('');
    const [continents, setContinents] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [regions, setRegions] = useState([]);
    const [surfSpots, setSurfSpots] = useState([]);

    useEffect(() => {
        getContinents();
    }, []);

    // Get continents
    const getContinents = () => {
        let continentsList = [];
        dataCollection.forEach(item => {
            if (!continentsList.includes(item.continent)) {
                continentsList.push(item.continent);
                setContinents(continentsList.sort());
            }
        });
    };
   
    // Get regions
    const getRegions = () => {
        let regionsList = [];
        dataCollection.forEach(item => {
            if (item.continent === selectedContinent && !regionsList.includes(item.region)) {
                regionsList.push(item.region);
                setRegions(regionsList.sort());
            }
        })
    };

    // Get surfSpots
    const getSurfSpots = () => {
        let surfSpotList = [];
        dataCollection.forEach(item => {
            if (item.region === selectedRegion) {
                surfSpotList.push({name: item.name, surfSpotId: item.surfSpotId});
                setSurfSpots(surfSpotList);
            }
        })
    };

    const onClickContinent = e => {
        // prevent navigation to link
        e.preventDefault();
        // set state to continent clicked
        setSelectedContinent(e.target.text);
        // set regions state to empty array to clear out unwanted list in DOM
        setRegions([]);
        // set surfSpots state to empty array to clear out unwanted list in DOM
        setSurfSpots([]);
        // call getRegions function that checks if selectedContinent exists, if so, sets regions to state
        getRegions();
    };

    const onClickRegion = e => {
        e.preventDefault();
        setSelectedRegion(e.target.text);
        setSurfSpots([]);
        getSurfSpots();
    };

    return loading ? <Loading /> :
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
                                        <h6>Continents / Islands</h6>
                                        {continents.map((item, index) => (
                                            <li key={index}>
                                                <a href="#!" className="reportsBtn" onClick={(e) => onClickContinent(e)}>{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {selectedContinent && (
                                <div className="section col s4">
                                    <ul>
                                        <h6>Regions</h6>
                                        {regions.map((item, index) => (
                                            <li key={index}>
                                                <a href="#!" onClick={(e) => onClickRegion(e)}>{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>)}
                                {selectedRegion && (
                                    <div className="section col s4">
                                        <ul>
                                            <h6>Surf Spots</h6>
                                            {surfSpots.map((item, index) => (
                                                <li key={index}>
                                                        <Link to={`/reports/${item.surfSpotId}`} 
                                                            id={item.surfSpotId}>
                                                                {item.name}</Link>
                                                </li>           
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
};

const mapStateToProps = state => ({
    auth: state.auth,
    surfSpot: state.surfSpot
});

export default connect(mapStateToProps)(Reports);