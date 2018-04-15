import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import IntelligentApp from './containers/IntelligentApp';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <IntelligentApp />
    </Provider>,
    document.getElementById('root'),
);
