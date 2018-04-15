import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/**
 * Redux store, responsible for keeping track of the state of the application.
 * The reducers effect transformations on the state depending on actions.
 */

const middleware = [thunk];

const springtunesCreateStore = () => {
    const stateDefault = {
        song: {
            isFetching: true,
            isPlaying: false,
            lastUpdated: Date.now(),
            current: {},
        },
        volume: {
            isModifyingMute: false,
            isMuted: false,
            value: 50,
        },
        error: {
            hasError: false,
            message: '',
        },
    };
    return createStore(
        rootReducer,
        stateDefault,
        compose(
            applyMiddleware(...middleware),
            global.devToolsExtension ? global.devToolsExtension() : fct => fct, // Expose store to Redux DevTools extension.
        ),
    );
};

export default springtunesCreateStore;
