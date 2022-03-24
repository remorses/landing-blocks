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
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, } from '@chakra-ui/react';
import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { useMyColorMode } from './hooks';
import { darkStyles, PageContainer, Row } from './layout';
export var NavBar = function (_a) {
    var logo = _a.logo, _b = _a.navSpacing, navSpacing = _b === void 0 ? '26px' : _b, _c = _a.navs, navs = _c === void 0 ? [] : _c, rest = __rest(_a, ["logo", "navSpacing", "navs"]);
    var _d = useDisclosure(), isOpen = _d.isOpen, onOpen = _d.onOpen, onClose = _d.onClose;
    var colorMode = useMyColorMode(rest).colorMode;
    return (React.createElement(PageContainer, __assign({ py: '20px' }, rest),
        React.createElement(Row, null,
            React.createElement(Box, { alignSelf: 'flexStart' }, logo),
            React.createElement(Box, { flex: '1' }),
            React.createElement(Stack, { maxW: '100%', direction: 'row', spacing: '20px', align: 'center', display: ['none', 'none', 'flex'] }, Array.isArray(navs) ? (React.createElement(Stack, { align: 'center', direction: 'row', spacing: navSpacing }, navs.map(function (x, i) { return (React.createElement(Stack, { key: i, fontSize: 'text', alignItems: 'center', justify: 'center', fontWeight: 'medium' }, x)); }))) : (navs)),
            React.createElement(Button, { display: ['flex', 'flex', 'none'], variant: 'link', justifyContent: 'center', alignItems: 'center', onClick: onOpen },
                React.createElement(Box, { stroke: { light: 'black', dark: 'white' }[colorMode], as: Menu, boxSize: '36px' }))),
        React.createElement(Drawer, { isOpen: isOpen, placement: 'left', onClose: onClose, size: 'xs' },
            React.createElement(Box, __assign({}, (colorMode == 'dark' ? darkStyles : {})),
                React.createElement(DrawerOverlay, null),
                React.createElement(DrawerContent, null,
                    React.createElement(DrawerCloseButton, null),
                    React.createElement(Box, { mt: '60px' }),
                    React.createElement(DrawerBody, null,
                        React.createElement(Stack, { maxW: '100%', isTruncated: true, spacing: '20px', align: 'center' }, Array.isArray(navs) ? (React.createElement(Stack, { spacing: '40px' }, navs.map(function (x, i) { return (React.createElement(Box, { key: i, fontSize: 'text', fontWeight: 'medium' }, x)); }))) : (navs))))))));
};
var Menu = function (props) {
    return (React.createElement("svg", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinejoin: 'round', strokeLinecap: 'round' }, props),
        React.createElement("line", { x1: '3', y1: '12', x2: '21', y2: '12' }),
        React.createElement("line", { x1: '3', y1: '6', x2: '21', y2: '6' }),
        React.createElement("line", { x1: '3', y1: '18', x2: '21', y2: '18' })));
};
