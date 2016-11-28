import { ACTIONS } from '../actions/constants';

export const volumeManager = (state = { }, action) => {
    switch (action.type) {
    case ACTIONS.RECEIVE_SONG:
        return Object.assign({}, state, {
            isModifyingMute: false,
            value: action.payload.volume,
        });
    case ACTIONS.REQUEST_MUTE:
        return Object.assign({}, state, {
            isModifyingMute: true,
        });
    case ACTIONS.RECEIVE_MUTE:
        return Object.assign({}, state, {
            isModifyingMute: false,
            isMuted: action.payload.isMuted,
        });
    case ACTIONS.RECEIVE_VOLUME:
        return Object.assign({}, state, {
            value: action.payload.value,
            isModifyingMute: false,
            isMuted: false,
        });
    default:
        return state;
    }
};
