import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import ReportContinents from './ReportContinents';
import Report from '../../reports/Report';
import ReportNoReports from './ReportNoReports';

const Reports = ({ backgroundPrimary }) => {

    // // establish dataModel
    // const reportDataModel = [
    //     {
    //         continent: '',
    //         regions: {
    //              surfSpots: []
    //         }
    //     }
    // ];

    const newReportData = [
        {
            continent: 'North America',
            regions: {
                'Southern California': {
                    surfSpots: ['Trails', 'Trestles']
                },
                'Hawaii': {
                    surfSpots: ['Pipeline', 'Rocky  Point']
                }
            }
        },
        {
            continent: 'Africa',
            regions: {
                'South Africa': {
                    surfSpots: [`Jeffrey's Bay`, 'Capetown']
                }, 
                'Namimbia': {
                    surfSpots: ['Skeleton Bay']
                }
            }
        },
        {
            continent: 'Australia',
            regions: {
                'Gold Coast': {
                    surfSpots: [`Margaret River`, 'Snapper Rocks']
                }, 
                'Western Australia': {
                    surfSpots: ['Skeleton Bay']
                }
            }
        },
        {
            continent: 'Europe',
            regions: {
                'Northwest Europe': {
                    surfSpots: ['Newquay Fistral North']
                }
            }
        }
    ];

    const [selectedContinent, setSelectedContinent] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
        

    const onClick = (e) => {
        e.preventDefault();
        setSelectedContinent(e.target.text);

        if (selectedContinent === '') {
            setSelectedRegion('');
        }

    

        console.log(`button was clicked producing ${e.target.text}`);
    };

    const setRegions = (array, comparedItem) => {
        
    };


    return (
        <Fragment>
            <Navbar />
            <div style={backgroundPrimary}>
                <div className="container section">
                    <div className="card" style={{ opacity: '80%' }}>
                        <div className="card-content">
                            <span className="card-title center">Reports</span><br></br>
                            <div className="row">
                                <div className="section col s4">
                                    <ul>
                                        <h6><a className="black-text" href="#!" onClick={() => setSelectedContinent('')}>Continents</a></h6>
                                        {newReportData.map((item, index) => (
                                            <li key={index}>
                                                <a href="#!" onClick={(e) => onClick(e)}>{item.continent}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {selectedContinent !== '' && (
                                    <div className="section col s4">
                                    <ul>
                                        <h6>Regions</h6>
                                        {
                                            newReportData.map((item) => (
                                                item.continent === selectedContinent && (
                                                    Object.keys(item.regions).map((item, index) => (
                                                        <li key={index}>
                                                            <a href="#!">{item}</a>
                                                        </li>
                                                    ))
                                                )
                                            ))
                                        }
                                        
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

Reports.propTypes = {
    backgroundPrimary: PropTypes.object.isRequired
};

export default Reports;