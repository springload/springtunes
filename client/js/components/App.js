import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LastUpdated from '../components/LastUpdated';
import IntelligentCurrentSong from '../containers/IntelligentCurrentSong';
import IntelligentControls from '../containers/IntelligentControls';
import Logo from '../components/Logo';

const propTypes = {
    lastUpdated: PropTypes.number.isRequired,
    fetchSongIfNeeded: PropTypes.func.isRequired,
};

class App extends Component {
    componentDidMount() {
        this.props.fetchSongIfNeeded();
    }

    render() {
        const { lastUpdated } = this.props;
        return (
            <div>
                <div className="header">
                    <div className="header__logo container">
                        <Logo />
                    </div>
                </div>
                <div className="container section">
                    <div className="last-updated">
                        <p className="u-text-uppercase">Now Playing</p>
                        <LastUpdated lastUpdated={lastUpdated} />
                    </div>
                    <IntelligentCurrentSong />
                    <IntelligentControls />
                </div>
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;
