import React, { PropTypes } from 'react';
import Slider from 'rc-slider';
import Icon from '../components/Icon';

const propTypes = {
    isFetching: PropTypes.bool.isRequired,
    isModifyingMute: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired,
    refreshClick: PropTypes.func.isRequired,
    togglePauseClick: PropTypes.func.isRequired,
    backClick: PropTypes.func.isRequired,
    nextClick: PropTypes.func.isRequired,
    muteClick: PropTypes.func.isRequired,
    unmuteClick: PropTypes.func.isRequired,
    volumeChange: PropTypes.func.isRequired,
};

const Controls = ({
    isFetching,
    isModifyingMute,
    isMuted,
    isPlaying,
    volume,
    refreshClick,
    togglePauseClick,
    backClick,
    nextClick,
    muteClick,
    unmuteClick,
    volumeChange,
}) => (
    <div className="controls">
        <button className="btn-orange" onClick={ refreshClick } disabled={ isFetching }>
            <Icon name="fa-refresh" iconType="small" /> Refresh
        </button>
        <button onClick={ backClick } disabled={ isFetching }>
            <Icon name="fa-step-backward" iconType="small" /> Back
        </button>
        <button onClick={ togglePauseClick } disabled={ isFetching }>
            { isPlaying &&
                <span><Icon name="fa-pause" iconType="small" /> Pause</span>
            }
            { !isPlaying &&
                <span><Icon name="fa-play" iconType="small" /> Play</span>
            }
        </button>
        <button onClick={ nextClick } disabled={ isFetching }>
            Next <Icon name="fa-step-forward" iconType="small" />
        </button>
    { !isMuted &&
        <button onClick={ muteClick } disabled={ !isFetching && isModifyingMute } title="Mute">
            <Icon name="fa-volume-up" iconType="small" />
        </button>
    }
    { isMuted &&
        <button onClick={ unmuteClick } disabled={ !isFetching && isModifyingMute } title="Unmute">
            <Icon name="fa-volume-off" iconType="small" />
        </button>
    }
        <div className="volume-control">
            <span>Volume</span>
            <Slider value={ volume } onChange={ volumeChange } disabled={ isFetching } />
        </div>
    </div>
);

Controls.propTypes = propTypes;

export default Controls;
