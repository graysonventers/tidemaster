import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import Loading from '../../layout/Loading';
import { getSurfSpot } from '../../../redux/actions/surfSpotActions';

// Data
import dataCollection from '../../../sampleData/dataCollection.json';

const Reports = ({ auth: { loading }, surfSpot: { surfSpot }, getSurfSpot }) => {

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
                setContinents(continentsList);
            }
        });
    };
   
    // Get regions
    const getRegions = () => {
        let regionsList = [];
        dataCollection.forEach(item => {
            if (item.continent === selectedContinent) {
                regionsList.push(item.region);
                setRegions(regionsList);
            }
        })
    };

    // Get surfSpots
    const getSurfSpots = () => {
        let surfSpotList = [];
        dataCollection.forEach(item => {
            if (item.region === selectedRegion) {
                surfSpotList.push(item.name);
                setSurfSpots(surfSpotList);
            }
        })
    };
        

    const onClickContinent = e => {
        e.preventDefault();
        setSelectedContinent(e.target.text);
        setRegions([]);
        setSurfSpots([]);
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
                                                <a href="#!" onClick={(e) => onClickContinent(e)}>{item}</a>
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
                                                    <Link onClick={getSurfSpot} to="/report">{item}</Link>
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

export default connect(mapStateToProps, {getSurfSpot})(Reports);