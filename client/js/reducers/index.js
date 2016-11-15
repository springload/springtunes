import { combineReducers } from 'redux';
import { songManager } from './song';
import { volumeManager } from './volume';
import { errorManager } from './error';

const rootReducer = combineReducers({
    song: songManager,
    volume: volumeManager,
    error: errorManager,
});

export default rootReducer;
