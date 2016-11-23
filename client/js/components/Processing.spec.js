import React from 'react';
import Processing from './Processing';
import ReactTestUtils from 'react-addons-test-utils';

describe('Processing component', () => {
    it('renders correctly with min params', () => {
        const shallowRenderer = ReactTestUtils.createRenderer();
        const result = shallowRenderer.render(
            <Processing />
        );
        expect(result).toMatchSnapshot();
    });
});
