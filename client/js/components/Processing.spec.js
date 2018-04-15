import React from 'react';
import Processing from './Processing';
import renderer from 'react-test-renderer';

describe('Processing component', () => {
    it('renders correctly with min params', () => {
        const result = renderer.create(<Processing />).toJSON();
        expect(result).toMatchSnapshot();
    });
});
