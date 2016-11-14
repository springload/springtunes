import { connect } from 'react-redux';
import CurrentSong from '../components/CurrentSong';

const mapStateToProps = (state) => {
    return {
        isFetching: state.song.isFetching,
        currentSong: state.song.current,
        error: state.error.message,
    };
}

export default connect(mapStateToProps)(CurrentSong);
