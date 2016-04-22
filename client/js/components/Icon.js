import React, { Component, PropTypes } from 'react';
import SVGInline from 'react-svg-inline';

export default class Icon extends Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        const { name, iconType } = this.props;
        return (
            <SVGInline
                svg={ require(`../../../public/img/icons/${name}.svg`) } // eslint-disable-line global-require
                className={ `icon-type-${iconType}` }
            />
        );
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
};
