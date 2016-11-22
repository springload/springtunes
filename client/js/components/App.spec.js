import React from 'react';
import App from './App';
import ReactTestUtils from 'react-addons-test-utils';

test('App', () => {
    const shallowRenderer = ReactTestUtils.createRenderer();
    const result = shallowRenderer.render(
        <App
            lastUpdated={23525345345}
            fetchSongIfNeeded={() => {}}
        />
    );
    expect(result).toMatchSnapshot();
});
