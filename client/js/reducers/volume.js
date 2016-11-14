import { ACTIONS } from '../actions/constants';

export const volumeManager = (state = { }, action) => {
    switch (action.type) {
    case ACTIONS.RECEIVE_SONG:
    case ACTIONS.REQUEST_MUTE:
        return Object.assign({}, state, {
            volume: action.volume,
            isModifyingMute: true,
        });
    case ACTIONS.RECEIVE_MUTE:
        return Object.assign({}, state, {
            isModifyingMute: false,
            isMuted: action.isMuted,
        });
    case ACTIONS.RECEIVE_VOLUME:
        return Object.assign({}, state, {
            volume: action.value,
        });
    default:
        return state;
    }
};