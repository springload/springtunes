import React from 'react';
import LastUpdated from './LastUpdated';
import renderer from 'react-test-renderer';

describe('LastUpdated component', () => {
    it('renders correctly with min params', () => {
        const result = renderer
            .create(<LastUpdated lastUpdated={2342342342} />)
            .toJSON();
        expect(result).toMatchSnapshot();
    });
});
