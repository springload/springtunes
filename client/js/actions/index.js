import keyMirror from 'keymirror';
import api from './api';

export const ACTIONS = keyMirror({
    REQUEST_SONG: null,
    REQUEST_MUTE: null,
    RECEIVE_ERROR: null,
    RECEIVE_SONG: null,
    RECEIVE_TOGGLE_PAUSE: null,
    RECEIVE_NEXT: null,
    RECEIVE_BACK: null,
    RECEIVE_MUTE: null,
    RECEIVE_VOLUME: null,
});

function requestSong() {
    return {
        type: ACTIONS.REQUEST_SONG,
    };
}

function requestMute() {
    return {
        type: ACTIONS.REQUEST_MUTE,
    };
}

function receiveError(response) {
    return {
        type: ACTIONS.RECEIVE_ERROR,
        error: response.error,
        receivedAt: Date.now(),
    };
}

function receiveSong(response) {
    try {
        return {
            type: ACTIONS.RECEIVE_SONG,
            playing: response.playing,
            volume: Math.round(response.volume * 100, 0),
            currentSong: {
                title: response.track.track_resource.name,
                link_track: response.track.track_resource.location.og,
                artist: response.track.artist_resource.name,
                link_artist: response.track.artist_resource.location.og,
                album: response.track.album_resource.name,
                link_album: response.track.album_resource.location.og,
            },
            receivedAt: Date.now(),
        };
    } catch (exc) {
        return {
            type: ACTIONS.RECEIVE_ERROR,
            error: 'Invalid return.',
            receivedAt: Date.now(),
        };
    }
}

function receiveMuteModification(response) {
    return {
        type: ACTIONS.RECEIVE_MUTE,
        isMuted: response.isMuted,
    };
}

function receiveVolumeChange(response) {
    return {
        type: ACTIONS.RECEIVE_VOLUME,
        value: response.value,
    };
}

function fetchSong() {
    return dispatch => {
        dispatch(requestSong());
        return api.fetchSong()
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.error) {
                    dispatch(receiveError(jsonResponse));
                } else {
                    dispatch(receiveSong(jsonResponse));
                }
            });
    };
}

function togglePause() {
    return dispatch => {
        dispatch(requestSong());
        return api.togglePause()
        .then(response => response.json())
        .then(jsonResponse => dispatch(receiveSong(jsonResponse)));
    };
}

function next() {
    return dispatch => {
        dispatch(requestSong());
        return api.next()
        .then(response => response.json())
        .then(jsonResponse => dispatch(receiveSong(jsonResponse)));
    };
}

function back() {
    return dispatch => {
        dispatch(requestSong());
        return api.back()
        .then(response => response.json())
        .then(jsonResponse => dispatch(receiveSong(jsonResponse)));
    };
}

function mute() {
    return dispatch => {
        dispatch(requestMute());
        return api.mute()
        .then(response => response.json())
        .then(jsonResponse => dispatch(receiveMuteModification(jsonResponse)));
    };
}

function unmute() {
    return dispatch => {
        dispatch(requestMute());
        return api.unmute()
        .then(response => response.json())
        .then(jsonResponse => dispatch(receiveMuteModification(jsonResponse)));
    };
}

function shouldFetchSong(state) {
    const song = state.songManager.current;
    if (!song) return true;
    if (song.isFetching) return false;
    return true;
}

function shouldModifyMute(state, calledBy) {
    const muting = state.volumeManager.muting;
    if (!muting) return false;
    if (muting.isModifyingMute) return false;
    if (calledBy === 'mute') {
        if (muting.isMuted === true) return false;
    } else {
        if (muting.isMuted === false) return false;
    }

    return true;
}

export function fetchSongIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchSong(getState())) {
            return dispatch(fetchSong());
        }
    };
}

export function togglePauseIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchSong(getState())) {
            return dispatch(togglePause());
        }
    };
}

export function nextIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchSong(getState())) {
            return dispatch(next());
        }
    };
}

export function backIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchSong(getState())) {
            return dispatch(back());
        }
    };
}

export function muteIfNeeded() {
    return (dispatch, getState) => {
        if (shouldModifyMute(getState(), 'mute')) {
            return dispatch(mute());
        }
    };
}

export function unmuteIfNeeded() {
    return (dispatch, getState) => {
        if (shouldModifyMute(getState(), 'unmute')) {
            return dispatch(unmute());
        }
    };
}

export function changeVolume(volumeValue) {
    return dispatch => {
        return api.changeVolume(volumeValue)
        .then(response => response.json())
        .then(jsonResponse => dispatch(receiveVolumeChange(jsonResponse)));
    };
}
