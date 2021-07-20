import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import Loading from '../layout/Loading';

// Data
import dataCollection from '../../sampleData/dataCollection.json';

const Reports = ({ auth: { loading } }) => {

    const [selectedContinent, setSelectedContinent] = useState('');
    const [continents, setContinents] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [regions, setRegions] = useState([]);
    const [surfSpots, setSurfSpots] = useState([]);

    useEffect(() => {
        getContinents();

        if (sessionStorage.getItem('continent')) {
            setSelectedContinent(sessionStorage.getItem('continent'))
            getRegions(sessionStorage.getItem('continent'))
        }

        if (sessionStorage.getItem('region')) {
            setSelectedRegion(sessionStorage.getItem('region'))
            getSurfSpots(sessionStorage.getItem('region'))
        }
        
    }, []);

    // Get continents
    const getContinents = () => {
        let continentsList = [];
        dataCollection.forEach(item => {
            if (!continentsList.includes(item.continent)) {
                continentsList.push(item.continent);
                setContinents(continentsList);
            }
        });
    };
   
    // Get regions
    const getRegions  = continentParam => {
        let regionsList = [];
        dataCollection.forEach(item => {
            if (item.continent === continentParam && !regionsList.includes(item.region)) {
                regionsList.push(item.region);
                setRegions(regionsList.sort());
            }
        })
    };

    // Get surfSpots
    const getSurfSpots = (regionParam) => {
        let surfSpotList = [];
        dataCollection.forEach(item => {
            if (item.region === regionParam) {
                surfSpotList.push({name: item.name, surfSpotId: item.surfSpotId});
                setSurfSpots(surfSpotList);
            }
        })
    };

    function onClickContinent (e) {
        e.preventDefault();
        setRegions([]);
        setSurfSpots([]);
        setSelectedContinent(e.target.text);
        getRegions(e.target.text);
        sessionStorage.setItem('continent', e.target.text);
        sessionStorage.removeItem('region')
    };

    const onClickRegion = e => {
        e.preventDefault();
        setSurfSpots([]);
        setSelectedRegion(e.target.text);
        getSurfSpots(e.target.text);
        sessionStorage.setItem('region', e.target.text);
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