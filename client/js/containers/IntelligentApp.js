import { connect } from 'react-redux';
import App from '../components/App';
import { fetchSongIfNeeded } from '../actions';

const mapStateToProps = (state) => (
    {
        lastUpdated: state.song.lastUpdated,
    }
);

const dispatchToProps = (dispatch) => (
    {
        fetchSongIfNeeded: () => {
            dispatch(fetchSongIfNeeded());
        },
    }
);

export default connect(
    mapStateToProps,
    dispatchToProps
)(App);
