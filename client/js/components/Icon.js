import React, { Component, PropTypes } from 'react';
import SVGInline from 'react-svg-inline';

export default class Icon extends Component {
    render() {
        const { name, iconType } = this.props;
        return (
            <SVGInline svg={ require(`../../../public/img/icons/${name}.svg`) }
              className={ `icon-type-${iconType}` }
            />
        );
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
};
