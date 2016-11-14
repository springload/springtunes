import React, { Component, PropTypes } from 'react';
import LastUpdated from '../components/LastUpdated';
// import Controls from '../components/Controls';
import IntelligentCurrentSong from '../containers/IntelligentCurrentSong';
import IntelligentControls from '../containers/IntelligentControls';
import Logo from '../components/Logo';

const propTypes = {
    lastUpdated: PropTypes.number,
};

class App extends Component {
    componentDidMount() {
        this.props.fetchSongIfNeeded();
    }

    render() {
        const { lastUpdated } = this.props;
        return (
        // constructor(props) {
        //     super(props);
        //     this.handleRefreshClick = this.handleRefreshClick.bind(this);
        //     this.handleTogglePauseClick = this.handleTogglePauseClick.bind(this);
        //     this.handleNextClick = this.handleNextClick.bind(this);
        //     this.handleBackClick = this.handleBackClick.bind(this);
        //     this.handleMuteClick = this.handleMuteClick.bind(this);
        //     this.handleUnmuteClick = this.handleUnmuteClick.bind(this);
        //     this.handleVolumeChange = this.handleVolumeChange.bind(this);
        // }

        // componentDidMount() {
        //     const { dispatch } = this.props;
        //     dispatch(fetchSongIfNeeded());
        // }

        // 
                <div>
                    <div className='header'>
                        <div className='header__logo container'>
                            <Logo />
                        </div>
                    </div>
                    <div className='container section'>
                        <div className='last-updated'>
                            <p className='u-text-uppercase'>Now Playing</p>
                            <LastUpdated lastUpdated={ lastUpdated } />
                        </div>
                        <IntelligentCurrentSong />
                        <IntelligentControls />
                    </div>
                </div>
        )
    }
};

//<Controls
//     isFetching={ isFetching }
//     playing={ playing }
//     handleRefreshClick={ this.handleRefreshClick }
//     handleTogglePauseClick={ this.handleTogglePauseClick }
//     handleNextClick={ this.handleNextClick }
//     handleBackClick={ this.handleBackClick }
//     isMuted={ isMuted }
//     isModifyingMute={ isModifyingMute }
//     handleMuteClick={ this.handleMuteClick }
//     handleUnmuteClick={ this.handleUnmuteClick }
//     volume={ volume }
//     handleVolumeChange={ this.handleVolumeChange }
// />

App.propTypes = propTypes;

export default App;