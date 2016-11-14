import { ACTIONS } from '../actions/constants';

export const songManager = (state = { }, action) => {
    switch (action.type) {
    case ACTIONS.REQUEST_SONG:
        return Object.assign({}, state, {
            isFetching: true,
            isPlaying: false,
            current: {},
        });
    case ACTIONS.RECEIVE_SONG:
    case ACTIONS.RECEIVE_TOGGLE_PAUSE:
    case ACTIONS.RECEIVE_NEXT:
    case ACTIONS.RECEIVE_BACK:
      return Object.assign({}, state, {
          isFetching: false,
          isPlaying: action.playing,
          current: action.currentSong,
          lastUpdated: action.receivedAt,
      });
    default:
        return state;
    }
}