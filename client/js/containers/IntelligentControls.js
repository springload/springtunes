import { connect } from 'react-redux';
import Controls from '../components/Controls';
import {
  fetchSongIfNeeded,
  togglePauseIfNeeded,
  nextIfNeeded,
  backIfNeeded,
  muteIfNeeded,
  unmuteIfNeeded,
  changeVolume,
} from '../actions';

const mapStateToProps = (state) => (
    {
        lastUpdated: state.song.lastUpdated,
        isFetching: state.song.isFetching,
        isPlaying: state.song.isPlaying,
        isMuted: state.volume.isMuted,
        isModifyingMute: state.volume.isModifyingMute,
        volume: state.volume.value,
    }
);

const dispatchToProps = (dispatch) => (
    {
        refreshClick: (evt) => {
            evt.preventDefault();
            dispatch(fetchSongIfNeeded());
        },

        togglePauseClick: (evt) => {
            evt.preventDefault();
            dispatch(togglePauseIfNeeded());
        },

        nextClick: (evt) => {
            evt.preventDefault();
            dispatch(nextIfNeeded());
        },

        backClick: (evt) => {
            evt.preventDefault();
            dispatch(backIfNeeded());
        },

        muteClick: (evt) => {
            evt.preventDefault();
            dispatch(muteIfNeeded());
        },

        unmuteClick: (evt) => {
            evt.preventDefault();
            dispatch(unmuteIfNeeded());
        },

        volumeChange: (volume) => {
            dispatch(changeVolume(volume));
        },
    }
);

export default connect(
  mapStateToProps,
  dispatchToProps
)(Controls);
