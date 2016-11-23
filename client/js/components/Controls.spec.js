import React from 'react';
import Controls from './Controls';
import ReactTestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';

const emptyFunc = () => {};

describe('Controls component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ false }
                isPlaying={ false }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly with isFetching true', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={ true }
                isModifyingMute={ false }
                isMuted={ false }
                isPlaying={ false }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly with isModifyingMute true', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={ false }
                isModifyingMute={ true }
                isMuted={ false }
                isPlaying={ false }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly with isMuted', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ true }
                isPlaying={ false }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );
        expect(result).toMatchSnapshot();
    });

    it('renders correctly with isPlaying true', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ false }
                isPlaying={ true }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );
        expect(result).toMatchSnapshot();
    });

    it('execute correctly refreshClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ false }
                isPlaying={ true }
                volume={ 50 }
                refreshClick={ testOnClick }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );

        component.find('button').first().simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly backClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ false }
                isPlaying={ true }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ testOnClick }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );

        component.find('button').at(1).simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly togglePauseClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ false }
                isPlaying={ true }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ testOnClick }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );

        component.find('button').at(2).simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly nextClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ false }
                isPlaying={ true }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ testOnClick }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );

        component.find('button').at(3).simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly muteClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ false }
                isPlaying={ true }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ testOnClick }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );

        component.find('button').at(4).simulate('click');
        expect(testClick).toBeTruthy();
    });

    it('execute correctly unmuteClick', () => {
        let testClick = false;
        const testOnClick = () => { testClick = true; };

        const component = shallow(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ true }
                isPlaying={ true }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ testOnClick }
                volumeChange={ emptyFunc }
            />
        );

        component.find('button').at(4).simulate('click');
        expect(testClick).toBeTruthy();
    });

    // should show all the buttons when not muted
    it('renders correctly numbers of buttons', () => {
        const component = shallow(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ false }
                isPlaying={ false }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );

        expect(component.find('button').length).toBe(5);
    });

    // should show all the buttons when muted
    it('renders correctly numbers of buttons', () => {
        const component = shallow(
            <Controls
                isFetching={ false }
                isModifyingMute={ false }
                isMuted={ true }
                isPlaying={ false }
                volume={ 50 }
                refreshClick={ emptyFunc }
                togglePauseClick={ emptyFunc }
                backClick={ emptyFunc }
                nextClick={ emptyFunc }
                muteClick={ emptyFunc }
                unmuteClick={ emptyFunc }
                volumeChange={ emptyFunc }
            />
        );

        expect(component.find('button').length).toBe(5);
    });
});
