import React from 'react';
import PropTypes from 'prop-types'

import {
    Chip
} from '@material-ui/core';

import {
    brown,
    yellow,
    cyan,
    pink,
    blue
} from '@material-ui/core/colors';

let getColor = language => {
    switch (language) {
        case 'JavaScript':
            return yellow[400]
        case 'TypeScript':
            return cyan[400]
        case 'Java':
            return brown[400]
        case 'C++':
            return pink[500]

        default:
            return blue[400]
    }
}

const Badge = ({ language }) => {

    let color = getColor(language)

    return <Chip
        label={language}
        style={{ backgroundColor: color }}
        size="small"
    />
}

Badge.propTypes = {
    language: PropTypes.string.isRequired
}

export default Badge
