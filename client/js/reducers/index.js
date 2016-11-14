import { combineReducers } from 'redux';
import { ACTIONS } from '../actions/constants';
import { songManager } from './song';
import { volumeManager } from './volume';


function error(state = {
    error: '',
}, action) {
    switch (action.type) {
    case ACTIONS.RECEIVE_ERROR:
        return Object.assign({}, state, {
            error: action.error,
            lastUpdated: action.receivedAt,
        });
    default:
        return state;
    }
}

function errorManager(state = {}, action) {
    switch (action.type) {
    case ACTIONS.RECEIVE_ERROR:
        return Object.assign({}, state, {
            error: error(state.error, action),
        });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    song: songManager,
    volume: volumeManager,
    error: errorManager,
});

export default rootReducer;
