import keyMirror from 'keymirror';

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
