import React, { useState } from 'react';

const ReportContinents = ({ setContinent }) => {
    const onClick = (e) => {
        e.preventDefault();
        setContinent(e.target.text);
        console.log(`button was clicked producing ${e.target.text}`);
    };

    return (
        <div>
            <ul>
                <li>
                    <a href="#!" onClick={(e) => onClick(e)}>Africa</a>
                </li>
                <li>
                    <a href="#!" onClick={(e) => onClick(e)}>Asia</a>
                </li>
                <li>
                    <a href="#!" onClick={(e) => onClick(e)}>Australia</a>
                </li>
                <li>
                    <a href="#!" onClick={(e) => onClick(e)}>Europe</a>
                </li>
                <li>
                    <a href="#!" onClick={(e) => onClick(e)}>North America</a>
                </li>
                <li>
                    <a href="#!" onClick={(e) => onClick(e)}>South America</a>
                </li>
            </ul>
        </div>
    )
};

export default ReportContinents;

                                    