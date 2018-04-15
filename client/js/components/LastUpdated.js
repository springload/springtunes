import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    lastUpdated: PropTypes.number.isRequired,
};

const LastUpdated = ({ lastUpdated }) => (
    <div className="last-updated__time">
        <p>Last updated at {new Date(lastUpdated).toLocaleTimeString()}</p>
    </div>
);

LastUpdated.propTypes = propTypes;

export default LastUpdated;
