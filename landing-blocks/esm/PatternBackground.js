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
import { Box } from '@chakra-ui/react';
import React from 'react';
var patterns = {
    dotsSm: {
        backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)',
        backgroundSize: 'calc(10 * 0.5px) calc(10 * 0.5px)',
    },
    dotsMd: {
        backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
        backgroundSize: 'calc(10 * 1px) calc(10 * 1px)',
    },
    dotsLg: {
        backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
        backgroundSize: 'calc(10 * 1.5px) calc(10 * 1.5px)',
    },
    dotsXl: {
        backgroundImage: 'radial-gradient(currentColor 2px, transparent 2px)',
        backgroundSize: 'calc(10 * 2px) calc(10 * 2px)',
    },
    diagonalLinesSm: {
        backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
        backgroundSize: '10px 10px',
    },
    diagonalLinesMd: {
        backgroundImage: 'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)',
        backgroundSize: '25px 25px',
    },
};
export function PatternBackground(_a) {
    // const { colorMode } = useColorMode()
    // const dark = colorMode === 'dark'
    var _b = _a.pattern, pattern = _b === void 0 ? 'dotsMd' : _b, scatter = _a.scatter, children = _a.children, props = __rest(_a, ["pattern", "scatter", "children"]);
    return (React.createElement(Box, __assign({ transform: "translate(".concat(scatter, "px, ").concat(scatter, "px)") }, patterns[pattern], props),
        React.createElement(Box, { transform: "translate(".concat(-scatter, "px, ").concat(-scatter, "px)") }, children)));
}
