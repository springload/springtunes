import api from './api';
import { ACTIONS } from './constants';

const requestSong = () => ({
    type: ACTIONS.REQUEST_SONG,
});

const requestMute = () => ({
    type: ACTIONS.REQUEST_MUTE,
});

const receiveError = (response) => ({
    type: ACTIONS.RECEIVE_ERROR,
    error: response.error,
    receivedAt: Date.now(),
});

const receiveSong = (response) => {
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
};

const receiveMuteModification = (response) => ({
    type: ACTIONS.RECEIVE_MUTE,
    isMuted: response.isMuted,
});

const receiveVolumeChange = (response) => ({
    type: ACTIONS.RECEIVE_VOLUME,
    value: response.value,
});

const fetchSong = () => dispatch => {
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

const togglePause = () => dispatch => {
    dispatch(requestSong());
    return api.togglePause()
    .then(response => response.json())
    .then(jsonResponse => dispatch(receiveSong(jsonResponse)));
};

const next = () => dispatch => {
    dispatch(requestSong());
    return api.next()
    .then(response => response.json())
    .then(jsonResponse => dispatch(receiveSong(jsonResponse)));
};

const back = () => dispatch => {
    dispatch(requestSong());
    return api.back()
    .then(response => response.json())
    .then(jsonResponse => dispatch(receiveSong(jsonResponse)));
};

const mute = () => dispatch => {
    dispatch(requestMute());
    return api.mute()
    .then(response => response.json())
    .then(jsonResponse => dispatch(receiveMuteModification(jsonResponse)));
};

const unmute = () => dispatch => {
    dispatch(requestMute());
    return api.unmute()
    .then(response => response.json())
    .then(jsonResponse => dispatch(receiveMuteModification(jsonResponse)));
};

const shouldFetchSong = (state) => {
    const song = state.song.current;
    if (!song) return true;
    if (song.isFetching) return false;
    return true;
};

const shouldModifyMute = (state, calledBy) => {
    const muting = state.volume.muting;
    if (!muting) return false;
    if (muting.isModifyingMute) return false;
    if (calledBy === 'mute') {
        if (muting.isMuted === true) return false;
    } else {
        if (muting.isMuted === false) return false;
    }

    return true;
};

export const fetchSongIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchSong(getState())) {
        return dispatch(fetchSong());
    }

    return null;
};

export const togglePauseIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchSong(getState())) {
        return dispatch(togglePause());
    }

    return null;
};

export const nextIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchSong(getState())) {
        return dispatch(next());
    }

    return null;
};

export const backIfNeeded = () => (dispatch, getState) => {
    if (shouldFetchSong(getState())) {
        return dispatch(back());
    }

    return null;
};

export const muteIfNeeded = () => (dispatch, getState) => {
    if (shouldModifyMute(getState(), 'mute')) {
        return dispatch(mute());
    }

    return null;
};

export const unmuteIfNeeded = () => (dispatch, getState) => {
    if (shouldModifyMute(getState(), 'unmute')) {
        return dispatch(unmute());
    }

    return null;
};

export const changeVolume = (volumeValue) => dispatch =>
    api.changeVolume(volumeValue)
    .then(response => response.json())
    .then(jsonResponse => dispatch(receiveVolumeChange(jsonResponse)));
