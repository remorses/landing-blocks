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
import { Box, useColorMode } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { useColor } from './support';
export function Shape(_a) {
    var _b = _a.shape, shape = _b === void 0 ? 'circle' : _b, _c = _a.mainColor, mainColor = _c === void 0 ? 'gray' : _c, bg = _a.bg, color = _a.color, props = __rest(_a, ["shape", "mainColor", "bg", "color"]);
    var colorMode = useColorMode().colorMode;
    var dark = colorMode === 'dark';
    var realColor = useColor(mainColor);
    if (!props.children) {
        return React.createElement(Fragment, null);
    }
    if (shape === 'circle') {
        return (React.createElement(Box, __assign({ bg: bg ? bg : dark ? "white" : "black", color: color ? color : !dark ? "white" : "black", borderRadius: '100%', p: '1rem' }, props)));
    }
    return null;
}
