import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';

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
                    surfSpots: ['Pipeline', 'Rocky Point']
                }
            }
        },
        {
            continent: 'Africa',
            regions: {
                'South Africa': {
                    surfSpots: [`Jeffrey's Bay`, 'Capetown']
                }, 
                'Namibia': {
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
        

    const onClickContinent = (e) => {
        e.preventDefault();
        setSelectedContinent(e.target.text);
        setSelectedRegion('');

        // console.log(newReportData[0].regions['Southern California'].surfSpots)
    };

    const onClickRegion = (e) => {
        e.preventDefault();
        setSelectedRegion(e.target.text);

        if (selectedContinent === '') {
            setSelectedRegion('');
        }
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
                                        <h6><a className="black-text" href="#!" onClick={(e) => onClickContinent(e)}>Continents</a></h6>
                                        {newReportData.map((item, index) => (
                                            <li key={index}>
                                                <a href="#!" onClick={(e) => onClickContinent(e)}>{item.continent}</a>
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
                                            
                                            {/* <h6>{newReportData[newReportData.indexOf(selectedContinent)].regions.selectedRegion.surfSpots}</h6> */}

                                            {newReportData.map(item => (
                                                
                                        
                                                // Object.keys(item.regions).map(region => (
                                                //     region === selectedRegion && (

                                                //         console.log(region),
                                                //         console.log(newReportData.region[surfSpots])
                                                //         // region.surfSpots.map((surfSpot, index) => (
                                                //         //     console.log(surfSpot)
                                                //         // ))
                                                //     )
                                                // ))
                                                
                                                
                                                Object.keys(item.regions).map(region => (
                                                    region === selectedRegion && (

                                                        item.regions[region].surfSpots.map((surfSpot, index) => (
                                                            <li key={index}>
                                                                <a href="#!">{surfSpot}</a>
                                                            </li>
                                                        ))
                                                    )
                                                ))

                                                // Object.keys(item.regions) === selectedRegion && (
                                                //     Object.keys(item.regions[selectedRegion]).map((surfSpot, index) => (
                                                //         console.log('Yello')
                                                //     ))
                                                // )
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

Reports.propTypes = {
    backgroundPrimary: PropTypes.object.isRequired
};

export default Reports;