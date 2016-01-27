import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSongIfNeeded, togglePauseIfNeeded, nextIfNeeded, backIfNeeded,
muteIfNeeded, unmuteIfNeeded, changeVolume } from '../actions';
import LastUpdated from '../components/LastUpdated';
import Controls from '../components/Controls';
import CurrentSong from '../components/CurrentSong';
import Logo from '../components/Logo';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
        this.handleTogglePauseClick = this.handleTogglePauseClick.bind(this);
        this.handleNextClick = this.handleNextClick.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        this.handleMuteClick = this.handleMuteClick.bind(this);
        this.handleUnmuteClick = this.handleUnmuteClick.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchSongIfNeeded());
    }

    handleRefreshClick(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(fetchSongIfNeeded());
    }

    handleTogglePauseClick(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(togglePauseIfNeeded());
    }

    handleNextClick(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(nextIfNeeded());
    }

    handleBackClick(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(backIfNeeded());
    }

    handleMuteClick(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(muteIfNeeded());
    }

    handleUnmuteClick(e) {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(unmuteIfNeeded());
    }

    handleVolumeChange(volume) {
        const { dispatch } = this.props;
        dispatch(changeVolume(volume));
    }

    render() {
        const { currentSong, isFetching, playing, volume, lastUpdated, isModifyingMute, isMuted, error } = this.props;
        return (
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
                <CurrentSong isFetching={ isFetching } currentSong={ currentSong } error={ error } />
                <Controls isFetching={ isFetching }
                  playing={ playing }
                  handleRefreshClick={ this.handleRefreshClick }
                  handleTogglePauseClick={ this.handleTogglePauseClick }
                  handleNextClick={ this.handleNextClick }
                  handleBackClick={ this.handleBackClick }
                  isMuted={ isMuted }
                  isModifyingMute={ isModifyingMute }
                  handleMuteClick={ this.handleMuteClick }
                  handleUnmuteClick={ this.handleUnmuteClick }
                  volume={ volume }
                  handleVolumeChange={ this.handleVolumeChange }
                />
            </div>
		</div>
        );
    }
}

App.propTypes = {
    currentSong: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    playing: PropTypes.bool.isRequired,
    volume: PropTypes.number,
    error: PropTypes.string,
    lastUpdated: PropTypes.number,
    isModifyingMute: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { songManager, volumeManager, errorManager } = state;
    let isFetching = songManager.current ? songManager.current.isFetching : true;
    const playing = songManager.current ? songManager.current.playing : false;
    let volume = songManager.current && songManager.current.volume ? songManager.current.volume : 50;
    let lastUpdated = songManager.current ? songManager.current.lastUpdated : Date.now();
    const currentSong = songManager.current ? songManager.current.currentSong : {};

    const isModifyingMute = volumeManager.muting ? volumeManager.muting.isModifyingMute : false;
    const isMuted = volumeManager.muting ? volumeManager.muting.isMuted : false;

    const error = errorManager.error ? errorManager.error.error : '';
    if (error !== '') {
        isFetching = false;
        lastUpdated = errorManager.error ? errorManager.error.lastUpdated : lastUpdated;
    }

    if (volumeManager.volume) {
        volume = volumeManager.volume ? volumeManager.volume.value : volume;
    }

    return {
        currentSong,
        isFetching,
        playing,
        volume,
        lastUpdated,
        isModifyingMute,
        isMuted,
        error,
    };
}

export default connect(mapStateToProps)(App);
