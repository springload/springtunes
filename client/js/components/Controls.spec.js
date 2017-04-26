import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import Controls from './Controls';

const emptyFunc = () => {};

describe('Controls component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly with isFetching true', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={true}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly with isModifyingMute true', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={false}
                isModifyingMute={true}
                isMuted={false}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly with isMuted', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={true}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly with isPlaying true', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={true}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );
        expect(result).toMatchSnapshot();
    });

    it('execute correctly refreshClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={true}
                volume={50}
                refreshClick={testOnClick}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );

        component.find('button').first().simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly backClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={true}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={testOnClick}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );

        component.find('button').at(1).simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly togglePauseClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={true}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={testOnClick}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );

        component.find('button').at(2).simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly nextClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={true}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={testOnClick}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );

        component.find('button').at(3).simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly muteClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={true}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={testOnClick}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );

        component.find('button').at(4).simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly unmuteClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={true}
                isPlaying={true}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={testOnClick}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );

        component.find('button').at(4).simulate('click');
        expect(testClick).toBeTruthy();
    });

    // should show all the buttons when not muted
    it('renders correctly numbers of buttons', () => {
        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );

        expect(component.find('button').length).toBe(6);
    });

    // should show all the buttons when muted
    it('renders correctly numbers of buttons', () => {
        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={true}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );

        expect(component.find('button').length).toBe(6);
    });

    it('updateURL works', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );
        const instance = shallowRenderer.getMountedInstance();
        instance.updateURL('http://newurl');
        expect(instance.state.url).toBe('http://newurl');
    });

    it('checkURL works invalid', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );
        const instance = shallowRenderer.getMountedInstance();
        instance.checkURL('http://newurl');
        expect(instance.state.error).toBe('Invalid URL provided. You can only play playlists. URL must start with \'https://open.spotify.com/user/...\'');
    });

    it('checkURL works empty', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );
        const instance = shallowRenderer.getMountedInstance();
        instance.checkURL('');
        expect(instance.state.error).toBe('Invalid URL provided. You can only play playlists. URL must start with \'https://open.spotify.com/user/...\'');
    });

    it('checkURL works valid', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        shallowRenderer.render(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={false}
                isPlaying={false}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );
        const instance = shallowRenderer.getMountedInstance();
        instance.checkURL('https://open.spotify.com/user/springload/playlist/6oYWzKyhPbfy2I83KS7JK5');
        expect(instance.state.error).toBe('');
    });

    it('submit form', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={true}
                isPlaying={true}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={testOnClick}
            />,
        );

        component.find('form').at(0).simulate('submit', { preventDefault: () => {} });
        expect(testClick).toBeFalsy();

        expect(component).toMatchSnapshot();
    });

    it('input change', () => {
        const component = shallow(
            <Controls
                isFetching={false}
                isModifyingMute={false}
                isMuted={true}
                isPlaying={true}
                volume={50}
                refreshClick={emptyFunc}
                togglePauseClick={emptyFunc}
                backClick={emptyFunc}
                nextClick={emptyFunc}
                muteClick={emptyFunc}
                unmuteClick={emptyFunc}
                volumeChange={emptyFunc}
                playURL={emptyFunc}
            />,
        );

        component.find('input').at(0).simulate('change', { target: { value: 'newValue' } });
        expect(component.state().url).toBe('newValue');
    });
});
