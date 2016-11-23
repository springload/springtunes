import React from 'react';
import CurrentSong from './CurrentSong';
import ReactTestUtils from 'react-addons-test-utils';

describe('CurrentSong component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <CurrentSong
                isFetching={false}
                currentSong={
                    {
                        title: "Test song",
                        artist: "Test artist",
                        album: "Test album",
                        link_track: "http://test.com",
                        link_artist: "http://test.com",
                        link_album: "http://test.com",
                    }
                }
            />
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly when fetching', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <CurrentSong
                isFetching={true}
                currentSong={
                    {
                        title: "Test song",
                        artist: "Test artist",
                        album: "Test album",
                        link_track: "http://test.com",
                        link_artist: "http://test.com",
                        link_album: "http://test.com",
                    }
                }
            />
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly when error', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <CurrentSong
                isFetching={false}
                currentSong={
                    {
                        title: "Test song",
                        artist: "Test artist",
                        album: "Test album",
                        link_track: "http://test.com",
                        link_artist: "http://test.com",
                        link_album: "http://test.com",
                    }
                }
                hasError={true}
                error="ERROR"
            />
        );
        expect(result).toMatchSnapshot();
    });
});
