import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Processing from './Processing';

describe('Processing component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Processing />,
        );
        expect(result).toMatchSnapshot();
    });
});
