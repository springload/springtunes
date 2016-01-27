import React, { Component, PropTypes } from 'react';

export default class LastUpdated extends Component {
    render() {
        const { lastUpdated } = this.props;
        return (
            <div className='last-updated__time'>
                {lastUpdated &&
                    <p>
                        Last updated at {new Date(lastUpdated).toLocaleTimeString()}
                    </p>
                }
            </div>
        );
    }
}

LastUpdated.propTypes = {
    lastUpdated: PropTypes.number,
};
