import React from 'react';
import LastUpdated from './LastUpdated';
import ReactTestUtils from 'react-addons-test-utils';

describe('LastUpdated component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <LastUpdated
                lastUpdated={2342342342}
            />
        );
        expect(result).toMatchSnapshot();
    });
});
