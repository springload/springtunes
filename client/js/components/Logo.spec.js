import React from 'react';
import Logo from './Logo';
import ReactTestUtils from 'react-addons-test-utils';

describe('Logo component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Logo />
        );
        expect(result).toMatchSnapshot();
    });
});
