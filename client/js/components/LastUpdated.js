import React, { PropTypes } from 'react';

const propTypes = {
    lastUpdated: PropTypes.number,
};

const LastUpdated = ({ lastUpdated }) => {
    return (
    <div className='last-updated__time'>
        <p>
            Last updated at { new Date(lastUpdated).toLocaleTimeString() }
        </p>
    </div>
)};

export default LastUpdated;
