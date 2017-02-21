import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Logo from './Logo';

describe('Logo component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Logo />,
        );
        expect(result).toMatchSnapshot();
    });
});
