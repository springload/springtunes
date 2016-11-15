import React, { PropTypes } from 'react';

const propTypes = {
    lastUpdated: PropTypes.number,
};

const LastUpdated = ({ lastUpdated }) => (
    <div className='last-updated__time'>
        <p>
            Last updated at { new Date(lastUpdated).toLocaleTimeString() }
        </p>
    </div>
);

LastUpdated.propTypes = propTypes;

export default LastUpdated;
