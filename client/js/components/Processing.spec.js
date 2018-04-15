import React from 'react';
import renderer from 'react-test-renderer';
import Processing from './Processing';

describe('Processing component', () => {
    it('renders correctly with min params', () => {
        const result = renderer.create(<Processing />).toJSON();
        expect(result).toMatchSnapshot();
    });
});
