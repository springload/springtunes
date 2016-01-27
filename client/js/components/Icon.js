import React, { Component, PropTypes } from 'react';
import SVGInline from 'react-svg-inline';

export default class Icon extends Component {
    render() {
        const { name, width, height } = this.props;
        return (
            <SVGInline svg={ require('../../../public/img/icons/' + name + '.svg') }
              width={ width }
              height={ height }
            />
        );
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};
