import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './Logo';

describe('Logo component', () => {
    it('renders correctly with min params', () => {
        const result = renderer.create(<Logo />).toJSON();
        expect(result).toMatchSnapshot();
    });
});
