import { combineReducers } from 'redux';
import { ACTIONS } from '../actions';

function requestSong(state = {
    isFetching: false,
    currentSong: {},
}, action) {
    switch (action.type) {
    case ACTIONS.REQUEST_SONG:
        return Object.assign({}, state, {
            isFetching: true,
            playing: false,
            currentSong: {},
        });
    default:
        return state;
    }
}

function receiveSong(state = {
    isFetching: false,
    currentSong: {},
}, action) {
    switch (action.type) {
    case ACTIONS.RECEIVE_SONG:
    case ACTIONS.RECEIVE_TOGGLE_PAUSE:
    case ACTIONS.RECEIVE_BACK:
    case ACTIONS.RECEIVE_NEXT:
        return Object.assign({}, state, {
            isFetching: false,
            playing: action.playing,
            volume: action.volume,
            currentSong: action.currentSong,
            lastUpdated: action.receivedAt,
        });
    default:
        return state;
    }
}

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

function muting(state = {
    isModifyingMute: false,
    isMuted: false,
}, action) {
    switch (action.type) {
    case ACTIONS.REQUEST_MUTE:
        return Object.assign({}, state, {
            isModifyingMute: true,
        });
    case ACTIONS.RECEIVE_MUTE:
        return Object.assign({}, state, {
            isModifyingMute: false,
            isMuted: action.isMuted,
        });
    default:
        return state;
    }
}

function volumeChanged(state = {
    value: 50,
}, action) {
    switch (action.type) {
    case ACTIONS.RECEIVE_VOLUME:
        return Object.assign({}, state, {
            value: action.value,
        });
    default:
        return state;
    }
}

function songManager(state = { }, action) {
    switch (action.type) {
    case ACTIONS.REQUEST_SONG:
        return Object.assign({}, state, {
            ['current']: requestSong(state.current, action),
        });
    case ACTIONS.RECEIVE_SONG:
    case ACTIONS.RECEIVE_TOGGLE_PAUSE:
    case ACTIONS.RECEIVE_NEXT:
    case ACTIONS.RECEIVE_BACK:
        return Object.assign({}, state, {
            ['current']: receiveSong(state.current, action),
        });
    default:
        return state;
    }
}

function errorManager(state = {}, action) {
    switch (action.type) {
    case ACTIONS.RECEIVE_ERROR:
        return Object.assign({}, state, {
            ['error']: error(state.error, action),
        });
    default:
        return state;
    }
}

function volumeManager(state = { }, action) {
    switch (action.type) {
    case ACTIONS.RECEIVE_SONG:
    case ACTIONS.REQUEST_MUTE:
    case ACTIONS.RECEIVE_MUTE:
        return Object.assign({}, state, {
            ['muting']: muting(state.muting, action),
        });
    case ACTIONS.RECEIVE_VOLUME:
        return Object.assign({}, state, {
            ['volume']: volumeChanged(state.volume, action),
        });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    songManager,
    volumeManager,
    errorManager,
});

export default rootReducer;
