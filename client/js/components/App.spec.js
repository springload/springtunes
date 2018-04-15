import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

jest.mock('./Logo', () => 'div');
jest.mock('./LastUpdated', () => 'div');
jest.mock('../containers/IntelligentCurrentSong', () => 'div');
jest.mock('../containers/IntelligentControls', () => 'div');

describe('App component', () => {
    it('renders correctly with min params', () => {
        const result = renderer.create(
            <App lastUpdated={23525345345} fetchSongIfNeeded={() => {}} />,
        );
        expect(result).toMatchSnapshot();
    });

    it('fetchSong is called', () => {
        let fetchSong = false;
        const shallowRenderer = renderer.create(
            <App
                lastUpdated={23525345345}
                fetchSongIfNeeded={() => {
                    fetchSong = true;
                }}
            />,
        );
        const instance = shallowRenderer.getInstance();
        instance.componentDidMount();
        expect(fetchSong).toBeTruthy();
    });
});
