import React, { PropTypes, Component } from 'react';
import Slider from 'rc-slider';
import Icon from '../components/Icon';

export default class Controls extends Component {
    render() {
        const {
            isFetching,
            isModifyingMute,
            isMuted,
            playing,
            volume,
            handleRefreshClick,
            handleTogglePauseClick,
            handleBackClick,
            handleNextClick,
            handleMuteClick,
            handleUnmuteClick,
            handleVolumeChange,
        } = this.props;

        return (
            <div className='controls'>
                <button className='btn-orange' onClick={ handleRefreshClick } disabled={ isFetching }>
                    <Icon name='fa-refresh' iconType='small' /> Refresh
                </button>
                <button onClick={ handleBackClick } disabled={ isFetching }>
                    <Icon name='fa-step-backward' iconType='small' /> Back
                </button>
                <button onClick={ handleTogglePauseClick } disabled={ isFetching }>
                    {playing &&
                        <span><Icon name='fa-pause' iconType='small' /> Pause</span>
                    }
                    {!playing &&
                        <span><Icon name='fa-play' iconType='small' /> Play</span>
                    }
                </button>
                <button onClick={ handleNextClick } disabled={ isFetching }>
                    Next <Icon name='fa-step-forward' iconType='small' />
                </button>
            {!isMuted &&
                <button onClick={ handleMuteClick } disabled={ !isFetching && isModifyingMute } title='Mute'>
                     <Icon name='fa-volume-up' iconType='small' />
                </button>
            }
            {isMuted &&
                <button onClick={ handleUnmuteClick } disabled={ !isFetching && isModifyingMute } title='Unmute'>
                     <Icon name='fa-volume-off' iconType='small' />
                </button>
            }
                <div className='volume-control'>
                    <span>Volume</span>
                    <Slider value={ volume } onChange={ handleVolumeChange } disabled={ isFetching } />
                </div>
            </div>
        );
    }
}

Controls.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    isModifyingMute: PropTypes.bool.isRequired,
    isMuted: PropTypes.bool.isRequired,
    playing: PropTypes.bool.isRequired,
    volume: PropTypes.number.isRequired,
    handleRefreshClick: PropTypes.func.isRequired,
    handleTogglePauseClick: PropTypes.func.isRequired,
    handleBackClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired,
    handleMuteClick: PropTypes.func.isRequired,
    handleUnmuteClick: PropTypes.func.isRequired,
    handleVolumeChange: PropTypes.func.isRequired,
};
