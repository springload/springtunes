import React from 'react';
import renderer from 'react-test-renderer';
import CurrentSong from './CurrentSong';

jest.mock('./Processing', () => 'div');
jest.mock('./Icon', () => 'div');

describe('CurrentSong component', () => {
    it('renders correctly with min params', () => {
        const result = renderer
            .create(
                <CurrentSong
                    isFetching={false}
                    currentSong={{
                        title: 'Test song',
                        artist: 'Test artist',
                        album: 'Test album',
                        link_track: 'http://test.com',
                        link_artist: 'http://test.com',
                        link_album: 'http://test.com',
                    }}
                />,
            )
            .toJSON();
        expect(result).toMatchSnapshot();
    });

    it('renders correctly when fetching', () => {
        const result = renderer
            .create(
                <CurrentSong
                    isFetching={true}
                    currentSong={{
                        title: 'Test song',
                        artist: 'Test artist',
                        album: 'Test album',
                        link_track: 'http://test.com',
                        link_artist: 'http://test.com',
                        link_album: 'http://test.com',
                    }}
                />,
            )
            .toJSON();
        expect(result).toMatchSnapshot();
    });

    it('renders correctly when error', () => {
        const result = renderer
            .create(
                <CurrentSong
                    isFetching={false}
                    currentSong={{
                        title: 'Test song',
                        artist: 'Test artist',
                        album: 'Test album',
                        link_track: 'http://test.com',
                        link_artist: 'http://test.com',
                        link_album: 'http://test.com',
                    }}
                    hasError={true}
                    error="ERROR"
                />,
            )
            .toJSON();
        expect(result).toMatchSnapshot();
    });
});
