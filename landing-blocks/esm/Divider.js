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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useColorMode } from '@chakra-ui/react';
import Color from 'color-js';
import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { PageContainer } from './layout';
import { useFaded } from './hooks';
export var Divider = function (_a) {
    var _b = _a.heading, heading = _b === void 0 ? '' : _b, animate = _a.animate, rest = __rest(_a, ["heading", "animate"]);
    var Faded = useFaded({ animate: animate }).Faded;
    return (React.createElement(PageContainer, __assign({ as: Faded }, rest), heading ? (React.createElement(Stack, { justify: 'center', align: 'center', spacing: '20px', direction: 'row', opacity: 0.6 },
        React.createElement(Line, null),
        React.createElement(Box, { fontWeight: 'medium', fontSize: 'text', letterSpacing: '0.1em', textAlign: 'center' }, heading),
        React.createElement(Line, null))) : (React.createElement(Line, null))));
};
function Line(porps) {
    var colorMode = useColorMode().colorMode;
    return (React.createElement(Box, __assign({ bg: {
            light: Color('black').setAlpha(0.3).toCSS(),
            dark: Color('white').setAlpha(0.3).toCSS(),
        }[colorMode], w: '100%', flex: '1', minH: '1px', maxH: '1px' }, porps)));
}
