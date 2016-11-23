import React from 'react';
import App from './App';
import ReactTestUtils from 'react-addons-test-utils';

describe('App component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <App
                lastUpdated={ 23525345345 }
                fetchSongIfNeeded={ () => {} }
            />
        );
        expect(result).toMatchSnapshot();
    });

    it('fetchSong is called', () => {
        let fetchSong = false;
        const shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(
            <App
                lastUpdated={ 23525345345 }
                fetchSongIfNeeded={ () => { fetchSong = true; } }
            />
        );
        const instance = shallowRenderer.getMountedInstance();
        instance.componentDidMount();
        expect(fetchSong).toBeTruthy();
    });
});
