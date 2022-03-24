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
import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { getPageContainerProps } from './support';
export var Section = function (_a) {
    var children = _a.children, _b = _a.degree, degree = _b === void 0 ? 2 : _b, props = __rest(_a, ["children", "degree"]);
    var _c = getPageContainerProps(props), spacing = _c[0], rest = _c[1];
    // const { bg } = rest
    var baseProps = __assign({ width: '100%', top: 0, left: 0, right: 0, bottom: 0, position: 'absolute', transform: "skewY(".concat(degree, "deg)"), transformOrigin: 'center' }, rest);
    return (React.createElement(Stack, __assign({ spacing: '0px', position: 'relative', as: 'section' }, rest),
        React.createElement(Box, __assign({ m: 0 }, baseProps)),
        React.createElement(Box, __assign({}, baseProps, { m: 0, transform: "skewY(".concat(degree + 2, "deg)"), transformOrigin: '60%', opacity: 0.2 })),
        React.createElement(Box, __assign({}, baseProps, { m: 0, transform: "skewY(".concat(degree + 3, "deg)"), transformOrigin: '70%', opacity: 0.1 })),
        React.createElement(Stack, __assign({ align: 'stretch', width: '100%', m: 0 }, spacing), children)));
};
