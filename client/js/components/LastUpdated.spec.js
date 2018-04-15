import React from 'react';
import renderer from 'react-test-renderer';
import LastUpdated from './LastUpdated';

describe('LastUpdated component', () => {
    it('renders correctly with min params', () => {
        const result = renderer
            .create(<LastUpdated lastUpdated={2342342342} />)
            .toJSON();
        expect(result).toMatchSnapshot();
    });
});
