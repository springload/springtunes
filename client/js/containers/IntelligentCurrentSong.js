import { connect } from 'react-redux';
import CurrentSong from '../components/CurrentSong';

const mapStateToProps = (state) => (
    {
        isFetching: state.song.isFetching,
        currentSong: state.song.current,
        hasError: state.error.hasError,
        error: state.error.message,
    }
);

export default connect(mapStateToProps)(CurrentSong);
