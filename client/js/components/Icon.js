import React, { PropTypes } from 'react';
import SVGInline from 'react-svg-inline';

const propTypes = {
    name: PropTypes.string.isRequired,
    iconType: PropTypes.string.isRequired,
};

const Icon = ({ name, iconType }) => (
    <SVGInline
        svg={ require(`../../../public/img/icons/${name}.svg`) } // eslint-disable-line global-require
        className={ `icon-type-${iconType}` }
    />
);

Icon.propTypes = propTypes;

export default Icon;
