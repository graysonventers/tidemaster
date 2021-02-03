import React from 'react';

const Tide = () => {
    return (
        <div>
            <div className="card cardOpacity" >
            <div className="card-content center valign-content flow-text">
                <span>Tides</span>
                
                    <table className="striped centered">
                        <tbody >
                            <tr>
                                <td>High</td>
                                <td>5:17am</td>
                                <td>4.5 ft</td>
                            </tr>
                            <tr>
                                <td>Low</td>
                                <td>11:17am</td>
                                <td>2.1 ft</td>
                            </tr>
                            <tr>
                                <td>High</td>
                                <td>4:34pm</td>
                                <td>3.9 ft</td>
                            </tr>
                            <tr>
                                <td>Low</td>
                                <td>10:34pm</td>
                                <td>0.6 ft</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Tide;
