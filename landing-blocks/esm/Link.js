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
import { Link as Link_, } from '@chakra-ui/react';
import React, { forwardRef } from 'react';
export var Link = forwardRef(function (_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link_, __assign({ ref: ref, w: 'fit-content', position: 'relative', textDecoration: 'none', 
        // color='primary'
        fontWeight: 'medium', borderBottom: '2px solid', borderColor: 'transparent', isTruncated: true, transition: 'all 0.2s ease-in-out 0s', _hover: {
            borderColor: 'currentColor',
        } }, props), children));
});
