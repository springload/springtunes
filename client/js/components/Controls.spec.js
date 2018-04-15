import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Controls from './Controls';

jest.mock('./Icon', () => 'div');

const emptyFunc = () => {};

describe('Controls component', () => {
    it('renders correctly with min params', () => {
        const result = renderer.create(
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
        const result = renderer.create(
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
        const result = renderer.create(
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
        const result = renderer.create(
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
        const result = renderer.create(
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
        const testOnClick = () => {
            testClick = true;
        };

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

        component
            .find('button')
            .first()
            .simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly backClick', () => {
        let testClick = false;
        const testOnClick = () => {
            testClick = true;
        };

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

        component
            .find('button')
            .at(1)
            .simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly togglePauseClick', () => {
        let testClick = false;
        const testOnClick = () => {
            testClick = true;
        };

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

        component
            .find('button')
            .at(2)
            .simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly nextClick', () => {
        let testClick = false;
        const testOnClick = () => {
            testClick = true;
        };

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

        component
            .find('button')
            .at(3)
            .simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly muteClick', () => {
        let testClick = false;
        const testOnClick = () => {
            testClick = true;
        };

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

        component
            .find('button')
            .at(4)
            .simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly unmuteClick', () => {
        let testClick = false;
        const testOnClick = () => {
            testClick = true;
        };

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

        component
            .find('button')
            .at(4)
            .simulate('click');
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
        const shallowRenderer = renderer.create(
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
        const instance = shallowRenderer.getInstance();
        instance.updateURL('http://newurl');
        expect(instance.state.url).toBe('http://newurl');
    });

    it('checkURL works invalid', () => {
        const shallowRenderer = renderer.create(
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
        const instance = shallowRenderer.getInstance();
        instance.checkURL('http://newurl');
        expect(instance.state.error).toBe(
            "Invalid URI provided. You can only play playlists. URI must start with 'spotify:user:...:playlist:...'",
        );
    });

    it('checkURL works empty', () => {
        const shallowRenderer = renderer.create(
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
        const instance = shallowRenderer.getInstance();
        instance.checkURL('');
        expect(instance.state.error).toBe(
            "Invalid URI provided. You can only play playlists. URI must start with 'spotify:user:...:playlist:...'",
        );
    });

    it('checkURL works valid', () => {
        const shallowRenderer = renderer.create(
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
        const instance = shallowRenderer.getInstance();
        instance.checkURL(
            'spotify:user:spotify:playlist:37i9dQZF1DX1lp03JVa0o6',
        );
        expect(instance.state.error).toBe('');
    });

    it('submit form', () => {
        let testClick = false;
        const testOnClick = () => {
            testClick = true;
        };

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

        component
            .find('form')
            .at(0)
            .simulate('submit', { preventDefault: () => {} });
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

        component
            .find('input')
            .at(0)
            .simulate('change', { target: { value: 'newValue' } });
        expect(component.state().url).toBe('newValue');
    });
});
