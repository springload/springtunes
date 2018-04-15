import ACTIONS from '../actions/constants';

export default (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.RECEIVE_ERROR:
            return Object.assign({}, state, {
                hasError: action.error,
                message: action.payload.message,
            });
        case ACTIONS.RECEIVE_SONG:
            return Object.assign({}, state, {
                hasError: false,
                message: '',
            });
        default:
            return state;
    }
};
