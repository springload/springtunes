import { connect } from 'react-redux';
import App from '../components/App';
import { fetchSongIfNeeded } from '../actions';

const mapStateToProps = (state) => {
    return {
        lastUpdated: state.song.lastUpdated,
    };
}

const dispatchToProps = (dispatch) => {
    return {
        fetchSongIfNeeded: () => {
            dispatch(fetchSongIfNeeded());
        },
    }
}

export default connect(
    mapStateToProps,
    dispatchToProps
)(App);
