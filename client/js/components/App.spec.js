import React from 'react';
import IntelligentApp from '../containers/IntelligentApp';
import renderer from 'react-test-renderer';

test('App', () => {
    const component = renderer.create(
        <IntelligentApp />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // tree.props.onMouseEnter();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // // manually trigger the callback
    // tree.props.onMouseLeave();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
});
