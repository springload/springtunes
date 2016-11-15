import { ACTIONS } from '../actions/constants';

export const errorManager = (state = {}, action) => {
    switch (action.type) {
    case ACTIONS.RECEIVE_ERROR:
        return Object.assign({}, state, {
            error: action.payload.error,
            lastUpdated: action.payload.receivedAt,
        });
    default:
        return state;
    }
};
