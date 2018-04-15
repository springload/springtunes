import React from 'react';
import Logo from './Logo';
import renderer from 'react-test-renderer';

describe('Logo component', () => {
    it('renders correctly with min params', () => {
        const result = renderer.create(<Logo />).toJSON();
        expect(result).toMatchSnapshot();
    });
});
