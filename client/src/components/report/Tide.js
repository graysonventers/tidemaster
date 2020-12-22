import React from 'react';

const Tide = ({ cardStyle }) => {
    return (
        <div>
            <div className="card" style={cardStyle}>
                <div className="card-title center">Tides (ft)</div>
                <div className="card-content">
                    <table className="striped centered">
                        <tbody className="">
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
