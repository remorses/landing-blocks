var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Box, useColorMode } from '@chakra-ui/react';
import Color from 'color-js';
import React, { Fragment } from 'react';
export var Bullet = function (props) {
    var colorMode = useColorMode().colorMode;
    if (!props.children) {
        return React.createElement(Fragment, null);
    }
    return (React.createElement(Box, __assign({ w: 'fit-content', py: '2px', px: '6px', bg: {
            light: Color('black').setAlpha(0.1).toCSS(),
            dark: Color('white').setAlpha(0.2).toCSS(),
        }[colorMode], fontWeight: 'medium', fontSize: 'subtext', borderRadius: '4px', isTruncated: true }, props)));
};
